// fetch('https://amazon.com').then().catch().finally()
//.then() gives responce.
//.catch() gives error.
//.finally() gives everything
const promiseOne = new Promise(function(resolve,reject){
    //Async task are writen as code here
    setTimeout(function(){
        console.log('async task has been completed')
        resolve()//used to give a responce by the system that the program is been running fine.
    },2000)
})

promiseOne.then(function(){
    console.log('promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    } ,2000)
}).then(function(){
    console.log('2nd task is been resolved')
})//here I wrote the whole code in one go without storing it in any variable frist.

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'pranjal kumar',email: 'pranjalkumar000007@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);//after resolving a perticular task in JS you can set it to give a perticular type of result in are case its a object
})

const promiseFour = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({userName:'Marten Lee',userPassword:'Silver Fang'})
    }else{
        reject({Error:'Spider-man'})
    }
})

promiseFour.then(function(user){
    console.log(user)
    return user.userName
}).then(function(userName){
    console.log(userName)
}).catch(function(Error){
    console.log(Error)
}).finally(() => {
    console.log('promise is ether resolve or rejected.')
})


const promiseFive = new Promise(function(resolve, reject){
    let error = false
    if(!error){
        resolve({userName:'JavaScript',userPassword:'TypeScript'})
    }else{
        reject({Error:'React'})
    }
})

async function consumePromiseFive() {
    try{const response = await promiseFive
    console.log(response)}catch(Error){
        console.log(Error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/moningstar004')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.