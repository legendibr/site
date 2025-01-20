from django.urls import path
from . import views

urlpatterns = [
    path("", views.education, name="education"),
    path("math/", views.math, name="math"),
    path("biology/", views.biology, name="biology"),
    path("computer-science/", views.computer_science, name="computer-science"),
    path("math/algebra/learn/lesson-<int:lesson_number>/", views.algebraLearn, name="learn"),
]
