from pydantic import BaseModel

class Notifications(BaseModel):
    """sumary_line
    
    Keyword arguments:
    id: int
    name: str
    email: str
    src: str
    title: str
    content: str
    time: str
    status: list

    Return: {
                id: int
                src: str
                title: str
                content: str
                time: str
                status: list
            }
    """
    id: int
    src: str
    title: str
    content: str
    time: str
    status: list