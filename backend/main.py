from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import csv, os

app = FastAPI(title="ZenithSEO API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

WAITLIST_FILE = os.path.join(os.path.dirname(__file__), 'waitlist.csv')

@app.get("/")
def read_root():
    return {"message": "Welcome to ZenithSEO API 🚀"}

@app.post("/waitlist")
async def add_waitlist(req: Request):
    data = await req.json()
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    if not email:
        raise HTTPException(status_code=400, detail="Email is required")
    # append to csv (create if not exists)
    write_header = not os.path.exists(WAITLIST_FILE)
    with open(WAITLIST_FILE, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        if write_header:
            writer.writerow(['name','email'])
        writer.writerow([name, email])
    return {"status": "ok", "message": "Added to waitlist"}
