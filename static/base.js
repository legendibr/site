const displayMenu = () => {
    document.getElementById("menu").style.animation = "fadeIn 0.5s forwards";
    document.addEventListener("click", (e) => {
        if (e.target.id !== "menu" && e.target.id !== "menuIcon") {
            hideMenu();
        }
    });
}

const hideMenu = () => {
    document.getElementById("menu").style.animation = "none";
}