//DataTypes In JavaScript

'use strict';
// Enabling strict mode to catch common coding errors and "unsafe" actions.

let name = "Pranjal";
// String data type is used to store text values inside double or single quotes.
let age = 20;
// Number data type is used to store numeric values both integer and floating point.
let isStudent = true;   
// Boolean data type is used to store true or false values.
let height;
// Undefined data type is used to store variables that are declared but not initialized.
// The default value of such variables is 'undefined'.
console.log(typeof height);
let weight = null;  
// Null data type is used to store variables that are explicitly set to have no value.
// NOTE |: typeof null returns 'object' due to a historical bug in JavaScript.
console.log(typeof weight);
let hobbies = ["reading", "coding", "gaming"];
// Array data type is used to store multiple values in a single variable.
let address = {city: "Bangalore", state: "Karnataka"};
// Object data type is used to store key-value pairs.

console.table([{name, age, isStudent, height, weight, hobbies, address}]);

