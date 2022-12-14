from typing import List

import strawberry

@strawberry.type
class PetType:
    id: strawberry.ID
    name: str
    age: int
    breed: str
    current_owner_name: str
    is_available: bool


@strawberry.type
class PetsType:
    pets: List[PetType]
    count: int
    pages: int