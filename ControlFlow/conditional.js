//compertion operators

// >, <, <=, >=, ==, ===, !=, !==
// they are use will making conditional statements in js

//conditional statements
let temperature = 26

if(temperature<=25){//the code inside the prantesis() is the condition for running the code written bellow inside the curlly brackets{}.
    //if the condition is false then the code will not work.and pass to the next scope of code.
    console.log("cold wether")
}else{
    console.log("its ether hot or Nice")
}

const balance = 1000

if(balance > 500 ) console.log("Yes"); //Implisite scope 


//condition ladder

if(balance > 500){
    console.log("That's enough for the week")
}else if(balance < 500){
    console.log("Go earn some.")
}else if(balance == 1000){
    console.log("thats perfect")
}else{
    console.log("get a job")
}

//switch

let month = Math.ceil((Math.random()*10)+1)
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("Jun")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("Aug")
        break;
    case 9:
        console.log("Sept")
        break;
    case 10:
        console.log("Oct")
        break;
    case 11:
        console.log("Nov")
        break;
    case 12:
        console.log("Dec")
        break;

    default:
        console.log("NOT a MONTH")
        break;
}

//Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN; are falsy values

//Important Truthy Values
// "0", "false", " ", [], {}, function(){}