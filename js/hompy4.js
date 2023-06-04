$(function () {

  /*　메인메뉴 서브메뉴 나오게 하기  */
  $("ul.gnb > li").click(function () {
    $(this).find("ul.sub").stop().slideToggle();
    $(this).siblings("ul.gnb > li").find("ul.sub").slideUp();
  })

  /*  트리거 메뉴  */
  $(".icon").click(function () {
    $("nav, .trigger").toggleClass("active");
  })


  /* 스크롤이 생기면 탑버튼이 생긴다.  */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("nav, .trigger").removeClass("active")
      $(".topbtn").addClass("active")
    } else {
      $(".topbtn").removeClass("active")
    }
  })


  /* 메뉴창 닫기 */
  $(".content, .logo").click(function () {
    $("nav, .trigger").removeClass("active")
  })



  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 150,
    mobile: true
  })
  wow.init()


}) /* ready end  */