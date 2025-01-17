from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse
from .forms import CustomUserCreationForm

# Create your views here.

def register(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse("user_management:login") + "?name=/")
    form = CustomUserCreationForm()
    return render(request, "user_management/register.html", {"form": form})
