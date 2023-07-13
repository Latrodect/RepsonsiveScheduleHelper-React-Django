from pydantic import BaseModel

class Favorites(BaseModel):
    """sumary_line
    
    Keyword arguments:
    id: int
    categories: str
    selling_count: int
    notify: Bool

    Return: {
                id: int
                categories: str
                selling_count: int
                notify: Bool
            }
    """
    categories: str
    selling_count: int
    notify: bool
   