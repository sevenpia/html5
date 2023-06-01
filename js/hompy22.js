/*  ########### 제이쿼리로 작성  ########### */

$(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active")
    $(".sidebar").toggleClass("active")
  })
  $(".menu li a, section").click(function () {
    $(".sidebar, .toggle").removeClass("active")
    // $(".toggle").removeClass("active")
  })
})


/* ready end  */


/*  ########### 자바스크립트 함수로 작성  ########### */

/* function toggleMenu() {
  const toggleMenu = document.querySelector(".toggle");
  const sideBar = document.querySelector(".sidebar");

  toggleMenu.classList.toggle("active");
  sideBar.classList.toggle("active");
} */



/*  ########### 자바스크립트로 작성  ==> 망함  ########### */
/* 
const toggleMenu = document.querySelector(".toggle");
const sideBar = document.querySelector(".sidebar");
const menuList = document.querySelectorAll(".sidebar ul.menu li a");
console.log(menuList);

toggleMenu.addEventListener("click", function () {
  // console.log(toggleMenu)
  toggleMenu.classList.toggle("active");
  sideBar.classList.toggle("active");
});
menuList.addEventListener("click", function () {
  toggleMenu.classList.remove("active");
  sideBar.classList.remove("active");
})
 */


/* ###########  top button  ######## */

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

})