import strawberry
from strawberry.extensions import QueryDepthLimiter, ValidationCache, ParserCache, AddValidationRules
from strawberry.tools import merge_types


from user.graphql.mutations import UserMutations
from user.graphql.queries.users import ProductQueries
from pets.graphql.queries.pets_queries import PetsQuery
# from pets.graphql.mutations import PetManageMutations

Mutations = merge_types('Mutations', (UserMutations,  ))
Query = merge_types('Queries', (ProductQueries, PetsQuery, ))

extensions = [
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
