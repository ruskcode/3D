from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="我的第一个 API",
    version="0.1.0",
)

class HelloResponse(BaseModel):
    message: str

@app.get("/api/health")
def health():
    return {"status": "ok"}

@app.get("/api/hello", response_model=HelloResponse)
def hello():
    return HelloResponse(
        message="hello, 这里是python"
    )