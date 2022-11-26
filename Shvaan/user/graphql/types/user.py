import strawberry


@strawberry.type
class UserType:
    id: strawberry.ID
    name: str
    username: str
    email: str
    addresses: str
    phone: str