// $(document).ready(function(){
//     $('.aniview').AniView();
// });

function displayMenu() {
const veggieBurgerMenu = document.getElementById("nav");
const closed = document.querySelector('#veggie-closed');
const open = document.querySelector('#veggie-open');

console.log('click');
if (veggieBurgerMenu.style.display == "none" || veggieBurgerMenu.style.display == "") {
veggieBurgerMenu.style.display = "flex";
open.style.display= "block";
closed.style.display= "none";
} else {
    veggieBurgerMenu.style.display = "none";
    open.style.display= "none";
    closed.style.display= "block";
}  
}