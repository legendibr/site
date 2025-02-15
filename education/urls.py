from django.urls import path
from . import views

urlpatterns = [
    path("math/", views.math, name="math"),
    path("biology/", views.biology, name="biology"),
    path("computer-science/", views.computer_science, name="computer-science"),
    # path("<str:subject>/", views.subject_landing_page, name="subject_landing_page"),
    # path("math/algebra/learn/lesson/<int:lesson_id>/<str:slug>", views.generic_md_page, name="learn"),
    path(
        "<path:page_path>/<int:lesson_id>/<str:slug>",
        views.generic_md_page,
        name="generic_md_page",
    ),
]
