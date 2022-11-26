import strawberry
from graphql import GraphQLError
from strawberry.file_uploads import Upload
from strawberry.types import Info
from blogs.graphql.inputs.blog import PostInput, CategoryInput
from blogs.models import Post, Category


@strawberry.type
class ManagePost:
    @strawberry.mutation
    def createPost(self, info, input: PostInput,) -> bool:
        if (
            input.title is not None and
            input.description is not None
        ):
            Post.objects.create(
                title=input.title,
                description=input.description,
            )
            return True
        raise GraphQLError("You must provide a title and description")
    @strawberry.mutation
    def updatePost(self, info, input: PostInput) -> bool:
        try:
            post = Post.objects.get(id=input.id)
        except Post.DoesNotExist:
            return False
        if post.title is not None:
            post.title = input.title
        if post.description is not None:
            post.description = input.description
        post.save()
        return True
    def deletePost(self, info, id: int) -> bool:
        try:
            post = Post.objects.get(id=id)
        except Post.DoesNotExist:
            return False
        post.delete()
        return True