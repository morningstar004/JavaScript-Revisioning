const names = ["Ram", "Sayam", "Manoj", "Rohan", "Rahul"];

const call = names.forEach( (item) => {
    console.log(`The next particepent is ${item}`);
    //NOTE: forEach does not return anything it is always undefined.
})

console.log(call) //Undefined



const values = [1,2,3,4,5,6,7,8,9];
const refresh = values.filter( (values) => (values > 6))

console.log(refresh) //[ 7, 8, 9]


const newVal = values.filter((values) => {
    // return values < 6
    values < 6
})

console.log(newVal)//this gives a empty array because its in a scope and we have to return it for the answer.

//Pushing values

const smaller = []

values.filter((num) => {
    if(num<6){
        smaller.push(num)
    }
})

console.log(smaller)