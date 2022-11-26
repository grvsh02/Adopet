from django.contrib.auth.models import AbstractUser
from django.contrib.auth.password_validation import validate_password
from django.core.validators import MaxLengthValidator, MinLengthValidator
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(
        unique=True,
        verbose_name='Email Address'
    )
    first_name = models.CharField(
        max_length=50,
        default='',
        blank=True,
        verbose_name='First Name',
        validators=[
            MaxLengthValidator(50)
        ]
    )
    last_name = models.CharField(
        max_length=50,
        default='',
        blank=True,
        verbose_name='Last Name',
        validators=[
            MaxLengthValidator(50)
        ]
    )
    isBanned = models.BooleanField(
        default=False,
        verbose_name='Is Banned?'
    )
    isVerified = models.BooleanField(
        default=False,
        verbose_name='Is Verified ?'
    )
    role_choices = (
        ('Admin', 'Admin'),
        ('Seller', 'Seller'),
        ('Customer', 'Customer'),
        ('Viewer', 'Viewer'),
    )
    role = models.CharField(
        choices=role_choices,
        max_length=50,
        default='Customer',
        verbose_name='Role'
    )
    phone = PhoneNumberField(
        null=True, blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    def set_password(self, raw_password):
        validate_password(password=raw_password, user=self)
        return super().set_password(raw_password)


    def __str__(self):
        return self.email

class User_Address(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=False, blank=False
    )
    addressLine1 = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(100)
        ],
        null=False, blank=False
    )
    addressLine2 = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(100)
        ]
    )
    city = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(100)
        ],
        null=False, blank=False
    )
    pincode = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(100)
        ],
        null=False, blank=False
    )
    country = models.CharField(
        max_length=100,
        validators=[
            MinLengthValidator(1),
            MaxLengthValidator(100)
        ],
        null=False, blank=False
    )

    mobile = PhoneNumberField(
        null=True, blank=True,
    )


    def __str__(self):
        return str(self.id)