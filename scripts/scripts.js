//main menu slide
var close = document.getElementById("navi");
close.addEventListener("click", slide);
close.addEventListener("click", nav);

var open = document.getElementById("navToggle");
open.addEventListener("click", nav);
open.addEventListener("click", menu);


// HTML COLOR CHANGES ON HOVER
var htmlicon = document.getElementById("htmlIcon");
var cssicon = document.getElementById("cssIcon");
var jsicon = document.getElementById("jsIcon");
var booticon = document.getElementById("bootIcon");
var javaicon = document.getElementById("javaIcon");

htmlicon.addEventListener("mouseover",getColor);
htmlicon.addEventListener("mouseout",retColor);
cssicon.addEventListener("mouseover",getColor);
cssicon.addEventListener("mouseout",retColor);
jsicon.addEventListener("mouseover",getColor);
jsicon.addEventListener("mouseout",retColor);
booticon.addEventListener("mouseover",getColor);
booticon.addEventListener("mouseout",retColor);
javaicon.addEventListener("mouseover",getColor);
javaicon.addEventListener("mouseout",retColor);

function retColor() {
  // var element = document.getElementById("htmlIcon")
  // csselement = document.getElementById("htmlIcon")
  this.classList.remove("colored");
}

function getColor() {
  // var element = document.getElementById("htmlIcon")
  this.classList.add("colored");
}





// // HTML COLOR CHANGES ON HOVER
// var htmlicon = document.getElementById("htmlIcon");
// htmlicon.addEventListener("mouseover",getColor('htmlIcon'));
// htmlicon.addEventListener("mouseout",retColor('htmlIcon'));



// function getColor(selID) {
//   var element = document.getElementById(selID)
//   element.classList.add("colored");
// }


// function retColor() {
//   var element = document.getElementById("htmlIcon")
//   this.classList.remove("colored");
// }






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
