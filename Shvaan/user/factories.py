import factory
from factory.django import DjangoModelFactory
from faker import Faker
from .models import User

class UserFactory(DjangoModelFactory):
    class Meta:
        model = User

    first_name = factory.Faker('name')
    last_name = factory.Faker('name')
    email = factory.Faker('email')
    isBanned = factory.Faker('boolean')
    isVerified = factory.Faker('boolean')