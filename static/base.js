let popupOpened = false;

function mobileNavbar() {
    const popup = document.querySelector("#mobile-navbar-popup");
    const popupUl = popup.querySelector("ul");

    const links = Array.from(document.querySelectorAll(".main-navbar > .links")).flatMap(link => Array.from(link.children));
    
    for (const link of links) {
        const li = document.createElement("li");
        li.append(link.cloneNode(true));
        popupUl.appendChild(li);
    }

    window.addEventListener("resize", (event) => {
        if (window.innerWidth > 1024){
            closePopup();
        }
    })
}

function openPopup() {
    popupOpened = true;
    document.querySelector("#mobile-navbar-popup").classList.add("active");
}

function closePopup() {
    popupOpened = false;
    document.querySelector("#mobile-navbar-popup").classList.remove("active");
}

function toggleMobileNavbar() {
    if (popupOpened) {
        closePopup();
    } else {
        openPopup();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mobileNavbar();
});