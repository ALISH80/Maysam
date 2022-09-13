var spin = document.querySelector(".three-dots");
spin.addEventListener("click", spiner);

function spiner() {
  spin.classList.add("spin");
  console.log("object");
}
spin.addEventListener("click", function () {
  setTimeout(function stop() {
    spin.classList.remove("spin");
    console.log("object");
  }, 3000);
});

var same = document.querySelectorAll(".students");
var sameArr = Array.from(same);
console.log(sameArr.length);
var showed = 12;
for (let i = 0; i < sameArr.length; i++) {
  if (i < showed) {
    sameArr[i].style.display = "block";
    console.log("block");
  } else {
    sameArr[i].style.display = "none";
    console.log("none");
  }
}
showed = 23;
let index = 0;
var loading = document.querySelector(".three-dots");
loading.addEventListener("click", function () {
  setTimeout(function show() {
    for (index; index < sameArr.length; index++) {
      sameArr[index].style.display = "block";
      if (index == showed) {
        showed += 12;
        break;
      }
    }
    if (index == sameArr.length - 1) {
      loading.style.display = "none";
    }
  }, 3000);
});
