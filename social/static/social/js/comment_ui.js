window.onload = () => {
    fetch('/social/api/get_comments?page_path=/social/test')
    .then(response => response.json())
    .then(data => {
        const commentDivs = document.querySelector(".comment");
        data.forEach(comment => {
            console.log(comment);
            const commentDiv = commentDivs.cloneNode(true);
            const author = commentDiv.querySelector(".author");
            const content = commentDiv.querySelector(".content");
            author.innerHTML = comment.username;
            content.innerHTML = comment.text;
            document.getElementById("main").appendChild(commentDiv);
        });
    });
}