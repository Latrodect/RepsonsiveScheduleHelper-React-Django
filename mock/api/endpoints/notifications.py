from fastapi import APIRouter
from typing import List
from api.models.notifications import Notifications
import json
import os

router = APIRouter()

@router.get("/notifications", response_model=List[Notifications])
def get_notifications(status: str):
    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'notifications.json')) as json_file:
            json_text = json.load(json_file)
    if status == "all":
        return json_text
    elif status == "unread":
        response = []
        for item in json_text:
             if item["status"][0] == "Unreaded":
                  response.append(item)
        
        return response
    return []



