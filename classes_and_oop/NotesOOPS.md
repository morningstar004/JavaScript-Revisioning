# is JavaScript a class

## Yes, JavaScript does have classes. This feature was introduced with the ECMAScript 2015 specification (often referred to as ES6). However, it's important to note that JavaScript primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms. In other words, it provides a more familer syntax for developers coming from class-based languages such as Java or C++, but under hood it works somewhat differently.

``` javaScript
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ,${this.name} is you age ${this.age}.`);
    }
}

let person1 = new Person('pranjal',20)

person1.greet()
```
#

# OOPS, what is object ? 
## All the collection of properties and methods are actully objects.
Object
 collection of properties and methods
- toLowerCase
- typeof
- toUpperCase
- charAt
- indexOf
- replace


## why use OOP

## parts of OOP
Object literal 
- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism