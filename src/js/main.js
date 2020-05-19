console.log("Js ok");


$(document).ready(function () {
  console.log("Js jquery Ok");


  var iconHamburger = $(".hamburger");
  var hamburgerMenu = $(".hamburger-menu");
  var close = $(".close");


  iconHamburger.click(function(){
      hamburgerMenu.toggle(200);
  });

  $("main").click(function(){
  
    hamburgerMenu.hide();
   
    /* iconHamburger.toggle(); */
  });

  
});