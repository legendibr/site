from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path("", views.education, name="education"),
    path("math/", views.math, name="math"),
    path("biology/", views.biology, name="biology"),
    path("computer-science/", views.computer_science, name="computer-science"),
    # path("", views.index, name="index"),
    # path(
    #     "math/",
    #     auth_views.LoginView.as_view(template_name="education/math.html"),
    #     name="math",
    # ),
    # path(
    #     "biology/",
    #     auth_views.LoginView.as_view(template_name="education/biology.html"),
    #     name="biology",
    # ),
    # path(
    #     "computer-science/",
    #     auth_views.LoginView.as_view(template_name="education/computer-science.html"),
    #     name="computer-science",
    # )
]
