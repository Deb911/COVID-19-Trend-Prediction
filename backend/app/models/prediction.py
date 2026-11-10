from datetime import datetime
from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text
from app.db.session import Base

class PredictionResult(Base):
    __tablename__ = "prediction_results"

    id = Column(Integer, primary_key=True, index=True)
    model_name = Column(String(100), index=True, nullable=False)
    forecast_date = Column(String(20), index=True, nullable=False)
    horizon_days = Column(Integer, nullable=False) # 7, 14, 30
    predicted_value = Column(Float, nullable=False)
    lower_bound = Column(Float, nullable=False)
    upper_bound = Column(Float, nullable=False)
    target_variable = Column(String(50), default="total_requests", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

class ModelMetadata(Base):
    __tablename__ = "model_metadata"

    id = Column(Integer, primary_key=True, index=True)
    model_name = Column(String(100), unique=True, index=True, nullable=False)
    version = Column(String(50), default="1.0.0", nullable=False)
    training_date = Column(DateTime, default=datetime.utcnow, nullable=False)
    test_mae = Column(Float, nullable=False)
    test_rmse = Column(Float, nullable=False)
    test_mape = Column(Float, nullable=False)
    test_r2 = Column(Float, nullable=False)
    is_best = Column(Boolean, default=False, nullable=False)
    parameters_json = Column(Text, nullable=True)
