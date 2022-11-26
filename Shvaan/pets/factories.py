import factory
from factory.django import DjangoModelFactory
from faker import Faker
from .models import Pet

class PetFactory(DjangoModelFactory):
    class Meta:
        model = Pet

    name = factory.Faker('name')
    description = factory.Faker('text')
    breed = factory.Faker('text')
    age = factory.Faker('random_int', min=1, max=20)
