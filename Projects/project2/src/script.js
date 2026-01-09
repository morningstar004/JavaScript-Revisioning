const form = document.querySelector('form')
const button = document.querySelector('button')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');

  const BMI = (weight/((height/100)**2)).toFixed(2);

  if(!height || !weight || height < 0 || weight < 0 || isNaN(height) || isNaN(weight)){
    result.innerHTML = 'Plese check you entered a wrong value';
  }else{
    result.innerHTML = `<span>${BMI}</span>`
  }


})