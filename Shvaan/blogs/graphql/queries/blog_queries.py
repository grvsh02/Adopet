from typing import List, Optional

import strawberry


from blogs.graphql.types.blog_types import PostType
from blogs.models import Post

@strawberry.type()
class PostQuery:
    @strawberry.field
    def posts(self, info) -> List[PostType]:
        return Post.objects.all()

    @strawberry.field
    def post(self, info, id: int) -> Optional[PostType]:
        return Post.objects.filter(id=id).first()