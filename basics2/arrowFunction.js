//This 
const user = {
    name: 'Pranjal',
    greet: function(){
        console.log(`${this.name}, welcome to the world of JavaScript!`);
    }
}

user.greet()

user.name = 'John';
user.greet()

// this is used for the current object context 
// this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.
// In this case, 'this.name' refers to the 'name' property of the 'user' object.
//arrow function ke under This nahi hota.


console.log(this)//output: {} empty object. bcoz there is no defined object for now

//this inside a function

function day(){
    //this can't be used in function.
    console.log(this)
}

// day()

const new_day = function newDay(){
    console.log(this)
}

// console.log(new_day)

//converting normal function to arrow function

const newDay = () => {
    console.log(this);
}

console.log(newDay())//undefined

//Arrow function Syntax: () => { }

const addNum = (num1,num2) => {
    return num1+num2
}    

console.log(addNum(3,5))

//Eplicite return ,similar to Lambda function.

const rules = (num1,num2) =>  num1-num2

console.log(rules(6,1))