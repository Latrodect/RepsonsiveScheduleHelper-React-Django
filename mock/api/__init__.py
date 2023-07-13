from fastapi import FastAPI
from api.endpoints import notifications
from api.endpoints import favorites

app = FastAPI()

app.include_router(notifications.router, prefix="/api/v1")
app.include_router(favorites.router, prefix="/api/v1")