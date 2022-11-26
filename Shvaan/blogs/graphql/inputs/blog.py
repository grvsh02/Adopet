from typing import Optional

import strawberry

@strawberry.input()

class PostInput:
        title: str
        description: str

class CategoryInput:
        title: str
        description: str