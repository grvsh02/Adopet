from django.db import transaction
from django.core.management.base import BaseCommand
from pets.factories import PetFactory
from user.factories import UserFactory
from blogs.factories import PostFactory, CategoryFactory

Num_Products = 1000
Num_Services = 500


class Command(BaseCommand):
    help="populate fake data in the db"

    @transaction.atomic
    def handle(self, *args, **options):

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
