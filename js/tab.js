$(document).ready(function () {
  /* 탭메뉴 */
  $(".content .con1 h2").click(function () {
    $(".con1 h2, .con1 ul").removeClass("on")
    $(this).addClass("on")
    $(this).next("ul").addClass("on")
  })

}) /* ready end  */