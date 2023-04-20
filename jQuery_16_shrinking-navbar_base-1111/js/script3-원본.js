$(document).ready(function () {

  var $window = $(window),
    $mainHeader = $("#main-header"),
    $defaultLogo = "images/logo.svg",
    $smallLogo = "images/logo-shrink.svg";

  $window.scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (!$mainHeader.hasClass("shrink")) {
        $mainHeader.addClass("shrink");
        switchLogo($smallLogo)
      }
    }
    else {
      if ($mainHeader.hasClass("shrink")) {
        $mainHeader.removeClass("shrink");
        switchLogo($defaultLogo);
      }
    }
  });

  function switchLogo(newPath) {
    var $logo = $("#logo");
    $logo.fadeOut(500, function () {
      $logo.attr("src", newPath);
      $logo.fadeIn(500);
    });
  }

})  /* ready end  */








