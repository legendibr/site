from django.db import models

# Create your models here.

class PageLookupModel(models.Model):
    page_id = models.IntegerField()
    slug = models.SlugField()
    template_path = models.CharField(max_length=200)
    url_base_path = models.CharField(max_length=200)