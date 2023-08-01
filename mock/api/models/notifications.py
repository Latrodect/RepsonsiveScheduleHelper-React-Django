from pydantic import BaseModel

class Notifications(BaseModel):
    """sumary_line
    
    Keyword arguments:
    name: str
    email: str
    src: str
    title: str
    content: str
    time: str
    status: list

    Return: {
                src: str
                title: str
                content: str
                time: str
                status: list
            }
    """
    src: str
    title: str
    content: str
    time: str
    status:list