from django.db import transaction
from django.core.management.base import BaseCommand

from pets.models import Pet
from pets.factories import PetFactory
from user.models import User
from user.factories import UserFactory
from blogs.models import Post, Category
from blogs.factories import PostFactory, CategoryFactory

Num_Products = 1000
Num_Services = 500


class Command(BaseCommand):
    help="populate fake data in the db"

    @transaction.atomic
    def handle(self, *args, **options):
        self.stdout.write("Deleting old data...")
        Pet.objects.all().delete()
        Post.objects.all().delete()
        Category.objects.all().delete()
        User.objects.all().delete()

        self.stdout.write("Creating new data...")
        self.stdout.write("Creating pets...")
        for i in range(Num_Products):
            PetFactory()
        self.stdout.write("Creating posts...")
        for i in range(Num_Services):
            PostFactory()
        self.stdout.write("Creating categories...")
        for i in range(Num_Services):
            CategoryFactory()
        self.stdout.write("Creating users...")
        for i in range(Num_Services):
            UserFactory()
