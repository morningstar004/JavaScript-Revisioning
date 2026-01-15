class User{
    constructor(username ,email ,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
} 

const firstUser = new User('pranjal','pranjalkumar.google.com',145214);

console.log(firstUser.encryptPassword());
console.log(firstUser.changeUsername());

//Inheritance in class

class Users {
    constructor(username) {
        this.username = username
    }

    loginNotification(){
        console.log(`${this.username} loged In`);
        
    }
}

class student extends Users {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addAssignment(){
        console.log(`Assignment is added by ${this.username}`);
        
    }
}

const user1 = new Users('Hitesh')
const user2 = new student('Pranjal', 'pranjalkumar@google.com', '213265')

//user1.addAssignment()//show error bcoz parant can inherite children functions
user1.loginNotification()

user2.addAssignment()
user2.loginNotification()


console.log(user1 instanceof Users);//true
console.log(user1 instanceof student);//false
console.log(user2 instanceof Users);//true
console.log(user2 instanceof student);//true
console.log(student instanceof Users);//false
console.log(Users instanceof student);//false


//static function in class

class IdMaker {
    constructor(username) {
        this.username = username
    }

    sayMyName(){
        return `${this.username.toUpperCase()}`//Normal function can be accesed 
    }

    static IdKey(){
        return `${Math.floor(Math.random()*1000)}`//Static function can not accessed by normal users
    }
}

const NewUser = new IdMaker('PranjalKumar004')

console.log(NewUser.sayMyName());
//console.log(NewUser.IdKey());// NewUser.IdKey is not a function for newUser 
