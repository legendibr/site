function createCommentFromTemplate(data){
    let t = document.querySelector("#load-comments-template").content.cloneNode(true).firstElementChild;
    console.log(t);
    t.setAttribute("data-id", data.id);
    t.querySelector(".username").textContent = data.username;
    t.querySelector(".text").textContent = data.text;
    if (data.is_reply){
        t.setAttribute("data-replying-to-id", data.replying_to_id);
    }
    return t;
}

function loadCommentAndReplies(comment_data, $container){
    let comment = createCommentFromTemplate(comment_data);
    $container.append(comment);

    if (comment_data.replies.length > 0){
        let $replies = comment.querySelector(".replies")
        comment_data.replies.forEach(reply => loadCommentAndReplies(reply, $replies));
    }

    /* do createCommentFromTemplate */
    /* Add comment to DOM */
    /* If comment is_reply, run loadCommentContainer */
}

function loadCommentContainer($container, replying_to_id = null){
    let url = GET_COMMENTS_URL + "?" 
        + (new URLSearchParams({
            page_path: $container.getAttribute("data-page-path"), 
            replying_to_id: replying_to_id
        })).toString();

    fetch(url)
        .then(response => response.json())
        .then(json => json.forEach(data => loadCommentAndReplies(data, $container)));

    /* Fetch all comments for curent page using page path, replying to */
    /* For every comment, loadCommentAndReplies */

}

function loadAllCommentContainers(){
    let $containers = document.querySelectorAll(".comment-container:not(.replies)");
    for (let $container of $containers){
        loadCommentContainer($container, null)
    }
}

document.addEventListener("DOMContentLoaded", loadAllCommentContainers);