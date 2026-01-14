// let myName = "pranjal     "
// let mychannel = "chai     "
// myName.trim().length()//convert this in true lenght.
// console.log(myName.trueLength);


//here we are learning how to create a prototype and the use it.

let myHeros = ["thor", "spiderman"]// a array

let heroPower = {
    thor: "hammer",
    spiderman: "web Shooters",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.pranjal = function(){
    console.log(`pranjal is present in all objects`);
}//here we are making a prototype named pranjal and given it a function.this prototype is made for object that means it can be applicable for all the object types such as function,array and string

Array.prototype.heyPranjal = function(){
    console.log(`pranjal says hello`);
}//this is an another prototype that is aplicable for arraies and its types it is not applicable for all the objects.

// heroPower.pranjal()
// myHeros.pranjal()
// myHeros.heyPranjal()
// heroPower.heyPranjal()



// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//using this we can assign the properties of TeachingSupport to TASupport (Inheritance).
}

Teacher.__proto__ = User //You can do that outside the object too.

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}//this is a prototype for string.

anotherUsername.trueLength()
"pranjal   ".trueLength()
"ice   Tea".trueLength()