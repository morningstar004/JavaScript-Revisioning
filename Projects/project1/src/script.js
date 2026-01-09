const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener('click', function() {
    body.style.backgroundColor = button.id;
  });
});