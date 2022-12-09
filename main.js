const hamburgerMenu = document.querySelector(".hamburger");
const dropdownItems = document.querySelector(".dropdownItems");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click",function(e){
    console.log(dropdownItems.getAttribute("style"));
    if( dropdownItems.getAttribute("style") === "display: none;"){
        console.log("kaas");
        dropdownItems.setAttribute("style","display: flex;");
    } else if(dropdownItems.getAttribute("style") === "display: flex;")  {
        console.log("geen kaas");
        dropdownItems.setAttribute("style","display: none;");
    }
});