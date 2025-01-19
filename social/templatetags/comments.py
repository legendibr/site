from django import template
from social.forms import CreateCommentForm

register = template.Library()


@register.inclusion_tag(
    "social/create_comment_tag.html", name="create-comment-form", takes_context=True
)
def create_comment_form(
    context, callback="createCommentDefaultCallback", replying_to_id=None
):
    return {
        "form": CreateCommentForm(),
        # template uses a separate context
        "page_path": context.request.path,
        "replying_to_id": "null" if replying_to_id == None else replying_to_id,
        "create_comment_static_included": "create_comment_static_included" in context,
        "callback": callback,
    }

@register.inclusion_tag("social/load_comments_tag.html", name="load-comments", takes_context=True)
def load_comments(context, replying_to=None, callback="loadCommentsDefaultCallback"):
    return {
        "page_path": context.request.path,
        "replying_to": replying_to,
        "load_comments_static_included": "load_comments_static_included" in context
    }