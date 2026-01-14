function multiplyBy4(num){
    return num*4
}//checking if functions are actully objects

console.log(multiplyBy4(4))//16
console.log(multiplyBy4.power)//2
console.log(multiplyBy4.prototype)//{}

//function is function but it can also be treated as object in javaScript.

function user(userName, score){
    this.userName = userName;
    this.score = score;

}//we have created a constroctor function with to arguments

user.prototype.increment = function(){
    this.score++
}
//here we are treating function as object and giving it a increment prototype ,which will increase the score by +1.
user.prototype.printMe = function(){
    console.log(`The score of ${this.userName} is ${this.score}`); 
}
//here we are assing it with a another method/prototype printMe that's function is to log :The score of ${this.userName} is ${this.score}
//this is been used for the context of the arrgument passed at that time.
const user1 = new user('Bat',220)
user1.increment()
user1.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/