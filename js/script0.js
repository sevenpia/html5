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






