const card = document.querySelector('#card');
const header = document.querySelector('#header');
const message = document.querySelector('#message');
const button = document.querySelector('#button');
const changeColorButton = document.getElementById("change-color-button");
const body = document.querySelector("body");
const colors = ["pink", "red", "purple", "yellow"];
let currentColorIndex = 0;



card.style.opacity = 0;
header.style.transform = 'translateX(-100%)';
message.style.transform = 'translateX(100%)';
button.style.transform = 'translateY(-100%)';

setTimeout(function() {
  card.style.transition = '1s ease-in-out';
  card.style.opacity = 1;
  header.style.transition = '1s ease-in-out';
  header.style.transform = 'translateX(0)';
  message.style.transition = '1s ease-in-out';
  message.style.transform = 'translateX(0)';
  button.style.transition = '1s ease-in-out';
  button.style.transform = 'translateY(0)';
}, 100);

button.addEventListener('click', function() {
  alert("I love you baby")
});

changeColorButton.addEventListener("click", function() {
  currentColorIndex  = (currentColorIndex + 1) % colors.length;
  body.style.backgroundColor = colors[currentColorIndex];
})
