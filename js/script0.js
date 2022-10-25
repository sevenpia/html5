var ccc = document.querySelector(".ccc");
console.log(ccc)

ccc.addEventListener("click", function (ev) {
  ev.preventDefault()
  //  document.getElementsByClassName("ccc")[0].innerHTML = "준비중입니다. ";
  alert('준비중입니다')
})