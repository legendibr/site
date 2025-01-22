let isSidebarOpen = false
function toggleSidebar(){
    // could just do .classList.toggle, but idk
    if (isSidebarOpen){
        document.querySelector(".sidebar").classList.remove("active");
        isSidebarOpen = false;
    } else {
        document.querySelector(".sidebar").classList.add("active");
        isSidebarOpen = true;
    }
}