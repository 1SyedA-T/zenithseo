from fastapi import FastAPI
from fastapi.responses import FileResponse
import os

app = FastAPI(title='ZenithSEO API')

@app.get('/')
def read_root():
    return {"message": "Welcome to ZenithSEO API 🚀"}

@app.get('/branding/logo')
def get_logo():
    logo_path = os.path.join(os.path.dirname(__file__), '../frontend/public/images/zenithseo-logo.svg')
    return FileResponse(logo_path)
