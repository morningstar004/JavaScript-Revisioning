//as a class
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    get username(){
        return `${this._username.toUpperCase()}`
    }
    set username(value){
        this._username = value
    }

    get password(){
        return `abc${this._password}`
    }
    set password(value){
        this._password = value
    }
}

const user1 = new User('pranjal', 'pranjalkumar.google.com', 123135)
console.log(user1.username);
console.log(user1.password);
console.log(user1.email);

//as a function 
function owner(username , password){
    this._username = username;
    this._password = password;

    Object.defineProperty(this, 'username' ,{
        get : function(){
            return this._username.toUpperCase()
        },
        set : function(value){
            this._username = value
        }
    })

    Object.defineProperty(this, 'password' ,{
        get : function(){
            return `SDCN6546${this._password}`
        },
        set : function(value){
            this._password = value
        }
    })
}

const Mango = new owner ('pranjal',654131)
console.log('_________')
console.log(Mango.username);
console.log(Mango.password);


//as an object 

const NewUser = {
    _email : 'pranjal@gmail.com',
    _password : 2135,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const Jalabi = Object.create(NewUser)
console.log('___________');
console.log(Jalabi.email)