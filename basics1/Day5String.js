let naam = "Pranjal" // String literal

let repoCount = 15 // Number literal

console.log(`Hello, I am ${naam} and I have ${repoCount} repositories on GitHub.`);

// Using String methods
/*1*/ console.log("String in Uppercase:", naam.toUpperCase());

/*2*/ console.log("String in Lowercase:", naam.toLowerCase());

/*3*/ console.log("Length of String:", naam.length);

/*4*/ console.log("Character at index 2:", naam.charAt(2));

/*5*/ console.log("Index of 'a':", naam.indexOf('a'));

/*6*/ console.log("Substring from index 1 to 4:", naam.substring(1, 4));

/*7*/ console.log("Replace 'Pranjal' with 'Developer':", naam.replace('Pranjal', 'Developer'));

/*8*/ console.log("Concatenate with ' is learning JavaScript':", naam.concat(' is learning JavaScript'));

/*9*/ console.log("Split the string by 'a':", naam.split('a'));

/*10*/ console.log("Check if string includes 'jal':", naam.includes('jal'));


const gameName = new String("MorningStar") // String object
// Using String methods on String object
/*1*/ console.log("String Object in Uppercase:", gameName.toUpperCase());

