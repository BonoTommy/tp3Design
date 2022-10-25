window.addEventListener("DOMContentLoaded", function(){

let elMenuClick = document.querySelectorAll(".menu-deroulant"),
    elMenu = document.querySelectorAll(".contenu-menu-deroulant");
    console.log(elMenuClick)

for (let i = 0; i < elMenuClick.length; i++) {
   elMenuClick[i].addEventListener("click", function(e){
      e.preventDefault()
      if (elMenu[i].style.display === "none") {
        elMenu[i].style.display = "block";
      } else {
        elMenu[i].style.display = "none";
      }
   });


}





})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

