// 제이쿼리로 작성

/* $(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active")
  })
}) */

/* ready end  */

// 자바스크립트로 작성

/* toggleMenu.addEventListener("click", function () {
  // console.log(toggleMenu)
  toggleMenu.classList.toggle("active");
  sideBar.classList.toggle("active");

}); */


// 자바스크립트 함수로 작성

function toggleMenu() {
  const toggleMenu = document.querySelector(".toggle");
  const sideBar = document.querySelector(".sidebar");

  toggleMenu.classList.toggle("active");
  sideBar.classList.toggle("active");
}

// 제이쿼리로 작성
/* $(".toggle ").click(function () {
  $(".sidebar").toggleClass("active")
})
 */


$(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".topBtn").addClass("active");
    } else {
      $(".topBtn").removeClass("active");
    }
  })

  $(".topBtn").click(function () {
    window.scrollTo(0, 0);
  })

  /*   $(".bottomBtn").click(function () {
      window.scrollTo(0, 8000);
    }) */

}) 
