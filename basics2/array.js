const arr = [1, 2, 3, 4, 5];

// In JavaScript, arrays are resizable and can hold elements of different datatypes
// Array copy in JavaScript creates a shallow copy by default
// Shallow copy means that for primitive data types, the values are copied,
// but for objects and arrays, only the reference is copied.

const Arr = arr; // Reference copy

const Arr2 = arr.slice(); // Shallow copy using slice

console.log("Original Array:", arr);
console.log("Reference Copy (Arr):", Arr);
console.log("Shallow Copy (Arr2):", Arr2);

const nestedArr = [[1, 2], [3, 4]];
const DistictDataTypes = [1,2,"three", {four: 4}, [5]];

const objArr = new Array(1,2,"Hello World", {key: "value"}, [10,20]);

console.log("Nested Array:", nestedArr);
console.log("Array with Distinct Data Types:", DistictDataTypes);
console.log("Array created using Array constructor:", objArr);


// Methods of Array in JavaScript

arr.push(6); // Adds an element to the end
console.log("After push(6):", arr);

arr.pop(); // Removes the last element
console.log("After pop():", arr);

arr.indexOf(3); // Finds the index of an element
console.log("Index of 3:", arr.indexOf(3));

arr.includes(4); // Checks if an element exists
console.log("Includes 4:", arr.includes(4));        

//Slice and splice methods
const MyArr = [ 5, 10, 20, 30, 40, 50];
console.log("MyArr:", MyArr);

const slicedArr = MyArr.slice(1, 4); // Extracts a section of the array
console.log("slicedArr : ",slicedArr);
console.log("MyArr after slice (unchanged):", MyArr);

const splicedArr = MyArr.splice(1,4);
console.log("splicedArr :", splicedArr);
console.log("MyArr after splice:", MyArr);  


