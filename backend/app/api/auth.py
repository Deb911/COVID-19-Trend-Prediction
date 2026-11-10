import os
import hashlib
import secrets
import smtplib
from datetime import datetime, timedelta
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Request
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.core.security import get_password_hash, verify_password, create_access_token
from app.core.config import settings
from app.models.user import User, OTPVerification
from app.models.audit import AuditLog
from app.schemas.auth import (
    UserRegister, UserLogin, OTPRequest, OTPVerify,
    PasswordReset, Token, UserResponse
)
from app.services.email_service import send_otp_email
from app.api.deps import get_required_user, require_role

router = APIRouter(prefix="/auth", tags=["Authentication"])

def generate_secure_otp() -> str:
    """Generates a cryptographically secure 6-digit random code."""
    return f"{secrets.randbelow(900000) + 100000}"

def hash_otp(code: str) -> str:
    return hashlib.sha256(code.strip().encode("utf-8")).hexdigest()

@router.get("/smtp-status")
def get_smtp_status():
    """Returns current SMTP connection status and diagnostics."""
    is_configured = bool(settings.SMTP_USER and settings.SMTP_PASSWORD)
    user_masked = ""
    if settings.SMTP_USER:
        p = settings.SMTP_USER.split("@")
        user_masked = f"{p[0][:2]}***@{p[1]}" if len(p) > 1 else "***"

    return {
        "smtp_host": settings.SMTP_HOST,
        "smtp_port": settings.SMTP_PORT,
        "is_configured": is_configured,
        "configured_sender": user_masked,
        "instructions": (
            "For real Gmail delivery: Visit Google Account > Security > 2-Step Verification > App Passwords. "
            "Generate a 16-character App Password and add it to your .env file or configuration as SMTP_PASSWORD."
        )
    }

class SMTPConfigPayload(BaseModel):
    smtp_host: Optional[str] = "smtp.gmail.com"
    smtp_port: Optional[int] = 587
    smtp_user: str
    smtp_password: str
    from_name: Optional[str] = "COVID-19 Epidemic Intelligence Portal"

@router.post("/configure-smtp")
def configure_smtp(payload: SMTPConfigPayload, user: User = Depends(require_role(["admin"]))):
    """Allows an administrator to configure Gmail App Password or custom SMTP settings."""
    settings.SMTP_HOST = payload.smtp_host or "smtp.gmail.com"
    settings.SMTP_PORT = payload.smtp_port or 587
    settings.SMTP_USER = payload.smtp_user.strip()
    settings.SMTP_PASSWORD = payload.smtp_password.replace(" ", "").strip()
    settings.EMAILS_FROM_EMAIL = payload.smtp_user.strip()
    settings.EMAILS_FROM_NAME = payload.from_name or "COVID-19 Epidemic Intelligence Portal"

    # Persist to .env file
    try:
        env_lines = []
        if os.path.exists(".env"):
            with open(".env", "r", encoding="utf-8") as f:
                env_lines = f.readlines()
        
        updates = {
            "SMTP_HOST": settings.SMTP_HOST,
            "SMTP_PORT": str(settings.SMTP_PORT),
            "SMTP_USER": settings.SMTP_USER,
            "SMTP_PASSWORD": settings.SMTP_PASSWORD,
            "EMAILS_FROM_EMAIL": settings.EMAILS_FROM_EMAIL,
            "EMAILS_FROM_NAME": settings.EMAILS_FROM_NAME
        }

        new_lines = []
        handled = set()
        for line in env_lines:
            matched = False
            for k, v in updates.items():
                if line.startswith(f"{k}="):
                    new_lines.append(f"{k}={v}\n")
                    handled.add(k)
                    matched = True
                    break
            if not matched:
                new_lines.append(line)

        for k, v in updates.items():
            if k not in handled:
                new_lines.append(f"{k}={v}\n")

        with open(".env", "w", encoding="utf-8") as f:
            f.writelines(new_lines)

    except Exception as e:
        pass

    return {
        "message": "Gmail SMTP configuration updated successfully.",
        "smtp_host": settings.SMTP_HOST,
        "smtp_port": settings.SMTP_PORT,
        "sender": settings.SMTP_USER
    }

class TestSMTPPayload(BaseModel):
    test_email: EmailStr

@router.post("/test-smtp")
def test_smtp_delivery(payload: TestSMTPPayload, user: User = Depends(get_required_user)):
    """Sends an immediate test email to verify Gmail credentials and connectivity."""
    test_otp = generate_secure_otp()
    success, msg, err = send_otp_email(payload.test_email, test_otp, purpose="SMTP Diagnostics Test")
    if not success:
        raise HTTPException(
            status_code=502,
            detail=f"Gmail SMTP Test Failed: {err}"
        )
    return {
        "message": f"Test verification email successfully dispatched to {payload.test_email}.",
        "status": "delivered",
        "tested_via": f"{settings.SMTP_HOST}:{settings.SMTP_PORT}"
    }

