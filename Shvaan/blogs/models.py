from django.db import models
from django.utils.html import format_html
from tinymce.models import HTMLField
# Create your models here.

class Category(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField()
    url=models.URLField(max_length=200)
    image=models.ImageField(upload_to='category_img/')


    def img_tg(self):
        return format_html('<img src="/media/{}" style="width=50px; height=50px; border-radius=20px;" />'.format(self.image.url))


    def __str__(self):
        return self.title
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = HTMLField()
    created_at = models.DateTimeField(auto_now_add=True)
    # slug = models.SlugField(max_length=200, unique=True)

    def __str__(self):
        return self.title