const open = document.querySelector("#hamburger");
open.addEventListener("click", openLeftBar);
function openLeftBar() {
  const Left = document.querySelector(".Left");
  Left.id = "open";
}

const close = document.querySelector("#close");
close.addEventListener("click", closeLeftBar);
function closeLeftBar() {
  const Left = document.querySelector(".Left");
  Left.id = "Close";
}


const opennav = document.querySelector("#right-hamburger");
opennav.addEventListener("click", openNavBar);
function openNavBar() {
  const Topnav = document.querySelector(".Heading");
  Topnav.id = "openNav";
}

const closenav = document.querySelector("#closeNav");
closenav.addEventListener("click", closeNavBar);
function closeNavBar() {
  const Topnav = document.querySelector(".Heading");
  Topnav.id = "CloseNav";
}