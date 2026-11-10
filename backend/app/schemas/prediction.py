from typing import List, Dict, Any, Optional
from pydantic import BaseModel

class ModelPerformanceItem(BaseModel):
    model_name: str
    mae: float
    rmse: float
    mape: float
    r2: float
    residual_std: float
    train_samples: int
    test_samples: int
    last_trained: str
    is_best: bool

class ForecastPoint(BaseModel):
    date: str
    step: int
    forecast: float
    lower_bound: float
    upper_bound: float

class ModelComparisonResponse(BaseModel):
    models: List[ModelPerformanceItem]
    best_model: str
    features_used: List[str]
    last_training_date: str
    epidemic_interpretation: str

class ForecastResponse(BaseModel):
    horizon_days: int
    model_used: str
    forecast_points: List[ForecastPoint]
    lower_bound_series: List[float]
    upper_bound_series: List[float]
    confidence_level: str
    model_rmse: float
    disclaimer: str

class ValidationPoint(BaseModel):
    date: str
    actual: int
    predicted: float
    error: float

class ValidationResponse(BaseModel):
    model_name: str
    metrics: Dict[str, float]
    points: List[ValidationPoint]
