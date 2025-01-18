function submitCreateCommentForm(form, callback) {
    // When a form gets submitted, it redirects you
    // For comments, it shouldn't redirect, hence this code
    fetch(form.getAttribute('action'), {
        method: form.getAttribute('method'),
        body: new FormData(form), // or this, event.target
        headers: {
            'X-CSRFToken': form.querySelector('[name=csrfmiddlewaretoken]').value
        }
        // When the comments done submitting, call callback() with the response from the api
    })
        .then((response) => response.json())
        .then((data) => callback(data))
}
// document.addEventListener("DOMContentLoaded", preventCreateCommentFormRedirect((data) => console.log(data)));
