from django.urls import path
from django.contrib.auth import views as auth_views

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    # path("accounts/", include("django.contrib.auth.urls")),
    path(
        "login/",
        auth_views.LoginView.as_view(template_name="user_management/login.html"),
        name="login",
    ),
    path(
        "logout/",
        auth_views.LogoutView.as_view(template_name="user_management/logged_out.html"),
        name="logout",
    ),
    path(
        "password_change/",
        auth_views.PasswordChangeView.as_view(
            template_name="user_management/password_change_form.html"
        ),
        name="password_change",
    ),
    path(
        "password_change/done/",
        auth_views.PasswordChangeDoneView.as_view(
            template_name="user_management/password_change_done.html"
        ),
        name="password_change_done",
    ),
    path(
        "password_reset/",
        auth_views.PasswordResetView.as_view(
            template_name="user_management/password_reset_form.html",
            email_template_name="user_management/password_reset_email.html",
            subject_template_name="user_management/password_reset_subject.txt",
        ),
        name="password_reset",
    ),
    path(
        "password_reset/done/",
        auth_views.PasswordResetDoneView.as_view(
            template_name="user_management/password_reset_done.html"
        ),
        name="password_reset_done",
    ),
    path(
        "reset/<uidb64>/<token>/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="user_management/password_reset_confirm.html"
        ),
        name="password_reset_confirm",
    ),
    path(
        "reset/done/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="user_management/password_reset_complete.html"
        ),
        name="password_reset_complete",
    ),
    path("register/", views.register, name="register"),
]
