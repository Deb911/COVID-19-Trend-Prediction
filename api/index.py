import os
import sys

# Add root and backend directories to sys.path so that 'app.*' imports resolve cleanly on Vercel
current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir)
backend_dir = os.path.join(root_dir, "backend")

if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)
if root_dir not in sys.path:
    sys.path.insert(0, root_dir)

# Ensure VERCEL environment flag is present
os.environ["VERCEL"] = "1"

from app.main import app
