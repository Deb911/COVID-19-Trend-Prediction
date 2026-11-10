import smtplib
import socket
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.utils import formatdate, make_msgid
from datetime import datetime
from typing import Tuple, Optional
from app.core.config import settings

logger = logging.getLogger("email_service")
logging.basicConfig(level=logging.INFO)

def send_otp_email(to_email: str, otp_code: str, purpose: str = "Account Verification") -> Tuple[bool, str, Optional[str]]:
    """
    Delivers a cryptographically generated 6-digit OTP to a real Gmail or SMTP inbox.
    Returns: (success: bool, status_message: str, error_detail: Optional[str])
    """
    smtp_host = settings.SMTP_HOST or "smtp.gmail.com"
    smtp_port = settings.SMTP_PORT or 587
    smtp_user = settings.SMTP_USER.strip() if settings.SMTP_USER else ""
    # Google App Passwords are 16 characters often generated with spaces like 'abcd efgh ijkl mnop'
    smtp_password = settings.SMTP_PASSWORD.replace(" ", "").strip() if settings.SMTP_PASSWORD else ""
    from_email = settings.EMAILS_FROM_EMAIL.strip() or smtp_user

    # Mask recipient email for safe logging (e.g. j***e@gmail.com)
    parts = to_email.split("@")
    masked_email = f"{parts[0][:1]}***{parts[0][-1:]}@{parts[1]}" if len(parts[0]) > 2 else f"***@{parts[1]}" if len(parts) > 1 else "***"

    logger.info(f"[EMAIL SERVICE ATTEMPT] Initiating OTP delivery to {masked_email} for '{purpose}' via {smtp_host}:{smtp_port}")

    # Check if credentials are provided
    if not smtp_user or not smtp_password:
        err_msg = (
            "Gmail SMTP is not configured. Please specify SMTP_USER and a 16-character Gmail App Password "
            "(SMTP_PASSWORD) in your .env file or configuration."
        )
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg}")
        return False, "SMTP configuration missing", err_msg

    # Prepare Headers & Content
    subject = f"Your COVID-19 Portal Verification Code: {otp_code}"
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = f"{settings.EMAILS_FROM_NAME} <{from_email}>"
    msg["To"] = to_email
    msg["Date"] = formatdate(localtime=True)
    msg["Message-ID"] = make_msgid(domain=smtp_host)
    msg["X-Entity-Ref-ID"] = make_msgid(domain="covid-analytics.health")

    # Plain Text Alternative (Important for Spam Filters)
    text_content = f"""
COVID-19 EPIDEMIC INTELLIGENCE SYSTEM
Public Health Analytics & Predictive Portal

{purpose.upper()}

Your single-use 6-digit verification code is: {otp_code}

This code is confidential and will expire in {settings.OTP_EXPIRE_MINUTES} minutes.
Do not share this code with anyone. If you did not request this, please ignore this email.

(c) {datetime.now().year} COVID-19 Trend Prediction System. All rights reserved.
""".strip()

    # Rich HTML Body
    html_content = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>COVID-19 Portal Verification</title>
</head>
<body style="margin:0; padding:24px; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color:#f1f5f9; color:#0f172a;">
    <div style="max-width:540px; margin:0 auto; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.06);">
        <!-- Header -->
        <div style="background-color:#0f172a; padding:24px; text-align:center; color:#ffffff;">
            <h1 style="margin:0; font-size:18px; font-weight:700; letter-spacing:0.5px;">COVID-19 EPIDEMIC INTELLIGENCE</h1>
            <p style="margin:4px 0 0; font-size:12px; color:#94a3b8;">Healthcare Analytics & Trend Prediction System</p>
        </div>
        <!-- Content -->
        <div style="padding:32px 24px; text-align:center;">
            <div style="display:inline-block; padding:4px 12px; background-color:#eff6ff; color:#1d4ed8; font-size:11px; font-weight:700; border-radius:9999px; text-transform:uppercase; margin-bottom:16px;">
                {purpose}
            </div>
            <h2 style="margin:0 0 8px; font-size:20px; font-weight:700; color:#0f172a;">Verify Your Email Address</h2>
            <p style="margin:0 0 24px; font-size:13px; line-height:1.6; color:#475569;">
                Use the following 6-digit One-Time Passcode (OTP) to authenticate your access. This code is active for <strong>{settings.OTP_EXPIRE_MINUTES} minutes</strong>.
            </p>
            <!-- OTP Display Box -->
            <div style="background:#f8fafc; border:2px dashed #0284c7; border-radius:10px; padding:18px; margin:0 auto 24px; max-width:280px;">
                <span style="font-family:'Courier New', Courier, monospace; font-size:34px; font-weight:800; letter-spacing:8px; color:#0284c7; display:block;">
                    {otp_code}
                </span>
            </div>
            <p style="margin:0; font-size:12px; line-height:1.5; color:#64748b;">
                Never share this verification code with anyone. Platform support will never request your OTP.
            </p>
        </div>
        <!-- Footer -->
        <div style="background-color:#f8fafc; border-top:1px solid #e2e8f0; padding:16px 24px; text-align:center; font-size:11px; color:#94a3b8;">
            &copy; {datetime.now().year} COVID-19 Trend Prediction Platform &bull; Ministry/Public Health Analytics Standard
        </div>
    </div>
</body>
</html>"""

    msg.attach(MIMEText(text_content, "plain", "utf-8"))
    msg.attach(MIMEText(html_content, "html", "utf-8"))

    try:
        # Connect to Gmail SMTP
        if smtp_port == 465:
            server = smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=12)
        else:
            server = smtplib.SMTP(smtp_host, smtp_port, timeout=12)
            server.ehlo()
            server.starttls()
            server.ehlo()

        server.login(smtp_user, smtp_password)
        server.sendmail(from_email, [to_email], msg.as_string())
        server.quit()

        logger.info(f"[EMAIL SERVICE SUCCESS] OTP email successfully dispatched to {masked_email}")
        return True, "Verification email sent successfully.", None

    except smtplib.SMTPAuthenticationError as e:
        err_msg = (
            "Gmail SMTP authentication failed. When using Gmail, you must generate a 16-character App Password "
            "(Google Account > Security > 2-Step Verification > App Passwords). Your regular Gmail password will be rejected."
        )
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg} Code: {e.smtp_code}")
        return False, "SMTP Authentication Failed", err_msg

    except (smtplib.SMTPConnectError, socket.timeout, ConnectionRefusedError, socket.gaierror) as e:
        err_msg = f"Unable to establish connection with {smtp_host}:{smtp_port}. Network error: {str(e)}"
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg}")
        return False, "SMTP Connection Failed", err_msg

    except smtplib.SMTPRecipientsRefused as e:
        err_msg = f"Recipient email address ({masked_email}) was rejected by Gmail SMTP server."
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg}")
        return False, "Recipient Rejected", err_msg

    except smtplib.SMTPSenderRefused as e:
        err_msg = f"Sender email ({from_email}) was refused by Gmail. Ensure SMTP_USER matches your Gmail address."
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg}")
        return False, "Sender Refused", err_msg

    except Exception as e:
        err_msg = f"Unexpected SMTP transmission error: {type(e).__name__} - {str(e)}"
        logger.error(f"[EMAIL SERVICE ERROR] {err_msg}")
        return False, "Email Delivery Failed", err_msg
