let isPopoutMenuOpen = false;

function togglePopoutMenu(){
    if (isPopoutMenuOpen){
        // Close it
        document.querySelector("#popout-menu").style.display = "none";
        isPopoutMenuOpen = false;
    } else {
        // Open it
        document.querySelector("#popout-menu").style.display = "visible";
        document.querySelector("#popout-menu").style.animation = "fadeIn 0.5s forwards";
        isPopoutMenuOpen = true;
    }
}