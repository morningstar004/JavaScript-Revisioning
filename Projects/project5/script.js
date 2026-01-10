const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let interval

start.addEventListener("click", function (e) {
  interval = setInterval(function (colour) {
    colour = parseInt(Math.random() * 1000000);
    body.style.backgroundColor = `#${colour}`;
  }, 1000);
  start.setAttribute("disabled", "");
  stop.removeAttribute("disabled");
});

stop.addEventListener("click", function (a) {
  start.removeAttribute("disabled");
  clearInterval(interval)
  stop.setAttribute("disabled", "");
});
