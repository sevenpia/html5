/*
 * ---------------------------------------------------------------------------
 * jQuery Version
 * ---------------------------------------------------------------------------
 */

var $window = $(window),
  $mainHeader = $("#main-header"),
  $defaultLogo = "images/logo.svg",
  $smallLogo = "images/logo-shrink.svg";

$window.scroll(function () {
  if ($(this).scrollTop() > 100) {
    if (!$mainHeader.hasClass("shrink")) {
      $mainHeader.addClass("shrink");
    }
  } else {
    if ($mainHeader.hasClass("shrink")) {
      $mainHeader.removeClass("shrink");
    }
  }
});

/*
 * ---------------------------------------------------------------------------
 * Vanilla JavaScript Version
 * ---------------------------------------------------------------------------
 */
