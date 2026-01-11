const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");


let interval;

start.addEventListener("click", function (e) {
  interval = setInterval(function (colour) {
    const hex = "0123456789ABCDEF";

    let randomColour = "#";

    for (let index = 0; index < 6; index++) {
      randomColour += hex[Math.floor(Math.random() * 16)];
    }
    console.log(randomColour);
    body.style.backgroundColor = `${randomColour}`;
  }, 1000);
  start.setAttribute("disabled", "");
  stop.removeAttribute("disabled");
});

stop.addEventListener("click", function (a) {
  start.removeAttribute("disabled");
  clearInterval(interval);
  stop.setAttribute("disabled", "");
});
