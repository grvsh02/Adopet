from typing import Optional

import strawberry
from strawberry_jwt_auth.decorator import login_required

from user.graphql.types.user import UserType
from user.models import User


@strawberry.type
class ProductQueries:

    @strawberry.field
    def user(self, info) -> Optional[UserType]:
        try:
            userID = info.context.userID
            user = User.objects.get(id=userID)
            return UserType(
                id=user.id,
                name=user.first_name,
                email=user.email,
            )

        except User.DoesNotExist:
            return None
