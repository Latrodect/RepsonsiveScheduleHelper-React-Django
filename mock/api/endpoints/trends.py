from fastapi import APIRouter
from typing import List
from api.models.notifications import Notifications
import json
import os

router = APIRouter()

@router.get("/trends", response_model=List[Notifications])
def get_trends_compare():
    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'notifications.json')) as json_file:
        json_text = json.load(json_file)
    return json_text




