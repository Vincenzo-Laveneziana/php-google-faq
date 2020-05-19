console.log("Js ok");


$(document).ready(function () {
  console.log("Js jquery Ok");


  var iconHamburger = $(".hamburger");
  var hamburgerMenu = $(".hamburger-menu");


  iconHamburger.click(function(){
    hamburgerMenu.toggle(200);
  });

  $(".hamburger-menu").click(function(){
  
    hamburgerMenu.toggle(200);

  });

  
});