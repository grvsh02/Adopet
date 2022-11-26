from django.contrib import admin

# Register your models here.

from .models import Pet

class PetAdmin(admin.ModelAdmin):
    list_display = ['name', 'type_of_pet', 'breed', 'age']
    list_filter = ['type_of_pet', 'breed']
    search_fields = ['name', 'type_of_pet', 'breed']
admin.site.register(Pet, PetAdmin)