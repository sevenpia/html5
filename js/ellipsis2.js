$(document).ready(function () {
  $("section li").eq(0).click(function () {
    $(".modal").fadeIn();
  })

  $(".close").click(function () {
    $(".modal").fadeOut();
  })

})


var topbt = document.getElementById("topbt");
console.log(topbt);

/* 0. 탑버튼 요소를 가져온다. 
1. 스크롤이벤트 발생
2. 스크롤량에 따라 탑버튼이 보여지게된다. 
 */

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  // console.log(value);

  if (value > 20) {
    topbt.style.display = 'block';
  } else {
    topbt.style.display = 'none';
  }
})


// 탑버튼이 클릭이 되면 위로 부드럽게 올라간다. 

/* topbt.onclick = function () { topfunc() };
function topfunc() {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.scrollTop = 0;
}
 */

/* topbt.onclick = function () {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.scrollTop = 0;
};
 */


topbt.addEventListener('click', function () {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
})

