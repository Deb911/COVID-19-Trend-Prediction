@echo off
title COVID-19 Trend Prediction Platform - Production Server
echo ===================================================================
echo Starting COVID-19 Trend Prediction & Healthcare Analytics System
echo Serving API and Full React Web Application on http://127.0.0.1:8000
echo ===================================================================

set PYTHONPATH=%~dp0backend
"%~dp0python_runtime\python.exe" -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --app-dir "%~dp0backend"
pause
