$(document).ready(function () {

  /*  변수 잡기
   window
   #main-header
   디폴트 로고 
   작은 로고
   로고  */

  const $window = $(window),
    $mainHeader = $("#main-header"),
    $defaultLogo = "images/eleven.svg",
    $smallLogo = "images/eleven-small.svg",
    $logo = $(".logo");

  $window.scroll(function () {
    // console.log(scrollY);
    if ($(this).scrollTop() > 100) {
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        changLogo($smallLogo);
      }
    } else {
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink");
        changLogo($defaultLogo);
      }
    }
  })   /* scroll */

  function changLogo(path) {
    $logo.fadeOut(500, function () {
      $logo.attr("src", path)
      $logo.fadeIn(500)
    })
  }

}) /* ready end  */