from django.db import models
from user.models import User

# Create your models here.
class Pet(models.Model):
    current_owner_name = models.CharField(max_length=50, default='', blank=True, verbose_name='Current Owner Name')
    name = models.CharField(max_length=50)
    TYPES = (
        ('Dog', 'Dog'),
        ('Cat', 'Cat'),
        ('Hamster', 'Hamster'),
        ('Other', 'Other'),
    )
    type_of_pet = models.CharField(choices=TYPES, max_length=50, default='Dog',verbose_name='Type of Pet')
    species = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    description = models.TextField()
    age = models.IntegerField()

    def __str__(self):
        return self.name