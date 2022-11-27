import strawberry


@strawberry.type
class UserType:
    id: strawberry.ID
    name: str
    email: str