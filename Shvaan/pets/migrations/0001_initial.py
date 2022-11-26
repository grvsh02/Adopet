# Generated by Django 4.0.5 on 2022-11-26 12:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('type_of_pet', models.CharField(choices=[('Dog', 'Dog'), ('Cat', 'Cat'), ('Hamster', 'Hamster'), ('Other', 'Other')], default='Dog', max_length=50, verbose_name='Type of Pet')),
                ('breed', models.CharField(max_length=50)),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], default='Male', max_length=20, verbose_name='Gender of the Pet')),
                ('age', models.IntegerField()),
                ('description', models.TextField()),
                ('profile_picture', models.ImageField(blank=True, help_text='Maximum image size is 8MB', null=True, upload_to='pet_profiles')),
                ('request_sent', models.DateTimeField(auto_now_add=True)),
                ('current_owner_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.user')),
            ],
        ),
    ]
