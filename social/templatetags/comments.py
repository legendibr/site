from django import template
from social.forms import CreateCommentForm

register = template.Library()


@register.inclusion_tag(
    "social/create_comment_tag.html", name="create-comment-form", takes_context=True
)
def create_comment_form(context, callback="createCommentDefaultCallback", replying_to_id=None):
    return {
        "form": CreateCommentForm(),
        # template uses a separate context
        "page_path": context.request.path,
        "replying_to_id": "null" if replying_to_id == None else replying_to_id,
        "comment_js_included": "comment_js_included" in context,
        "callback": callback
    }
