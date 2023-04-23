$(document).ready(function () {

  /* 변수잡기
      window
      #main-header
      defalutLogo
      smallLogo
      logo 
      topBtn
  */

  const $window = $(window),
    $mainHeader = $("#main-header"),
    $defaultLogo = "images/eleven.svg",
    $smallLogo = "images/eleven-small.svg",
    $logo = $(".logo"),
    $topBtn = $(".topBtn");

  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      $topBtn.show()
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        changeLogo($smallLogo);
      }

    } else {
      $topBtn.hide()
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink")
        changeLogo($defaultLogo);
      }
    }
  })  /* scroll */


  // changeLogo 함수 제작 
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


// topBtn 함수 호출시 
/* function topBtn() {
  window.scrollTo(0, 0);
}
 */
