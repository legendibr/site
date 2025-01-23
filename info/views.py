from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, "info/index.html")

def privacy_policy(request):
    return render(request, "info/privacy-policy.html")