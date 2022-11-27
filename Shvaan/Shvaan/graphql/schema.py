import strawberry
from strawberry.extensions import QueryDepthLimiter, ValidationCache, ParserCache, AddValidationRules
from strawberry.tools import merge_types
from strawberry_jwt_auth.extension import JWTExtension


from user.graphql.mutations import UserMutations
from user.graphql.queries.users import ProductQueries
from pets.graphql.queries.pets_queries import PetsQuery
from pets.graphql.mutations import PetManageMutations
from blogs.graphql.queries.blog_queries import PostQuery
from blogs.graphql.mutations import ManagePost

Mutations = merge_types('Mutations', (UserMutations, PetManageMutations, ManagePost, ))
Query = merge_types('Queries', (ProductQueries, PetsQuery, PostQuery, ))

extensions = [
    JWTExtension,
    QueryDepthLimiter(max_depth=10),
    ParserCache(maxsize=100),
    ValidationCache(maxsize=100),
]

schema = strawberry.Schema(
    query=Query,
    mutation=Mutations,
    extensions=extensions
)

__all__ = [
    'schema',
    'Query',
    'Mutations',
]
