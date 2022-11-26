from typing import List

import strawberry

@strawberry.type
class PostType:
    id: int
    title: str
    description: str