$(function () {
  /* 상단메뉴 슬라이드  */

  $("ul.gnb > li").click(function () {
    $(this).find("ul.sub").stop().slideToggle();
    $(this).siblings("ul.gnb > li").find("ul.sub").stop().slideUp();
  })


  /*   $("ul.gnb > li").hover(function () {
      $(this).find("ul.sub").stop().slideDown();
    }, function () {
      $("ul.sub").stop().slideUp();
    })
  
   */
  /*  윈도우 스크롤시 : topbtn show hide */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".topbtn, header").addClass("active")
      $(".gnb, .trigger").removeClass("active")
    } else {
      $(".topbtn, header").removeClass("active")
    }
  })

  /* 트리거모바일 메뉴 */

  $(".icon").click(function () {
    $(".gnb, .trigger").toggleClass("active")
  })

  $("section, .logo").click(function () {
    $(".gnb, .trigger").removeClass("active")
  })



}) /* ready end  */