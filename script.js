function toggleMenu(){
    menuList.classList.add("menu-container");
    showMenu.classList.remove("showMenu");
    hideMenu.classList.remove("close-menu");
}


function closeMenu(){
    hideMenu.classList.add("close-menu");
}



//const hide = document.querySelector(".menu-container")

//document.addEventListener("click", function(event){
//    if (event.target.closest(".menu-container")) return
//    menuList.classList.add("hide-menu");
//})
