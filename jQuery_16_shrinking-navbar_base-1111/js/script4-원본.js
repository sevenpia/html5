$(document).ready(function () {

  /*   스크롤이 일어나면
    상단의 높이값이 6em 에서 4em 이 된다.

    변수 리스트
    window
    mainHeader
    defaultLogo
    smallLogo
    logo 

   */

  var $window = $(window),
    $mainHeader = $("#main-header"),
    $logo = $("#logo"),
    $defaultLogo = "images/gs.svg",
    $smallLogo = "images/gs-small.svg";

  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {

      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        switchLogo($smallLogo);
      }

    } else {
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink");
        switchLogo($defaultLogo);
      }
    }
  })  /*  scroll  */

  function switchLogo(newPath) {
    $logo.fadeOut(500, function () {
      $logo.attr("src", newPath);
      $logo.fadeIn(500);
    })
  }

})  /* ready end  */