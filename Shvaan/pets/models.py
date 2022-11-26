from django.db import models
from user.models import User

# Create your models here.
class Pet(models.Model):
    id = models.AutoField(primary_key=True)
    current_owner_name = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, default=None)
    name = models.CharField(max_length=50)
    GENDER = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    TYPES = (
        ('Dog', 'Dog'),
        ('Cat', 'Cat'),
        ('Hamster', 'Hamster'),
        ('Other', 'Other'),
    )
    type_of_pet = models.CharField(choices=TYPES, max_length=50, default='Dog',verbose_name='Type of Pet', null=True, blank=True)
    # species = models.CharField(max_length=50)
    breed = models.CharField(max_length=500)
    gender = models.CharField(choices=GENDER, max_length=20, default='Male',verbose_name='Gender of the Pet', null=True, blank=True)
    age = models.IntegerField()
    description = models.TextField()
    profile_picture = models.ImageField(upload_to="pet_profiles", help_text=("Maximum image size is 8MB"), blank=True, null=True)
    request_sent = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name