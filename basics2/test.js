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