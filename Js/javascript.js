const open = document.querySelector("#hamburger");
open.addEventListener("click", openLeftBar);
function openLeftBar() {
  const Left = document.querySelector(".Left");
  Left.classList.remove("Close");
  Left.classList.add("open");
}

const close = document.querySelector("#close");
close.addEventListener("click", closeLeftBar);
function closeLeftBar() {
  const Left = document.querySelector(".Left");
  Left.classList.remove("open");
  Left.classList.add("Close");
}


const opennav = document.querySelector("#right-hamburger");
opennav.addEventListener("click", openNavBar);
function openNavBar() {
  const Topnav = document.querySelector(".Heading");
  Topnav.classList.remove("CloseNav");
  Topnav.classList.add("openNav");
}

const closenav = document.querySelector("#closeNav");
closenav.addEventListener("click", closeNavBar);
function closeNavBar() {
  const Topnav = document.querySelector(".Heading");
  Topnav.classList.remove("openNav");
  Topnav.classList.add("CloseNav");
}