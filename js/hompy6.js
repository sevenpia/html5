$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".gobtn").fadeIn(500);
    } else {
      $(".gobtn").fadeOut(500);
    }
  })
})  /* ready end  */