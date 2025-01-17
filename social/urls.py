from django.urls import path
from . import views

urlpatterns = [
    path("api/post_comment", views.post_comment, name = "api_post_comment"),
    path("test", views.test_comment, name = "test")
]