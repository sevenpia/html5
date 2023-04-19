$(document).ready(function () {

  /*   윈도우에 스크롤이 일어나면
    상단 header 의 높이가   120  에서  60 으로 변경된다. 
    로고가 변경된다. 
   */

  var $window = $(window),
    $header = $("header"),
    $defalutLogo = "images/logo.svg",
    $smallLogo = "images/logo-shrink.svg";

  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (!$header.hasClass('shrink')) {
        $header.addClass('shrink');
        logoChange($smallLogo);
      } else {
        if ($header.hasClass('shrink')) {
          $header.removeClass('shrink');
          logoChange($defalutLogo);
        }
      }
    }
  })

  // logoChage함수
  function logoChange(newPath) {
    var $logo = $('.logo');
    $logo.fadeOut(300, function () {
      $logo.attr('src', newPath);
      $logo.fadeIn(300);
    });
  }
}) /*   ready end  */