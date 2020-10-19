$(document).ready(function(){
    $('.aniview').AniView();
});

const placeForResults = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  placeForResults.append(`${name} : ${value}`)
  placeForResults.append(document.createElement("br"))
})


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