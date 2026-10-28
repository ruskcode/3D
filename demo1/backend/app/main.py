from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="Starter API", version="0.1.0")


class Message(BaseModel):
    message: str


class Health(BaseModel):
    status: str


@app.get("/api/health", response_model=Health)
def health() -> Health:
    return Health(status="ok")


@app.get("/api/hello", response_model=Message)
def hello() -> Message:
    return Message(message="你好，React！这是来自 Python FastAPI 的消息。")
