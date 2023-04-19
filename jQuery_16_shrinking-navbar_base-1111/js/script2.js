$(document).ready(function () {

  /*   윈도우에 스크롤이 일어나면
    상단 header 의 높이가    120  에서  60 으로 변경된다. 
   */


  $(window).scroll(function () {
    if ($(window).scrollTop()) {
      $("header").addClass('shrink');
    } else {
      $("header").removeClass('shrink');
    }
  })

}) /*   ready end  */


