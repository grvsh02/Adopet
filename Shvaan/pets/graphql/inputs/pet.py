import strawberry
from typing import Optional


@strawberry.input
class PetInput:
    # id: Optional[strawberry.ID] = None
    name: str
    age: Optional[int] = None
    breed: Optional[str] = None
    current_owner_name: Optional[str] = None
    is_available: Optional[bool] = None

__all__ = [
    'PetInput',
]