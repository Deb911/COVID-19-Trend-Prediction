import json
import os
import re

transcript_path = r"C:\Users\HP\.gemini\antigravity\brain\1252d8af-65fd-4a48-a3bf-04bb5b3fc9d5\.system_generated\logs\transcript_full.jsonl"
compact_path = r"C:\Users\HP\.gemini\antigravity\brain\1252d8af-65fd-4a48-a3bf-04bb5b3fc9d5\.system_generated\logs\transcript.jsonl"

log_file = transcript_path if os.path.exists(transcript_path) else compact_path
print(f"Reading from: {log_file}")

with open(log_file, "r", encoding="utf-8") as f:
    for line in f:
        if not line.strip():
            continue
        try:
            entry = json.loads(line)
            if entry.get("type") == "USER_INPUT":
                content = entry.get("content", "")
                marker = "Facility provided,District"
                idx = content.find(marker)
                if idx != -1:
                    raw_data = content[idx:]
                    os.makedirs("data", exist_ok=True)
                    out_path = os.path.join("data", "raw_medical_dataset.csv")
                    with open(out_path, "w", encoding="utf-8") as out:
                        out.write(raw_data)
                    print(f"Saved raw dataset to: {out_path} ({len(raw_data)} chars, {len(raw_data.splitlines())} lines)")
                    break
        except Exception as e:
            pass
