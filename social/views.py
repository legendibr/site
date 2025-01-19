import urllib
import urllib.parse
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST, require_GET
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from .models import Comment
from .forms import CreateCommentForm

# Create your views here.


def comment_to_dict(comment):
    return {
        "id": comment.id,
        "username": comment.user.username,
        "text": comment.text,
        "is_reply": comment.is_reply,
        "replying_to_id": comment.replying_to.id if comment.is_reply else None,
        "replies": [
            comment_to_dict(reply) for reply in comment.replies.exclude(hidden=True)
        ],
    }


@login_required
@require_POST
def post_comment(request):
    # only POST requests can be made (decorator)
    form = CreateCommentForm(request.POST)
    if form.is_valid():
        # Only thing in form is whats in CreateCommentForm.Meta.fields
        comment = form.save(commit=False)

        replying_to_id = request.POST.get("replying_to_id")
        try:
            # if replying_to_id is not numeric, it will error out here, skipping this step
            replying_to_id = int(replying_to_id)
            comment.replying_to = Comment.objects.get(id=replying_to_id)
            comment.is_reply = True
        except:
            comment.is_reply = False

        comment.user = request.user

        comment.page_path = request.POST.get("page_path")

        # Page path is passed, but we do some basic checking
        if (
            comment.page_path
            != urllib.parse.urlparse(request.META.get("HTTP_REFERER", "")).path
        ):
            return JsonResponse({"message": "invalid_form"})

        comment.hidden = False
        comment.save()

        res = comment_to_dict(comment)
        res["message"] = "success"
        return JsonResponse(res)
    else:
        return JsonResponse({"message": "invalid_form"})


# @login_required
@require_GET
def get_comments(request):
    # ?page_path=/foo/bar
    path = request.GET.get("page_path", None)
    # replying_to_id = request.GET.get("replying_to_id", None)
    comments = Comment.objects.exclude(hidden=True).filter(
        page_path=path, is_reply=False
    )
    return JsonResponse([comment_to_dict(comment) for comment in comments], safe=False)


@staff_member_required
def test_comment(request):
    return render(
        request,
        "social/test_comments.html",
        context={
            "form": CreateCommentForm(),
            "test_reply_id": Comment.objects.all()[0].id,
        },
    )


@staff_member_required
def comment_ui(request):
    return render(request, "social/comment_ui.html")
