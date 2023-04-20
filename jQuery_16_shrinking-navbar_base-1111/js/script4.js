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
    $logo = $(".logo"),
    $topBtn = $("#topBtn");

  $window.scroll(function () {
    // console.log(scrollY);
    if ($(this).scrollTop() > 100) {
      $topBtn.show();
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        changLogo($smallLogo);
      }
    } else {
      $topBtn.hide();
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink");
        changLogo($defaultLogo);
      }
    }
  })   /* scroll */


  /* 메뉴 로고 교체  */
  function changLogo(path) {
    $logo.fadeOut(500, function () {
      $logo.attr("src", path)
      $logo.fadeIn(500)
    })
  }
}) /* ready end  */


// 부드럽게 올라가기
function topFunction() {
  window.scrollTo(0, 0);
  // html.scrollBehavior = "smooth";

  /*   document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   */


}


