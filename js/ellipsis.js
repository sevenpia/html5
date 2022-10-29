$(document).ready(function () {
  $("section li").eq(0).click(function () {
    $(".modal").fadeIn();
  })

  $(".close").click(function () {
    $(".modal").fadeOut();
  })

})




let topbt = document.querySelector("#topbt");

console.log(topbt)
/* 이벤트 발생  :클릭이 일어나면 
스크롤 량에 따라 탑버튼이 보인다. 
 */

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  if (value > 20) {
    topbt.style.display = 'block';
  } else {
    topbt.style.display = 'none';
  }

})

topbt.onclick = function () { topFunc() };

function topFunc() {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.scrollTop = 0;
}



