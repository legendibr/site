from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

# TODO: Add verbose_name and str to model

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE) # related_name
    page_path = models.CharField(max_length=200) # path that comment is located on, because we don't have another model to tie it to
    text = models.CharField(max_length=200)
    date_posted = models.DateTimeField(auto_now_add=True)
    hidden = models.BooleanField(default=False)
    
    is_reply = models.BooleanField(default=False)
    # on_delete? nothing? rn it just gets deleted if the parent is deleted
    replying_to = models.ForeignKey("self", null=True, on_delete=models.CASCADE) # can put target as string
