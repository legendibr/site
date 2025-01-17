from django import forms
from django.contrib.auth import get_user_model
from .models import Comment

User = get_user_model()


class CreateCommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        # fields to fill out, everything else is automatic
        fields = ["text"]

        widgets = {
            # css attrs for form fields
            "text": forms.Textarea(
                attrs={"placeholder": "Write a comment here...", "rows": 3}
            )
        }
