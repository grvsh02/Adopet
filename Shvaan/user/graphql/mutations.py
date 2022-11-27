import strawberry

# from homezy_backend.utils.email import send_verification_email
from user.graphql.inputs.user import ProfileInput
from strawberry_jwt_auth.decorator import login_required
from ..models import User
import re


@strawberry.type
class UserMutations:

    @strawberry.mutation
    def signup(self, info, email: str ,password: str, profile: ProfileInput) -> int:

        regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
        if not regex.match(email):
            raise Exception('Invalid Email')

        user = User(
            email=email,
            first_name=profile.first_name,
            last_name=profile.last_name
        )
        username = email.split("@")[0]
        user.username = username
        user.set_password(password)
        user.save()
        setattr(info.context, "userID", user.id)
        setattr(info.context.request, "issueNewTokens", True)
        setattr(info.context.request, "clientID", user.id)
        # if not send_verification_email(user.id, email, profile.first_name):
        #     user.delete()
        #     raise Exception("Unable to send verification email")

        return True

    # @strawberry.mutation
    # def verify_email(self, info, email: str, otp: str) -> bool:
    #     from ..models.verification_otps import VerificationOTP
    #     try:
    #         otp = VerificationOTP.objects.get(user__email=email, otp=otp)
    #     except VerificationOTP.DoesNotExist:
    #         raise Exception("Invalid OTP")
    #     user = otp.user
    #     user.isVerified = True
    #     user.save()
    #     otp.delete()
    #     return True

    @strawberry.mutation
    def login(self, info, email: str, password: str) -> bool:
        from django.contrib.auth import authenticate
        user = authenticate(email=email, password=password)
        if user is None:
            raise Exception("Invalid credentials")
        setattr(info.context, "userID", user.id)
        setattr(info.context.request, "issueNewTokens", True)
        setattr(info.context.request, "clientID", user.id)
        return True

    @strawberry.mutation
    def logout(self, info) -> bool:
        setattr(info.context.request, "revokeTokens", True)
        return True

    @strawberry.mutation
    @login_required
    def change_password(self, info, old_password: str, new_password: str) -> bool:
        user = info.context.user
        if not user.check_password(old_password):
            raise Exception("Invalid password")
        user.set_password(new_password)
        user.save()
        return True


__all__ = ["UserMutations"]
