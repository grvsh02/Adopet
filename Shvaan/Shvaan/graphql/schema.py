import strawberry
from strawberry.extensions import QueryDepthLimiter, ValidationCache, ParserCache, AddValidationRules
from strawberry.tools import merge_types


from user.graphql.mutations import UserMutations
from user.graphql.queries.users import ProductQueries

Mutations = merge_types('Mutations', (UserMutations,))
Query = merge_types('Queries', (ProductQueries,))

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
