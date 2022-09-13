var opennav = document.querySelector("#right-hamburger");
opennav.addEventListener("click", openNavBar);
function openNavBar() {
  var Topnav = document.querySelector(".Heading");
  Topnav.classList.remove("CloseNav");
  Topnav.classList.add("openNav");
}

var closenav = document.querySelector("#closeNav");
closenav.addEventListener("click", closeNavBar);
function closeNavBar() {
  var Topnav = document.querySelector(".Heading");
  Topnav.classList.remove("openNav");
  Topnav.classList.add("CloseNav");
}
