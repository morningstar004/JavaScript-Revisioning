const acountId = 123211;
// const keyword is used to declare a constant value to the variable which can't be changed later in the code. 
let acountGmail = "pranjalkumar@gmail.com";
// let keyword is used to declare a varible and can be changed later in the code.
var acountPass = "12341";
// var keyword is similar to let but has issus in block scope and is function scoped.Thus not used in modern JS.
let acountDistrict;
// let can be used without initialization. This will return a undefined value.NOTE:const can't be used without initialization.
acountCity = "bangalore";
// variable can be used without declaration in JS but this is not a good practice and may lead to errors in strict mode.
// variable without declaration becomes a global variable. They are considered let variables.

console.log(acountId);

acountCity = "mumbai";  
// value of let variable can be changed.

console.table([acountId, acountGmail, acountPass, acountCity, acountDistrict]);
// console.table() is used to print the values in table format in the console.