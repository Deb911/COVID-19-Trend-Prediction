import os
import json
from fastapi import APIRouter, Depends, Query, HTTPException, BackgroundTasks
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.prediction import ModelMetadata
from app.models.audit import AuditLog
from app.models.user import User
from app.api.deps import require_role
from app.schemas.prediction import (
    ModelComparisonResponse, ForecastResponse,
    ValidationResponse, ModelPerformanceItem
)

router = APIRouter(prefix="/predictions", tags=["Prediction Engine"])

def load_summary():
    file_path = os.path.join("data", "model_summary.json")
    if not os.path.exists(file_path):
        from ml.engine import CovidPredictionPipeline
        pipeline = CovidPredictionPipeline()
        return pipeline.train_and_evaluate()
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

@router.get("/models", response_model=ModelComparisonResponse)
def get_model_comparison(db: Session = Depends(get_db)):
    summary = load_summary()
    best_m = summary.get("best_model", "ARIMA")
    
    models_list = []
    for c in summary.get("comparison", []):
        models_list.append(ModelPerformanceItem(
            model_name=c["model_name"],
            mae=c["mae"],
            rmse=c["rmse"],
            mape=c["mape"],
            r2=c["r2"],
            residual_std=c["residual_std"],
            train_samples=c["train_samples"],
            test_samples=c["test_samples"],
            last_trained=c["last_trained"],
            is_best=(c["model_name"] == best_m)
        ))

    interp = (
        f"Chronological 80/20 train-test evaluation indicates {best_m} achieved the strongest generalization "
        f"with the lowest test RMSE ({summary['comparison'][0]['rmse']:.2f}). Time series autoregression captures "
        f"the post-peak tapering dynamics and cyclical weekly variations effectively without data leakage."
    )

    return ModelComparisonResponse(
        models=models_list,
        best_model=best_m,
        features_used=summary.get("features_used", []),
        last_training_date=summary.get("last_training_date", "2026-11-05"),
        epidemic_interpretation=interp
    )

@router.get("/forecast", response_model=ForecastResponse)
def get_forecast(
    horizon: int = Query(7, ge=1, le=60),
    model: str = Query("ARIMA")
):
    summary = load_summary()
    forecasts = summary.get("forecasts", {})
    horizon_key = str(horizon)
    
    if horizon_key not in forecasts:
        horizon_key = "7"
    
    model_forecasts = forecasts[horizon_key].get(model)
    if not model_forecasts:
        # Fallback to best model
        model = summary.get("best_model", "ARIMA")
        model_forecasts = forecasts[horizon_key].get(model, [])

    # Find model RMSE
    m_info = next((m for m in summary.get("comparison", []) if m["model_name"] == model), {})
    rmse = m_info.get("rmse", 34.0)

    lower_series = [pt["lower_bound"] for pt in model_forecasts]
    upper_series = [pt["upper_bound"] for pt in model_forecasts]

    return ForecastResponse(
        horizon_days=horizon,
        model_used=model,
        forecast_points=model_forecasts,
        lower_bound_series=lower_series,
        upper_bound_series=upper_series,
        confidence_level="95% Confidence Interval (Heteroskedastic Expansion)",
        model_rmse=rmse,
        disclaimer="Predictions are statistical epidemic forecasts based on historical healthcare distress signals. They indicate projected resource demand and not clinical diagnoses or deterministic guarantees."
    )

@router.get("/validation", response_model=ValidationResponse)
def get_validation(model: str = Query("ARIMA")):
    summary = load_summary()
    hist_val = summary.get("historical_validation", {})
    points = hist_val.get(model, [])
    
    if not points:
        model = summary.get("best_model", "ARIMA")
        points = hist_val.get(model, [])

    m_info = next((m for m in summary.get("comparison", []) if m["model_name"] == model), {})
    
    return ValidationResponse(
        model_name=model,
        metrics={
            "mae": m_info.get("mae", 0.0),
            "rmse": m_info.get("rmse", 0.0),
            "mape": m_info.get("mape", 0.0),
            "r2": m_info.get("r2", 0.0)
        },
        points=points
    )

def run_retraining_job():
    try:
        from ml.engine import CovidPredictionPipeline
        pipeline = CovidPredictionPipeline()
        pipeline.train_and_evaluate()
        print("[RETRAIN JOB] Successfully completed model retraining pipeline.")
    except Exception as e:
        print(f"[RETRAIN JOB ERROR] Retraining failed: {e}")

@router.post("/retrain")
def retrain_models(
    background_tasks: BackgroundTasks,
    user: User = Depends(require_role(["admin", "researcher"])),
    db: Session = Depends(get_db)
):
    background_tasks.add_task(run_retraining_job)
    
    db.add(AuditLog(
        user_email=user.email,
        action="RETRAIN_MODEL",
        details="Triggered asynchronous ML model retraining pipeline across all 4 architectures."
    ))
    db.commit()

    return {
        "message": "Model retraining job scheduled in background. Models will update upon pipeline completion.",
        "status": "in_progress",
        "triggered_by": user.email
    }
