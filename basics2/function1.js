//function can let you reuse code multiple times in instances by calling the function name
function sayMyName(){
    console.log("H")
    console.log("u")
    console.log("g")
    console.log("e")
    console.log("n")
    console.log("b")
    console.log("e")
    console.log("r")
    console.log("g!")
    console.log("YOUR GOD DAMN RIGHT")
}

sayMyName();

//function with parameters
function addTwoNumbers(num1, num2){//parameters
    return num1 + num2;
} 

const ans = addTwoNumbers(5, 7);//arguments 5 and 7
console.log(ans);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

function namestay(name){
    console.log(`${name}, namestay!`)
}

namestay("Hugenberg")

function logInMessage(User){
    if(!User){
        console.log("Please enater the Username!")
        return
    }
    console.log(`${User} has logged in!`)
    return
}

function anotherLogInMsg(User){
    if(!User){
        return "Please enter the Username!"
    }
    return `${User} has logged in!`
}

logInMessage('pranjal')
console.log(anotherLogInMsg())


function multiNumEnteries(...num1){
    return num1;
}

console.log(multiNumEnteries(1,2,3,4,5,6,7,8,9,10))

function calucateCartPrice(product1,product2 ,...prices){
    return prices;
}

console.log(calucateCartPrice("Laptop", "Mouse", 2000, 3000, 4000, 5000)
)

const user = {
    name: "pranjal",
    age: 20,
}

function handleObject(anyobject){
    console.log(`my name is ${anyobject.name} and my age is ${anyobject.age}`)
}

handleObject(user)
//Or
handleObject({
    name:"Ram",
    age:24,
})


//array handling in function

const slaves = ["jorden", "karl", "dev", "anthony", "michael"]

function handleArray(anyarray){
    console.log(`I have ${anyarray.length} slaves.`)
    console.log(`my third slave is ${anyarray[2]}`)
}

handleArray(slaves)