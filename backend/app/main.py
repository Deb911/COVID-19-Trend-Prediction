import os
from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from app.core.config import settings
from app.db.session import engine, Base, SessionLocal
from app.models import *
from app.services.data_importer import seed_initial_data
from app.api import auth, analytics, predictions, datasets, reports, admin

_DB_INITIALIZED = False

def ensure_db_ready():
    global _DB_INITIALIZED
    if not _DB_INITIALIZED:
        try:
            Base.metadata.create_all(bind=engine)
            db = SessionLocal()
            try:
                seed_initial_data(db)
            finally:
                db.close()
            _DB_INITIALIZED = True
        except Exception as e:
            print(f"[DB INIT WARNING] {e}", flush=True)

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("[BACKEND STARTUP] Creating database tables if not exist...", flush=True)
    ensure_db_ready()
    print("[BACKEND STARTUP] System ready! REST API active at /api", flush=True)
    yield
    print("[BACKEND SHUTDOWN] Closing database connections...", flush=True)

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AI-Powered Healthcare Analytics and COVID-19 Epidemic Intelligence System. Real-time trend forecasting, capacity monitoring, and risk analysis on empirical healthcare records.",
    version="2.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json",
    lifespan=lifespan
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix=settings.API_V1_STR)
app.include_router(analytics.router, prefix=settings.API_V1_STR)
app.include_router(predictions.router, prefix=settings.API_V1_STR)
app.include_router(datasets.router, prefix=settings.API_V1_STR)
app.include_router(reports.router, prefix=settings.API_V1_STR)
app.include_router(admin.router, prefix=settings.API_V1_STR)

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "COVID-19 Epidemic Intelligence Platform",
        "version": "2.0.0",
        "database": "connected"
    }

# Mount frontend production build if available
curr_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(os.path.dirname(curr_dir))
frontend_dist = os.path.join(project_root, "frontend", "dist")

if os.path.exists(frontend_dist):
    assets_dir = os.path.join(frontend_dist, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        if full_path.startswith("api"):
            return JSONResponse(status_code=404, content={"detail": "Not found"})
        file_path = os.path.join(frontend_dist, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(frontend_dist, "index.html"))

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal server error: {str(exc)}"}
    )
