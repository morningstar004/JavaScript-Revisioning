function setUsername(username){
    this.username = username;
    console.log(`called`);
    
}

function makeUserId(username ,email ,password){
    setUsername.call(this, username)

    this.email = email;
    this.password = password;
}

const user = new makeUserId('pranjal' ,'pranjalkumar.google.com' ,'12ka4')

console.log(user);
