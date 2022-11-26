import factory
from factory.django import DjangoModelFactory
from faker import Faker
from .models import Post, Category

class PostFactory(DjangoModelFactory):
    class Meta:
        model = Post

    title = factory.Faker('name')
    content = factory.Faker('text')

class CategoryFactory(DjangoModelFactory):
    class Meta:
        model = Category

    title = factory.Faker('name')
    description = factory.Faker('text')
    url = factory.Faker('url')
    image = factory.Faker('image_url')

