$(function () {

  $(".trigger").click(function () {
    $(this).toggleClass("active")
    $("ul.gnb").toggleClass("active")
  })

  $("section, .logo, ul.gnb a").click(function () {
    $(".trigger, ul.gnb ").removeClass("active")
  })



  /* Topbtn 만들기 */
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".gotop").fadeIn(500)
    } else {
      $(".gotop").fadeOut(500)
    }
  })

  /* Wow Scroll Reveal Animation */
  wow = new WOW({
    boxClass: 'wow',
    offset: 180,
    mobile: true
  })
  wow.init()

  /* faq  */

  /*   $(".faq-item").click(function () {
      $(this).children(".faq-desc").slideToggle();
      $(this).siblings().children(".faq-desc").slideUp();
  
      if ($(this).hasClass("active")) {
        $(this).removeClass("active")
      } else {
        $(this).addClass("active")
        $(this).siblings().removeClass("active")
      }
    })
   */


  $(".faq-desc").eq(0).show()
  $(".faq-title").click(function () {
    $(this).next(".faq-desc").slideToggle();
    $(this).parent().siblings().children(".faq-desc").slideUp();



    if ($(this).parent().hasClass("active")) {
      $(this).parent().removeClass("active")
    } else {
      $(this).parent().addClass("active")
      $(this).parent().siblings().removeClass("active")
    }

  })


})