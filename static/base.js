document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector("#mobile-navbar-burger");
    const popup = document.querySelector("#mobile-navbar-popup");
    
    const navbar = document.querySelector(".main-navbar");
    const title = document.querySelector(".title");
    const links = document.querySelectorAll(".links");

    let isPopupOpen = false;
    
    let closePopup = () => {
        popup.style.display = "none";

        links[0].classList.add("hide-mobile");
        links[1].classList.add("hide-mobile");

        navbar.insertBefore(links[0], title);
        navbar.insertBefore(links[1], title.nextSibling);

        isPopupOpen = false;
    };
    /* Move all the links */
    let openPopup = () => {
        let frag = document.createDocumentFragment();

        links[0].classList.remove("hide-mobile");
        links[1].classList.remove("hide-mobile");
        frag.append(links[0]);
        frag.append(links[1]);

        popup.appendChild(frag);
        popup.style.display = "block";

        isPopupOpen = true;
    };

    burger.addEventListener("click", () => {
        if (isPopupOpen){
            // close
            closePopup();
        } else {
            // open
            openPopup();
        }
    });
});