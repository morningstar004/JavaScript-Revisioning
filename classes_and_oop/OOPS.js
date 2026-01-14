class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ,${this.name} is you age ${this.age}.`);
    }
}

let person1 = new Person('pranjal',20)
let person2 = new Person('Ram',24)

person1.greet()
person2.greet()
console.log(person1.constructor)

//OR


function Human(name, age, home){
    this.name = name;
    this.age = age;
    this.home = home;

    this.address = function(){
        console.log(`My name is ${this.name} ,I am ${this.age} year old and I live at ${this.home}`)
    }
    return this
}

    


const human1 = new Human('rahul',20,'purnia')
human1.address()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);