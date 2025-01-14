from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

# Register the User model
admin.site.register(User, UserAdmin)
