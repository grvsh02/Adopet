from typing import List, Optional
from django.core.paginator import Paginator
import strawberry


from blogs.graphql.types.blog_types import PostType
from blogs.models import Post

@strawberry.type()
class PostQuery:
    @strawberry.field
    def posts(self, info,
              per_page: Optional[int] = 10,
              page_no: Optional[int] = 1,
              ) -> PostType:
        posts = Post.objects.all()
        paginator = Paginator(posts, per_page)
        return PostType(
            posts=paginator.page(page_no).object_list,
            count=paginator.count,
            pages=paginator.num_pages
        )

    @strawberry.field
    def post(self, info, id: int) -> Optional[PostType]:
        return Post.objects.filter(id=id).first()