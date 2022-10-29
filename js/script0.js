var ccc = document.querySelectorAll(".ccc a");
console.log(ccc)

/* ccc[0].addEventListener("click", function (ev) {
  ev.preventDefault()
  //  document.getElementsByClassName("ccc")[0].innerHTML = "준비중입니다. ";
  alert('준비중입니다')
})

ccc[1].addEventListener("click", function (ev) {
  ev.preventDefault()
  //  document.getElementsByClassName("ccc")[0].innerHTML = "준비중입니다. ";
  alert('준비중입니다')
}) */



for (let i = 0; i < ccc.length; i++) {
  ccc[i].addEventListener("click", function (ev) {
    ev.preventDefault()
    //  document.getElementsByClassName("ccc")[0].innerHTML = "준비중입니다. ";
    alert('준비중입니다')
  })
}

/*  1. 보이지않던 top버튼이 스크롤이벤트가 발생하면 보이도록 한다.
    2. top버튼이 클릭되면 topFunc()함수가 실행되도록 한다. 
 */

var bt = document.querySelector('.top');
console.log(top);


window.addEventListener('scroll', function () {
  if (scrollY > 20) {
    bt.style.display = 'block';
  } else {
    bt.style.display = 'none';
  }
  console.log(this.scrollY);
})


function topFunc() {
  document.documentElement.style.scrollBehavior = "smooth";
  document.documentElement.scrollTop = 0;
}



/* var bt = document.getElementById('myBtn');
console.log(bt);

window.addEventListener('scroll', function () {
  console.log(scrollY);
  if (scrollY > 50) {
    bt.style.display = "block";
  } else {
    bt.style.display = "none";
  }
})


// onclick="topFun()"
bt.addEventListener('click', function () {
  topFun();
})


function topFun() {
  document.documentElement.style.scrollBehavior = "smooth";
  document.documentElement.scrollTop = 0;
} */




