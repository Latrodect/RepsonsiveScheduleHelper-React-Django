from fastapi import FastAPI
from api.endpoints import notifications

app = FastAPI()

app.include_router(notifications.router, prefix="/api/v1")