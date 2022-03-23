
//make header sticky
window.onscroll = function() {myFunction()};
var nav_header = document.getElementsByClassName("nav-header");

var sticky = logo.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    nav_header.classList.add("sticky")
  } else {
    nav_header.classList.remove("sticky");
  }
}