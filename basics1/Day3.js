//Convertion in Datatypes

let num = 42;
// Number data type

console.log(typeof num);

let strNum = String(num);
// Converting Number to String data type
console.log(typeof strNum);

let str = "123";
// String data type
console.log(typeof str);
let convertedNum = Number(str);
// Converting String to Number data type
console.log(typeof convertedNum);

let str2 = false;
// String data type
console.log(typeof str2);   
let convertedNaN = Number(str2);
// Converting non-numeric String to Number results in NaN (Not a Number)
console.log(typeof convertedNaN);
console.log(convertedNaN); // Outputs: NaN

let bool = true;
// Boolean data type
console.log(typeof bool);   
let boolToNum = Number(bool);
// Converting Boolean to Number (true -> 1, false -> 0)
console.log(typeof boolToNum);
console.log(boolToNum); // Outputs: 1
let bool2 = false;
console.log(typeof bool2);   
let bool2ToNum = Number(bool2);
console.log(typeof bool2ToNum);
console.log(bool2ToNum); // Outputs: 0      

let string2 = null;
// Null data type
let nullToString = String(string2);
// Converting Null to String
console.log(typeof nullToString);
console.log(nullToString); // Outputs: "null"


/*******************Operations in javaScript********************/

let value = 10;
let negValue = -value; // Unary negation
console.log(negValue); // Outputs: -10

console.log(3+3);// 6
console.log(10-5);// 5
console.log(4*2);// 8
console.log(20/4);// 5
console.log(7%3);// 1
console.log(2**3);// 8