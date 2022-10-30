// document.querySelector("#topbt")

var topBt = document.getElementById("topbt")
console.log(topBt);

// 스크롤이벤트(addeventlistener)가 일어나면 버튼이 보여야한다. 

window.addEventListener('scroll', function () {
  // topbt.style.display = 'block';

  // 스크롤량에 따라 버튼이 나오게 한다. 
  let value = window.scrollY;
  // console.log(value);

  if (value > 100) {
    topBt.style.display = 'block';
  } else {
    topBt.style.display = 'none';
  }

});
// 버튼을 클릭하면 위로 부드럽게 올라가야 한다. 
/* topBt.addEventListener('click', function () {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}) */

topBt.addEventListener('click', () => {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let gnb = document.getElementsByTagName('li');

let li2 = gnb[1];

/* li2.onclick = function () {
  alert("준비중");
}
 */

li2.addEventListener('click', () =>
  alert('준비중입니다~~')
)
