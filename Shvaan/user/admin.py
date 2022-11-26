from django.contrib import admin

# Register your models here.
from django.contrib import admin
from user.models import User
from user.models import User_Address


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'email', 'role']
    list_filter = ['role']
    search_fields = ['id', 'email']

admin.site.register(User, UserAdmin)
class UserAddressAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'mobile']
    list_filter = ['user']
    search_fields = ['id', 'user']

admin.site.register(User_Address, UserAddressAdmin)