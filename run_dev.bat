@echo off
title COVID-19 Trend Prediction Platform - Development Runner
echo ===================================================================
echo Launching Full-Stack Development Environment
echo Backend API: http://127.0.0.1:8000
echo Frontend Dev Server: http://127.0.0.1:5173
echo ===================================================================

set PATH=C:\Users\HP\AppData\Local\Microsoft\WinGet\Packages\OpenJS.NodeJS.LTS_Microsoft.Winget.Source_8wekyb3d8bbwe\node-v24.20.0-win-x64;%PATH%
set PYTHONPATH=%~dp0backend

start "FastAPI Backend" "%~dp0.venv\Scripts\uvicorn.exe" app.main:app --reload --host 127.0.0.1 --port 8000 --app-dir "%~dp0backend"
start "Vite React Frontend" cmd /c "cd /d "%~dp0frontend" && npm.cmd run dev"

echo Both services launched in separate windows!
