// push and concatinate

const marvel_heroes = ['Spider-man','Iron-man','Thor'];
const marv_heroes = ['Spider-man','Iron-man','Thor'];

const dc_heroes = ['Batman','Superman','Aquaman'];

//Push 

marvel_heroes.push(dc_heroes);
console.log("After push:", marvel_heroes); // Nested array

//Concatinate

const all_heroes = marv_heroes.concat(dc_heroes);
console.log("After concatinate:", all_heroes); // Flat array

// Note: The push method adds the entire dc_heroes array as a single element at the end of marvel_heroes,
// whereas concat creates a new array that combines elements from both arrays into a single flat array.
// push modifies the original array, while concat returns a new array without modifying the originals.


//Sprade operator

const Vgualaties = [...marv_heroes, ...dc_heroes];
console.log("Using spread operator to concatenate:", Vgualaties);

//Flat Operator

const Integers =[ [1,2,3],4,[5,6],7,[8,9,10]]

const flatArray = Integers.flat();
console.log("Using flat operator:", flatArray);

//of Operator

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log("Using of operator:", Array.of(score1,score2,score3));
