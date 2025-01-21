// function mobileNavbar(){
//     const burger = document.querySelector("#mobile-navbar-burger");
//     const popup = document.querySelector("#mobile-navbar-popup");


//     const before = document.querySelector(".links");
//     const after = document.querySelectorAll(".links")[1];
//     console.log(before, after);

//     const before_links = Array.from(before.children);
//     const after_links = Array.from(after.children);

//     const target = document.querySelector("#mobile-navbar-popup > ul");

//     let isPopupOpen = false;

//     let closePopup = () => {
//         popup.style.display = "none";

//         for (let link of before_links){
//             before.append(link);
//         }
//         for (let link of after_links){
//             after.append(link);
//         }

//         isPopupOpen = false;
//     };
//     /* Move all the links */
//     let openPopup = () => {
//         target.innerHTML = ""; // Remove all children

//         let frag = document.createDocumentFragment();

//         for (let link of [...before_links, ...after_links]){
//             let li = document.createElement("li");
//             li.append(link);
//             frag.append(li);
//         }

//         target.appendChild(frag);
//         popup.style.display = "block";

//         isPopupOpen = true;
//     };

//     burger.addEventListener("click", () => {
//         if (isPopupOpen){
//             // close
//             closePopup();
//         } else {
//             // open
//             openPopup();
//         }
//     });

//     // If the popup menu when the page gets resized, it needs to be closed
//     
// }
// document.addEventListener("DOMContentLoaded", () => {
//     mobileNavbar();
// });

// const header = document.querySelector("header");
// const footer = document.querySelector("footer");

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