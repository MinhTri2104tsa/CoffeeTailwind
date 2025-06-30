//Author: MinhTri
const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
    if(toggleTopMenuIcon.contains(e.target)) {
        //Clicked on the toggle icon
        topMenu.classList.toggle("ct-topmenu-expanded");
        topMenu.classList.toggle("hidden");
    }else{
        //Clicked outside the toggle icon
        if(topMenu.classList.contains("ct-topmenu-expanded")) {
            topMenu.classList.remove("ct-topmenu-expanded");
            topMenu.classList.add("hidden");
        }
    }
});
