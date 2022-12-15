const hamburgerMenu = document.querySelector(".hamburger");
const dropdownItems = document.querySelector(".dropdownItems");
const body = document.querySelector("body");


window.addEventListener("resize",function(e){
    if(document.body.offsetWidth >= "992"){
        dropdownItems.setAttribute("style","display: none;");
    }
});

hamburgerMenu.addEventListener("click",function(e){
    if( dropdownItems.getAttribute("style") === "display: none;"){
        dropdownItems.setAttribute("style","display: flex;");
    } else if(dropdownItems.getAttribute("style") === "display: flex;")  {
        dropdownItems.setAttribute("style","display: none;");
    }
});