@router.post("/register")
def register(payload: UserRegister, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    existing = db.query(User).filter(User.email == email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User with this email is already registered.")

    # Generate a cryptographically secure 6-digit OTP
    raw_otp = generate_secure_otp()
    otp_hashed = hash_otp(raw_otp)
    expires = datetime.utcnow() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)

    # Attempt real email transmission FIRST before committing account
    success, msg, err_detail = send_otp_email(email, raw_otp, purpose="Account Verification")
    if not success:
        raise HTTPException(
            status_code=502,
            detail=f"Email delivery failed: {err_detail}. OTP could not be sent to {email}."
        )

    # Create unverified user
    user = User(
        email=email,
        hashed_password=get_password_hash(payload.password),
        full_name=payload.full_name.strip(),
        role=payload.role if payload.role in ["public", "healthcare_worker", "researcher"] else "public",
        is_verified=False,
        is_active=True
    )
    db.add(user)
    db.flush()

    # Invalidate any previously pending OTPs for this email
    db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.is_used == False
    ).update({"is_used": True})

    # Store hashed OTP
    otp_record = OTPVerification(
        email=email,
        otp_code=otp_hashed,
        otp_type="registration",
        expires_at=expires,
        attempts=0,
        is_used=False
    )
    db.add(otp_record)

    db.add(AuditLog(
        user_email=email,
        action="REGISTER_OTP_SENT",
        details="User registration initiated and verification OTP dispatched via Gmail SMTP",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    return {
        "message": "Registration successful. A 6-digit verification code has been dispatched to your Gmail inbox.",
        "email": email,
        "expires_in_minutes": settings.OTP_EXPIRE_MINUTES
    }

@router.post("/send-otp")
def send_otp(payload: OTPRequest, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    purpose = payload.purpose or "registration"

    # Enforce 60-second cooldown
    recent = db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.otp_type == purpose
    ).order_by(OTPVerification.created_at.desc()).first()

    if recent:
        elapsed = (datetime.utcnow() - recent.created_at).total_seconds()
        if elapsed < settings.OTP_RESEND_COOLDOWN_SECONDS:
            remaining = int(settings.OTP_RESEND_COOLDOWN_SECONDS - elapsed)
            raise HTTPException(
                status_code=429,
                detail=f"Please wait {remaining} seconds before requesting a new verification code."
            )

    raw_otp = generate_secure_otp()
    otp_hashed = hash_otp(raw_otp)
    expires = datetime.utcnow() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)

    # Deliver email
    success, msg, err_detail = send_otp_email(email, raw_otp, purpose=purpose.replace("_", " ").title())
    if not success:
        raise HTTPException(
            status_code=502,
            detail=f"Failed to dispatch verification email: {err_detail}"
        )

    # Invalidate all prior unused OTPs for this email & purpose
    db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.otp_type == purpose,
        OTPVerification.is_used == False
    ).update({"is_used": True})

    # Save new hashed OTP
    new_otp = OTPVerification(
        email=email,
        otp_code=otp_hashed,
        otp_type=purpose,
        expires_at=expires,
        attempts=0,
        is_used=False
    )
    db.add(new_otp)

    db.add(AuditLog(
        user_email=email,
        action="OTP_RESEND_SUCCESS",
        details=f"Fresh OTP dispatched for {purpose}",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    return {
        "message": "A fresh 6-digit verification code has been sent to your Gmail inbox.",
        "email": email,
        "expires_in_minutes": settings.OTP_EXPIRE_MINUTES
    }

@router.post("/verify-otp")
def verify_otp(payload: OTPVerify, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    purpose = payload.purpose or "registration"

    otp_rec = db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.otp_type == purpose,
        OTPVerification.is_used == False
    ).order_by(OTPVerification.created_at.desc()).first()

    if not otp_rec:
        raise HTTPException(
            status_code=400,
            detail="No active verification code found for this account. Please request a new code."
        )

    # Check 5-minute expiration
    if datetime.utcnow() > otp_rec.expires_at:
        otp_rec.is_used = True
        db.commit()
        raise HTTPException(
            status_code=400,
            detail="Verification code has expired (validity is 5 minutes). Please request a new code."
        )

    # Check brute-force attempt limits
    if otp_rec.attempts >= settings.OTP_MAX_ATTEMPTS:
        otp_rec.is_used = True
        db.commit()
        raise HTTPException(
            status_code=403,
            detail="Maximum verification attempts (3) exceeded. This code has been invalidated for security."
        )

    # Compare SHA-256 hash
    submitted_hash = hash_otp(payload.otp_code)
    if submitted_hash != otp_rec.otp_code:
        otp_rec.attempts += 1
        db.commit()
        remaining = settings.OTP_MAX_ATTEMPTS - otp_rec.attempts
        if remaining <= 0:
            otp_rec.is_used = True
            db.commit()
            raise HTTPException(
                status_code=403,
                detail="Maximum attempts exceeded. Code invalidated. Please request a new code."
            )
        raise HTTPException(
            status_code=400,
            detail=f"Invalid OTP code. {remaining} attempt(s) remaining."
        )

    # Successfully validated
    otp_rec.is_used = True

    if purpose == "registration":
        user = db.query(User).filter(User.email == email).first()
        if user:
            user.is_verified = True

    db.add(AuditLog(
        user_email=email,
        action="OTP_VERIFIED_SUCCESS",
        details=f"Email successfully verified for {purpose}",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    return {
        "message": "Email verification successfully confirmed. Your account is active.",
        "email": email,
        "verified": True
    }

@router.post("/login", response_model=Token)
def login(payload: UserLogin, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    user = db.query(User).filter(User.email == email).first()

    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    if not user.is_active:
        raise HTTPException(status_code=403, detail="Account is deactivated. Contact platform administration.")

    if not user.is_verified:
        raise HTTPException(
            status_code=403,
            detail="Account email is not verified. Please complete OTP verification to activate access."
        )

    user.last_login = datetime.utcnow()
    db.add(AuditLog(
        user_email=user.email,
        action="LOGIN_SUCCESS",
        details=f"Authenticated with role: {user.role}",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    token = create_access_token(subject=user.email)
    return {
        "access_token": token,
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "full_name": user.full_name,
            "role": user.role,
            "is_verified": user.is_verified
        }
    }

@router.post("/forgot-password")
def forgot_password(payload: OTPRequest, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    user = db.query(User).filter(User.email == email).first()
    if not user:
        return {"message": "If an account exists with this email, a reset verification code has been dispatched."}

    raw_otp = generate_secure_otp()
    otp_hashed = hash_otp(raw_otp)
    expires = datetime.utcnow() + timedelta(minutes=settings.OTP_EXPIRE_MINUTES)

    success, msg, err_detail = send_otp_email(email, raw_otp, purpose="Password Reset")
    if not success:
        raise HTTPException(
            status_code=502,
            detail=f"Failed to dispatch password reset code: {err_detail}"
        )

    db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.otp_type == "forgot_password",
        OTPVerification.is_used == False
    ).update({"is_used": True})

    db.add(OTPVerification(
        email=email,
        otp_code=otp_hashed,
        otp_type="forgot_password",
        expires_at=expires,
        attempts=0,
        is_used=False
    ))
    db.add(AuditLog(
        user_email=email,
        action="FORGOT_PASSWORD_REQUEST",
        details="Dispatched password reset OTP via Gmail SMTP",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    return {"message": "A 6-digit password reset code has been sent to your Gmail inbox."}

@router.post("/reset-password")
def reset_password(payload: PasswordReset, request: Request, db: Session = Depends(get_db)):
    email = payload.email.lower().strip()
    submitted_hash = hash_otp(payload.otp_code)

    otp_rec = db.query(OTPVerification).filter(
        OTPVerification.email == email,
        OTPVerification.otp_type == "forgot_password",
        OTPVerification.is_used == False
    ).order_by(OTPVerification.created_at.desc()).first()

    if not otp_rec or datetime.utcnow() > otp_rec.expires_at:
        raise HTTPException(status_code=400, detail="Invalid or expired reset code.")

    if otp_rec.otp_code != submitted_hash:
        otp_rec.attempts += 1
        db.commit()
        remaining = settings.OTP_MAX_ATTEMPTS - otp_rec.attempts
        if remaining <= 0:
            otp_rec.is_used = True
            db.commit()
            raise HTTPException(status_code=403, detail="Maximum attempts exceeded. Code invalidated.")
        raise HTTPException(status_code=400, detail=f"Invalid reset code. {remaining} attempt(s) remaining.")

    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="Account not found.")

    otp_rec.is_used = True
    user.hashed_password = get_password_hash(payload.new_password)
    db.add(AuditLog(
        user_email=email,
        action="PASSWORD_RESET_SUCCESS",
        details="Password successfully updated via OTP authentication",
        ip_address=request.client.host if request.client else "127.0.0.1"
    ))
    db.commit()

    return {"message": "Your password has been successfully updated. You may now log in."}

@router.post("/logout")
def logout(user: User = Depends(get_required_user), db: Session = Depends(get_db)):
    db.add(AuditLog(
        user_email=user.email,
        action="LOGOUT",
        details="User session closed"
    ))
    db.commit()
    return {"message": "Successfully logged out."}

@router.get("/me", response_model=UserResponse)
def get_me(user: User = Depends(get_required_user)):
    return user
