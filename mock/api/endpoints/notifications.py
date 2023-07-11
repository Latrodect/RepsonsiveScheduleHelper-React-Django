from fastapi import APIRouter
from typing import List
from api.models.notifications import Notifications
import json
import os

router = APIRouter()

@router.get("/notifications/all", response_model=List[Notifications])
def get_notifications():
    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'notifications.json')) as json_file:
        json_text = json.load(json_file)
        print( json_text)
    return json_text

@router.get("/notifications/unread", response_model=Notifications)
def get_notifications(read):
    pass

@router.get("/notifications/unread", response_model=Notifications)
def get_archives():
    pass


