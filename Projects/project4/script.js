let randomNum = Math.floor(Math.random()*100+1)
let count = 1;
gameStart = true;

const userInput = document.querySelector('#guessField')
console.log(userInput)
const button = document.querySelector('#subt')
const preuserInput = document.querySelector('.guesses')
const round = document.querySelector('.lastResult')
const result = document.querySelector('.lowOrHi')

const p = document.createElement('p');

let prevuserInput = []

if(gameStart){
  button.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value);
    console.log(guess)
    validuserInput(guess)
  })
}

function validuserInput(guess){
  if(isNaN(guess)){
    alert('Enter Value is not vaild number')
  }else if(guess>100){
    alert('Enter Value is out of range')
  }else{
    prevuserInput.push(guess);
    if(count === 11){
      pushPreuserInput(guess)
      displayMessage(`Game is over you are out of limit`)
      endGame()
      
    }else{
      pushPreuserInputes(guess);
      checkuserInput(guess);
    }
  }

}
function checkuserInput(guess){
  if (guess === randomNum) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOOO High`);
  }  
}
function pushPreuserInputes(guess){
  userInput.value = '';
  preuserInput.innerHTML += `${guess}, `;
  count++;
  round.innerHTML = `${11 - count} `;
}
function displayMessage(massage){
  result.innerHTML = `${massage}`
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('newButton')
  p.setAttribute('id','gameButton')
  p.innerText = 'Start New Game'
  result.appendChild(p)
  gameStart = false;
  startGame();
  result.setAttribute('disabled','')
}
function startGame(){
  const newGameButton = document.querySelector('#gameButton')
  newGameButton.addEventListener('click', function(e){
    randomNum = Math.floor(Math.random()*100+1)
    prevuserInput = []
    count = 1;
    preuserInput.innerHTML=''
    round.innerHTML = `10`
    userInput.removeAttribute('disabled')
    result.removeAttribute('disables')
    result.innerHTML = ''
    result.removeChild(p);
    set

    gameStart = true;


  })
}
