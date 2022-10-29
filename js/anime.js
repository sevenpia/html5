
var box2 = document.querySelector(".box2");
console.log(box2);

box2.addEventListener('click', function (ev) {
  ev.preventDefault();
  document.documentElement.style.scrollBehavior = 'smooth';
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

})