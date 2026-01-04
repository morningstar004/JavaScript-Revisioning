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