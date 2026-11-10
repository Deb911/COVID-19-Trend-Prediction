import os
import sys
import json

def inspect():
    import openpyxl
    import pandas as pd
    import numpy as np

    file_path = os.path.join("data", "attached_covid_medical_dataset.xlsx")
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found")
        return

    wb = openpyxl.load_workbook(file_path, read_only=True)
    sheet_names = wb.sheetnames
    print(f"=== COVID-19 ATTACHED MEDICAL DATASET INSPECTION ===")
    print(f"Total Sheets: {len(sheet_names)}")
    print(f"Sheets: {sheet_names}\n")

    report = {
        "file_path": file_path,
        "sheet_count": len(sheet_names),
        "sheets": {}
    }

    all_records = []

    for name in sheet_names:
        print(f"--- Processing Sheet: '{name}' ---")
        try:
            df = pd.read_excel(file_path, sheet_name=name)
            rows, cols = df.shape
            print(f"Dimensions: {rows} rows, {cols} columns")
            print(f"Columns: {list(df.columns)}")
            
            # Missing values
            missing = df.isnull().sum().to_dict()
            # Duplicates
            duplicates = int(df.duplicated().sum())
            
            print(f"Duplicates: {duplicates}")
            print(f"Missing count: {missing}\n")
            
            report["sheets"][name] = {
                "rows": rows,
                "cols": cols,
                "columns": [str(c) for c in df.columns],
                "missing": {str(k): int(v) for k, v in missing.items()},
                "duplicates": duplicates
            }
        except Exception as e:
            print(f"Error reading sheet {name}: {e}")

    with open(os.path.join("data", "inspection_summary.json"), "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print("Saved inspection summary to data/inspection_summary.json")

if __name__ == "__main__":
    inspect()
