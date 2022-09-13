var open = document.querySelector("#hamburger");
open.addEventListener("click", openLeftBar);
function openLeftBar() {
  var Left = document.querySelector(".Left");
  Left.classList.remove("Close");
  Left.classList.add("open");
}

var close = document.querySelector("#close");
close.addEventListener("click", closeLeftBar);
function closeLeftBar() {
  var Left = document.querySelector(".Left");
  Left.classList.remove("open");
  Left.classList.add("Close");
}
document
  .querySelectorAll(".nav-item")
  .forEach((element) => element.addEventListener("click", closeLeftBar));
function closeLeftBar() {
  var Left = document.querySelector(".Left");
  Left.classList.remove("open");
  Left.classList.add("Close");
}
