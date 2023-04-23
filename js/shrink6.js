$(document).ready(function () {

  /* 변수설정
  window
  mainHeader
  defaultLogo
  smallLogo
  logo */

  const $window = $(window),
    $mainHeader = $("#main-header"),
    $defaultLogo = "jQuery_16_shrinking-navbar_base-1111/images/eleven.svg",
    $smallLogo = "jQuery_16_shrinking-navbar_base-1111/images/eleven-small.svg",
    $logo = $(".logo"),
    $topBtn = $(".topBtn");

  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      $topBtn.show();
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        changeLogo($smallLogo);
      }
    } else {
      $topBtn.hide();
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink");
        changeLogo($defaultLogo);
      }
    }

  })   /* scroll */

  // 함수제작 
  function changeLogo(path) {
    $logo.fadeOut(500, function () {
      $logo.attr("src", path)
      $logo.fadeIn(500)
    })
  }

  $topBtn.click(function () {
    window.scrollTo(0, 0);
  })

})  /* ready end  */