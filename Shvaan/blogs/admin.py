from django.contrib import admin
from .models import Category, Post
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['img_tg', 'title' , 'description']
    search_fields = ('title', )

class PostAdmin(admin.ModelAdmin):
    list_display = ['title']
    search_fields = ('title', )
    # prepopulated_fields = {'slug': ('title',)}
admin.site.register(Category, CategoryAdmin)
admin.site.register(Post, PostAdmin)