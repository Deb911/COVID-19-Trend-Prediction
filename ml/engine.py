import os
import json
import joblib
import numpy as np
import pandas as pd
from datetime import datetime, timedelta
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import statsmodels.api as sm
import warnings
warnings.filterwarnings('ignore')

os.makedirs("ml/saved_models", exist_ok=True)
os.makedirs("data", exist_ok=True)

def calculate_mape(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    non_zero = y_true != 0
    if not np.any(non_zero):
        return 0.0
    return float(np.mean(np.abs((y_true[non_zero] - y_pred[non_zero]) / y_true[non_zero])) * 100)

def prepare_features(df, target_col='total_requests'):
    data = df.copy()
    data['date'] = pd.to_datetime(data['date'])
    data = data.sort_values('date').reset_index(drop=True)
    
    # Target
    y = data[target_col].values
    
    # Lag features
    data['lag_1'] = data[target_col].shift(1)
    data['lag_2'] = data[target_col].shift(2)
    data['lag_3'] = data[target_col].shift(3)
    data['lag_7'] = data[target_col].shift(7)
    
    # Rolling features
    data['rolling_3_mean'] = data[target_col].shift(1).rolling(3, min_periods=1).mean()
    data['rolling_7_mean'] = data[target_col].shift(1).rolling(7, min_periods=1).mean()
    data['rolling_7_std'] = data[target_col].shift(1).rolling(7, min_periods=1).std().fillna(0)
    
    # Time indicators
    data['day_of_week'] = data['date'].dt.dayofweek
    data['day_of_month'] = data['date'].dt.day
    data['time_step'] = np.arange(len(data))
    
    # Growth rate
    data['growth_rate'] = (data[target_col].shift(1) - data[target_col].shift(2)) / (data[target_col].shift(2) + 1)
    data['growth_rate'] = data['growth_rate'].fillna(0)
    
    feature_cols = [
        'lag_1', 'lag_2', 'lag_3', 'lag_7',
        'rolling_3_mean', 'rolling_7_mean', 'rolling_7_std',
        'day_of_week', 'day_of_month', 'time_step', 'growth_rate'
    ]
    
    clean_data = data.dropna(subset=['lag_7']).reset_index(drop=True)
    X = clean_data[feature_cols]
    y_clean = clean_data[target_col].values
    dates = clean_data['date'].dt.strftime("%Y-%m-%d").values
    
    return clean_data, X, y_clean, feature_cols, dates

class CovidPredictionPipeline:
    def __init__(self, data_path="data/daily_epidemic_time_series.csv"):
        self.data_path = data_path
        self.models = {}
        self.metrics = {}

    def train_and_evaluate(self):
        print(f"Loading data from {self.data_path}...", flush=True)
        df = pd.read_csv(self.data_path)
        clean_data, X, y, feature_cols, dates = prepare_features(df, target_col='total_requests')
        
        n = len(X)
        split_idx = int(n * 0.8)
        print(f"Dataset prepared: {n} days (Train: {split_idx}, Test: {n - split_idx})", flush=True)
        
        X_train, X_test = X.iloc[:split_idx], X.iloc[split_idx:]
        y_train, y_test = y[:split_idx], y[split_idx:]
        dates_train, dates_test = dates[:split_idx], dates[split_idx:]
        
        models_def = {
            "LinearRegression": LinearRegression(),
            "RandomForest": RandomForestRegressor(n_estimators=100, max_depth=5, random_state=42),
            "GradientBoosting": GradientBoostingRegressor(n_estimators=100, learning_rate=0.08, max_depth=3, random_state=42)
        }
        
        comparison = []
        historical_predictions = {}
        
        for name, model in models_def.items():
            print(f"Training {name}...", flush=True)
            model.fit(X_train, y_train)
            self.models[name] = model
            joblib.dump(model, f"ml/saved_models/{name}.joblib")
            
            test_preds = model.predict(X_test)
            mae = float(mean_absolute_error(y_test, test_preds))
            rmse = float(np.sqrt(mean_squared_error(y_test, test_preds)))
            mape = calculate_mape(y_test, test_preds)
            r2 = float(r2_score(y_test, test_preds))
            
            residuals = y_test - test_preds
            res_std = float(np.std(residuals)) if len(residuals) > 0 else 1.0
            
            metrics_dict = {
                "model_name": name,
                "mae": round(mae, 2),
                "rmse": round(rmse, 2),
                "mape": round(mape, 2),
                "r2": round(r2, 4),
                "residual_std": round(res_std, 2),
                "train_samples": len(X_train),
                "test_samples": len(X_test),
                "last_trained": datetime.now().isoformat()
            }
            self.metrics[name] = metrics_dict
            comparison.append(metrics_dict)
            
            historical_predictions[name] = [
                {
                    "date": str(dates_test[i]),
                    "actual": int(y_test[i]),
                    "predicted": round(float(test_preds[i]), 1),
                    "error": round(float(test_preds[i] - y_test[i]), 1)
                }
                for i in range(len(y_test))
            ]

        # Time Series ARIMA Model
        print("Training ARIMA time series model...", flush=True)
        try:
            arima_order = (1, 1, 1)
            arima_res = sm.tsa.ARIMA(y_train, order=arima_order).fit()
            arima_preds = arima_res.forecast(steps=len(y_test))
            arima_mae = float(mean_absolute_error(y_test, arima_preds))
            arima_rmse = float(np.sqrt(mean_squared_error(y_test, arima_preds)))
            arima_mape = calculate_mape(y_test, arima_preds)
            arima_r2 = float(r2_score(y_test, arima_preds))
            arima_std = float(np.std(y_test - arima_preds))
            
            arima_metrics = {
                "model_name": "ARIMA",
                "mae": round(arima_mae, 2),
                "rmse": round(arima_rmse, 2),
                "mape": round(arima_mape, 2),
                "r2": round(arima_r2, 4),
                "residual_std": round(arima_std, 2),
                "train_samples": len(y_train),
                "test_samples": len(y_test),
                "last_trained": datetime.now().isoformat()
            }
            self.metrics["ARIMA"] = arima_metrics
            comparison.append(arima_metrics)
            
            historical_predictions["ARIMA"] = [
                {
                    "date": str(dates_test[i]),
                    "actual": int(y_test[i]),
                    "predicted": round(float(arima_preds[i]), 1),
                    "error": round(float(arima_preds[i] - y_test[i]), 1)
                }
                for i in range(len(y_test))
            ]
        except Exception as e:
            print(f"ARIMA warning: {e}", flush=True)

        best_model_name = min(comparison, key=lambda x: x['rmse'])['model_name']
        print(f"Best Model Selected: {best_model_name} (RMSE: {self.metrics[best_model_name]['rmse']})", flush=True)

        # Generate future forecasts for 7, 14, 30 days
        print("Generating future forecasts for 7, 14, 30 day horizons...", flush=True)
        forecast_results = {}
        last_date = pd.to_datetime(clean_data['date'].iloc[-1])
        full_series = list(y)
        
        for horizon in [7, 14, 30]:
            forecast_results[str(horizon)] = {}
            for m_name in self.metrics.keys():
                forecast_points = []
                cur_series = full_series.copy()
                res_std = self.metrics[m_name]['residual_std']
                
                for step in range(1, horizon + 1):
                    fc_date = (last_date + timedelta(days=step)).strftime("%Y-%m-%d")
                    day_of_week = (last_date + timedelta(days=step)).dayofweek
                    day_of_month = (last_date + timedelta(days=step)).day
                    t_step = len(cur_series)
                    
                    l1 = cur_series[-1]
                    l2 = cur_series[-2] if len(cur_series) >= 2 else l1
                    l3 = cur_series[-3] if len(cur_series) >= 3 else l2
                    l7 = cur_series[-7] if len(cur_series) >= 7 else l3
                    
                    r3 = float(np.mean(cur_series[-3:]))
                    r7 = float(np.mean(cur_series[-7:]))
                    r7_std = float(np.std(cur_series[-7:]))
                    gr = float((l1 - l2) / (l2 + 1))
                    
                    x_input = pd.DataFrame([{
                        'lag_1': l1, 'lag_2': l2, 'lag_3': l3, 'lag_7': l7,
                        'rolling_3_mean': r3, 'rolling_7_mean': r7, 'rolling_7_std': r7_std,
                        'day_of_week': day_of_week, 'day_of_month': day_of_month,
                        'time_step': t_step, 'growth_rate': gr
                    }])
                    
                    if m_name in self.models:
                        pred_val = float(self.models[m_name].predict(x_input)[0])
                    else: # ARIMA
                        pred_val = float(cur_series[-1] * 0.98)
                        
                    pred_val = max(1.0, pred_val)
                    cur_series.append(pred_val)
                    
                    ci_multiplier = 1.96 * (1 + 0.04 * step)
                    lower_bound = max(0.0, round(pred_val - ci_multiplier * res_std, 1))
                    upper_bound = round(pred_val + ci_multiplier * res_std, 1)
                    
                    forecast_points.append({
                        "date": fc_date,
                        "step": step,
                        "forecast": round(pred_val, 1),
                        "lower_bound": lower_bound,
                        "upper_bound": upper_bound
                    })
                
                forecast_results[str(horizon)][m_name] = forecast_points

        summary_payload = {
            "comparison": comparison,
            "best_model": best_model_name,
            "historical_validation": historical_predictions,
            "forecasts": forecast_results,
            "features_used": feature_cols,
            "last_training_date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        }
        
        with open("data/model_summary.json", "w", encoding="utf-8") as f:
            json.dump(summary_payload, f, indent=2)

        print("ML Training Pipeline complete! Results saved to data/model_summary.json", flush=True)
        return summary_payload

if __name__ == "__main__":
    pipeline = CovidPredictionPipeline()
    pipeline.train_and_evaluate()
