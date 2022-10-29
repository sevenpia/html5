
let mainText = document.querySelector("h1");
console.log(mainText);

window.addEventListener('scroll', function () {
  let value = window.scrollY
  console.log("scrollY", value)
  if (value > 250) {
    mainText.style.animation = "reset 1s ease-out forwards";
  } else {
    mainText.style.animation = "move 1s ease-out";
  }
})

