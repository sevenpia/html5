$(document).ready(function () {

  // (selector).animate({styles},speed,easing,callback)

  $(".subtop3  h2").animate({ "top": "0px", "opacity": "1" }, 2000, "swing", function () {
    $(".subtop3 p.text").animate({ "left": "0", "opacity": "1" }, 1000, "swing")
  })

})  /* ready end  */