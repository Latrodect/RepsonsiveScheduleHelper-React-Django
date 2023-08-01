from fastapi import FastAPI
from api.endpoints import notifications
from api.endpoints import favorites
from api.endpoints import trends
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(notifications.router, prefix="/api/v1")
app.include_router(favorites.router, prefix="/api/v1")
app.include_router(trends.router, prefix="/api/v1")
