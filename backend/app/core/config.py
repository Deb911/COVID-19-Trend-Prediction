import os
from pathlib import Path
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

# Load .env from project root or backend directory
root_dir = Path(__file__).resolve().parent.parent.parent.parent
env_candidates = [
    root_dir / ".env",
    Path(__file__).resolve().parent.parent.parent / ".env",
    Path(".env").resolve()
]

for env_file in env_candidates:
    if env_file.exists():
        load_dotenv(dotenv_path=env_file, override=True)
        break

# Vercel serverless ephemeral storage compatibility
default_db_url = "sqlite:///./covid_healthcare.db"
if os.getenv("VERCEL"):
    import shutil
    db_name = "covid_healthcare.db"
    tmp_db_path = f"/tmp/{db_name}"
    src_db_path = os.path.join(root_dir, db_name)
    if os.path.exists(src_db_path) and not os.path.exists(tmp_db_path):
        try:
            shutil.copy2(src_db_path, tmp_db_path)
        except Exception:
            pass
    if os.path.exists(tmp_db_path):
        default_db_url = f"sqlite:///{tmp_db_path}"

class Settings(BaseSettings):
    PROJECT_NAME: str = "COVID-19 Trend Prediction – Healthcare Analytics"
    API_V1_STR: str = "/api"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "covid19-healthcare-analytics-secret-key-2026-super-secure")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 # 24 hours
    
    # Database
    DATABASE_URL: str = os.getenv("DATABASE_URL", default_db_url)
    
    # Gmail SMTP / Transactional Email Configuration
    SMTP_HOST: str = os.getenv("SMTP_HOST", "smtp.gmail.com")
    SMTP_PORT: int = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USER: str = os.getenv("SMTP_USER", "")
    SMTP_PASSWORD: str = os.getenv("SMTP_PASSWORD", "")
    EMAILS_FROM_EMAIL: str = os.getenv("EMAILS_FROM_EMAIL", "")
    EMAILS_FROM_NAME: str = os.getenv("EMAILS_FROM_NAME", "COVID-19 Public Health Intelligence Portal")
    
    # OTP Configuration
    OTP_EXPIRE_MINUTES: int = 5
    OTP_MAX_ATTEMPTS: int = 3
    OTP_RESEND_COOLDOWN_SECONDS: int = 60
    
    # CORS
    BACKEND_CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:8000"
    ]

    class Config:
        case_sensitive = True

settings = Settings()
