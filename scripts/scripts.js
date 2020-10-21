//main menu slide
var close = document.getElementById("navi");
close.addEventListener("click", slide);
close.addEventListener("click", nav);

var open = document.getElementById("navToggle");
open.addEventListener("click", nav);
open.addEventListener("click", menu);

function nav() {
  var element = document.getElementById("logo");
  element.classList.toggle("menu");
}

function menu() {
  var element = document.getElementById("navi");
  element.classList.toggle("slide");
}

function slide() {
  var element = document.getElementById("navi");
  element.classList.toggle("slide");
}
//=================================================//
//Here are some ways to get in touch with me info slide outs
