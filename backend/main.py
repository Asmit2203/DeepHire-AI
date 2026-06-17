from fastapi import FastAPI
from routes.analyze import router as analyze_router

app = FastAPI(
    title="DeepHire AI",
    version="1.0.0"
)

app.include_router(analyze_router)

@app.get("/")
def root():
    return {
        "message": "DeepHire AI Backend Running"
    }