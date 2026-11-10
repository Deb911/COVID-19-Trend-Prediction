from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    full_name: str
    role: Optional[str] = "public"

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class OTPRequest(BaseModel):
    email: EmailStr
    purpose: Optional[str] = "registration" # registration, forgot_password

class OTPVerify(BaseModel):
    email: EmailStr
    otp_code: str
    purpose: Optional[str] = "registration"

class PasswordReset(BaseModel):
    email: EmailStr
    otp_code: str
    new_password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict

class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    role: str
    is_verified: bool
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True
