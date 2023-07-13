from fastapi import APIRouter
from typing import List
from api.models.favorites import Favorites
import json
import os
import random
from fastapi import Request

router = APIRouter()

@router.get("/favorites", response_model=List[Favorites])
def get_favorites():
    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'favorites.json')) as json_file:
        json_text = json.load(json_file)
    return json_text


@router.post("/favorites")
def post_favorites(request: Favorites):
    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'favorites.json'),  mode='r', encoding='utf-8') as json_file:
        favorites = json.load(json_file)

    with open(os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'schema', 'favorites.json'),  mode='w', encoding='utf-8') as json_file:
        idx = random.randint(40000,99999) 
        favorite_object = {
                        "id":idx,
                        "categories":request.categories,
                        "selling_count":request.selling_count,
                        "notify": request.notify
                    }
        favorites.append(favorite_object)
        json.dump(favorites, json_file)
    return {"msg":"Updated Successfully"} 



