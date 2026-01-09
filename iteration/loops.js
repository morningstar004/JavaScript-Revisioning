//for Loop

for(let index = 1; index <=10 ;index++){
    console.log(`2 X ${index} = ${2*index} `);
}

for (let i = 1; i < 4; i++) {

    for (let j = 1; j < 5; j++) {
        console.log(`${j}`)
    }
    console.log("\t")
    
}

//for loop on array

const myArray = ["Aman", "Ram" , "Mohan" , "Sohan" , "Dholu"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
let i = 1
while (i<4) {
    console.log(`Value of INdex is : ${i}`);
    i++
}
console.log(`Value of i : ${i}`)
while (i < myArray.length) {
    const element = myArray[i];
    console.log(`contestante nmae is : ${element}`)
    i++
}

let num = 0
do {
    const element = myArray[num];
    console.log(`Are particepent is ${element}`)
    num++
} while (num < myArray.length);