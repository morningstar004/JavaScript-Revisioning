const bubbleUser = new Object();
//Or
// const bubbleUser = {}; // object literal

//element Assigning

bubbleUser.email = "pranjalkumar.google.com";
bubbleUser.name = "Pranjal Kumar";
bubbleUser.isLoggedIn = false;
bubbleUser.age = 18;

console.log(bubbleUser);

const regularUser = {
    name: {
        fristname: "Pranjal",
        lastname: "Kumar"
    },
    location: {
        country: "India",
        state: {1: "Madhya Pradesh", 2: "Uttar Pradesh", 3: "Bihar"},
        district : "Rewa",
        village : "Gorakhnath"
    }
}

console.log(regularUser.name.fristname)
console.log(regularUser.location.state[2]);


//combing objects

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}
const obj3 = {
    key5: "value5",
    key6: "value6"
}

const combineObj = Object.assign({}, obj1, obj2, obj3)

//Or

const combineObj2 = {...obj1, ...obj2, ...obj3};

console.log(combineObj);
console.log(combineObj2);

//Object methods

const userMethods = {
    about: function() {
        return `${this.name} is ${this.age} years old.`;    

    },
    is18: function() {
        return this.age >= 18;
    }
};

const user1 = {
    name: "Pranjal Kumar",
    age: 19
};

const user2 = {
    name: "John Doe",
    age: 16
};

Object.setPrototypeOf(user1, userMethods);
Object.setPrototypeOf(user2, userMethods);

console.log(user1.about());
console.log(user1.is18());

//

const cricketPlayer = {
    batsman :
    {
        name: "Virat Kohli",
        age: 35,
        runs: 12040,
    },
    bowler :
    {
        name: "Jasprit Bumrah",
        age: 30,
        wickets: 250,
    },   
    allRounder :    {
        name: "Hardik Pandya",
        age: 28,    
        runs: 3000,
        wickets: 150,
    }    
    
}

// cricketPlayer.allRounder

const {allRoundr:ALine} = cricketPlayer;

console.log(ALine);