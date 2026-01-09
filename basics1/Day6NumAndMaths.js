const score = 50 // Number literal
console.log(score)

const balance = new Number(100) // Number object
console.log(balance)
//when we use number methods on number literal js converts it to number object internally
// output: [Number: 100]

// Using Number methods
/*1*/ console.log("Fixed to 2 decimal places:", score.toFixed(2));  
/*2*/ console.log("Value as string:", score.toString());
/*3*/ console.log("Exponential notation:", score.toExponential(2));
//Exponential notation: 5.00e+1
/*4*/ console.log("Value with precision 4:", score.toPrecision(4));
/*5*/ console.log("Parse integer from string '150abc':", Number.parseInt('150abc'));
//Parse integer from string '150abc': 150
/*6*/ console.log("Parse float from string '150.75xyz':", Number.parseFloat('150.75xyz'));
/*7*/ console.log("Check if score is NaN:", Number.isNaN(score));
/*8*/ console.log("Check if balance is finite:", Number.isFinite(balance));



const someNumber = 1230.8944
console.log(someNumber.toPrecision(5)); //1230.9
console.log(someNumber.toPrecision(3)); //1.23e+3
console.log(someNumber.toPrecision(6)); //1230.89
/*9*/ console.log("Check if score is integer:", Number.isInteger(score));
/*10*/ console.log("Get primitive value of balance object:", balance.valueOf());


const money = 100000000
console.log(money.toLocaleString('en-US')); //100,000,000
console.log(money.toLocaleString('de-IN')); //1,00,00,00,000



// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
// Generate random number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)