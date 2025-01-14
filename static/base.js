function handleResize (){
    const title = document.getElementById('title');
    const nav = document.querySelector('nav');
    const links = document.querySelectorAll('a');

    if (window.innerWidth <= 768) {
        const linkSet = document.createElement('ul');
        linkSet.classList.add('link-set');

        for (const link of links) {
            if (link.className === "title") {
                continue;
            }

            const linkLi = document.createElement('li');
            linkLi.innerHTML = link.innerHTML;
            linkLi.onclick = () => {
                link.click();
                linkLi.style.visibility = "hidden";
                linkLi.style.right = "-50%";
            }

            linkSet.appendChild(linkLi);
            link.style.display = "none";
        }
        document.body.appendChild(linkSet);

        const menu = document.createElement('div');
        menu.id = 'menu';
        menu.classList.add('menu');
        menu.onclick = () => {
            linkSet.style.visibility = linkSet.style.visibility === "hidden" ? "visible" : "hidden"
            linkSet.style.right = linkSet.style.right === '-50%' ? '0px' : '-50%';
        }
        const menuIcon = document.createElement('i');
        menuIcon.classList.add("fa-solid", "fa-list");
        menuIcon.style.color = 'white';
        const menuTitle = document.createElement('a');
        menuTitle.innerHTML = 'Subjects';
        menuTitle.style.color = 'white';
        menuTitle.style.textDecoration = 'none';
        menuTitle.style.fontSize = '20px';
        menuTitle.style.textAlign = 'center';

        title.style.position = "static";
        title.style.fontSize = "30px";
        title.style.transform = "none";

        menu.appendChild(menuIcon);
        menu.appendChild(menuTitle);
        nav.appendChild(menu);
    } else {
        title.style.fontSize = '40px';
        title.style.position = 'absolute';
        title.style.left = '50%';
        title.style.transform = 'translateX(-50%)';

        for (const link of links) {
            link.style.display = "block";
        }

        try {
            document.getElementById('menu').remove();
            document.querySelector("ul").remove();
        }
        catch (e) {

        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('resize', handleResize);
    handleResize();
});