import os
import sys

current_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(current_dir)
backend_dir = os.path.join(root_dir, "backend")

for p in [backend_dir, root_dir, "/var/task/backend", "/var/task"]:
    if os.path.exists(p) and p not in sys.path:
        sys.path.insert(0, p)

# Ensure VERCEL environment flag is present
os.environ["VERCEL"] = "1"

from app.main import app
