const url = "https://api.chucknorris.io/jokes/random";
// creating a div for the jokes

//handling clicking button
const jokeButton = document.querySelector('button')
const jokeSection = document.querySelector('body')

// Create joke container once
let jokeContainer = document.createElement("div");
jokeContainer.style.backgroundColor = '#52B69A'
jokeContainer.style.padding = '10px'
jokeContainer.style.borderRadius = '5px'
jokeContainer.style.margin = '15px'
jokeSection.appendChild(jokeContainer)

jokeButton.addEventListener('click',() => {

// handle this end point with XMLHttpRequest
const jokes = new XMLHttpRequest();
jokes.open("GET", url);
jokes.send();
jokes.onreadystatechange = function () {
  if (jokes.readyState === 3) {
    const data = JSON.parse(this.responseText);
    // Update the existing container with new joke
    jokeContainer.innerHTML = data.value
  }
};
})
// handle this end point with promises

// handle the case of race condition
