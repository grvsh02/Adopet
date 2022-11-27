from typing import List
import strawberry


@strawberry.type
class PostType:
    id: int
    title: str
    content: str


@strawberry.type
class PostsType:
    posts: List[PostType]
    count: int
    pages: int