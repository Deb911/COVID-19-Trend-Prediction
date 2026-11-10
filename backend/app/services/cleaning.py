import re
import math
from datetime import datetime

def is_na(val):
    if val is None or val == "":
        return True
    if isinstance(val, float) and math.isnan(val):
        return True
    s = str(val).strip().lower()
    return s in ("nan", "none", "null", "nat")

DISTRICT_MAP = {
    "kolkata": "Kolkata",
    "calcutta": "Kolkata",
    "howrah": "Howrah",
    "hooghly": "Hooghly",
    "north 24 parganas": "North 24 Parganas",
    "north (uttar) 24 parganas": "North 24 Parganas",
    "uttar 24 parganas": "North 24 Parganas",
    "south 24 parganas": "South 24 Parganas",
    "south (dakshin) 24 parganas": "South 24 Parganas",
    "dakshin 24 parganas": "South 24 Parganas",
    "purba bardhaman": "Purba Bardhaman",
    "purba burdwan": "Purba Bardhaman",
    "bardhaman": "Purba Bardhaman",
    "paschim bardhaman": "Paschim Bardhaman",
    "paschim burdwan": "Paschim Bardhaman",
    "west bardhaman": "Paschim Bardhaman",
    "darjeeling": "Darjeeling",
    "jalpaiguri": "Jalpaiguri",
    "alipurduar": "Alipurduar",
    "cooch behar": "Cooch Behar",
    "coochbehar": "Cooch Behar",
    "malda": "Malda",
    "murshidabad": "Murshidabad",
    "birbhum": "Birbhum",
    "bankura": "Bankura",
    "purulia": "Purulia",
    "purba medinipur": "Purba Medinipur",
    "purba medinipore": "Purba Medinipur",
    "paschim medinipur": "Paschim Medinipur",
    "paschim medinipore": "Paschim Medinipur",
    "midnapore": "Paschim Medinipur",
    "jhargram": "Jhargram",
    "kalimpong": "Kalimpong",
    "uttar dinajpur": "Uttar Dinajpur",
    "dakshin dinajpur": "Dakshin Dinajpur",
    "nadia": "Nadia"
}

def clean_district(val):
    if not val or is_na(val):
        return "Unspecified"
    s = str(val).strip().lower()
    s = re.sub(r'\s+district.*', '', s)
    s = re.sub(r'[\(\)]', '', s).strip()
    for k, v in DISTRICT_MAP.items():
        if k in s:
            return v
    return str(val).strip().title()

def clean_facility(val, sheet_name=""):
    s = "" if is_na(val) else str(val).strip().lower()
    sh = sheet_name.lower()
    
    if "bed" in s or "bed" in sh:
        return "Hospital Bed"
    if "oxygen" in s or "oxygen" in sh or "oxy" in s:
        return "Oxygen Supply"
    if "medicine" in s or "medicine" in sh or "tocilizumab" in s or "remdesivir" in s:
        return "Essential Medicines"
    if "plasma" in s or "blood" in s or "plasma" in sh:
        return "Plasma & Blood"
    if "ambulance" in s or "ambulance" in sh:
        return "Emergency Ambulance"
    if "test" in s or "test" in sh or "rt-pcr" in s:
        return "COVID Testing"
    if "doctor" in s or "tele" in s or "consult" in s or "doctor" in sh:
        return "Tele-consultation"
    if "home" in s or "quarantine" in s or "safe home" in s:
        return "Quarantine & Safe Home"
    if "volunteer" in s or "volunteer" in sh or "food" in s:
        return "Volunteer & Relief"
    return "Healthcare Facility"

def parse_date(date_val):
    if is_na(date_val):
        return None
    s = str(date_val).strip()
    for fmt in [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%d",
        "%d/%m/%Y %H:%M:%S",
        "%d/%m/%Y %H:%M",
        "%d/%m/%Y",
        "%d.%m.%Y %H:%M",
        "%d.%m.%y %H:%M",
        "%d.%m.%Y",
        "%d.%m.%y",
        "%m/%d/%Y %H:%M:%S",
        "%m/%d/%Y"
    ]:
        try:
            return datetime.strptime(s, fmt)
        except:
            continue
    m = re.search(r'(\d{4})-(\d{2})-(\d{2})', s)
    if m:
        try:
            return datetime(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        except:
            pass
    m = re.search(r'(\d{1,2})[/\-\.](\d{1,2})[/\-\.](\d{4})', s)
    if m:
        try:
            return datetime(int(m.group(3)), int(m.group(2)), int(m.group(1)))
        except:
            pass
    return None

def clean_status(val):
    if is_na(val) or not val:
        return "Undetermined"
    s = str(val).strip().lower()
    if "available" in s and "un" not in s and "will" not in s:
        return "Available"
    if "unavailable" in s or "no bed" in s or "no stock" in s or "out of stock" in s:
        return "Unavailable"
    if "soon" in s or "after" in s:
        return "Will be available soon"
    return "Undetermined"

def mask_pii(text):
    if not text or is_na(text):
        return "De-identified"
    s = str(text).strip()
    if len(s) <= 4:
        return s[:1] + "***"
    words = s.split()
    masked_words = []
    for w in words:
        if len(w) > 2:
            masked_words.append(w[0] + "*" * (len(w) - 2) + w[-1])
        else:
            masked_words.append(w[0] + "*")
    return " ".join(masked_words)

def mask_phone(phone_str):
    if not phone_str or is_na(phone_str):
        return "Confidential"
    s = str(phone_str).strip()
    digits = re.findall(r'\d+', s)
    if not digits:
        return "Protected"
    d = "".join(digits)
    if len(d) >= 10:
        return f"+91 {d[:2]}******{d[-2:]}"
    return f"{d[:1]}****{d[-1:]}"
