// singletion
// mean that only one instance of a class can be created
// Object.create

//Object literal

const sym = Symbol('key1');

const objNames = {
    student : 'Pranjal',
    'full-name' : 'Pranjal Kumar',
    [sym] : 'mykey1value',
    class : 'B-tech',
    roll_no : 245465484,
    subject: 'javascript',
    email: 'pranjalkumar@google.com',
    mobile: 1234567890,
    attendence: false,
    admisionDuraion: [2024,2028]
}


console.log(objNames.roll_no);
//OR
console.log(objNames['roll_no']);

// console.log(objNames.full-name);//error

console.log(objNames['full-name']);//no error

console.log(objNames[sym]);

//Object Frezzing : element of object cannot be modified

// Object.freeze(objNames);

objNames.student = 'Rahul'; // will not change
console.log("After freezing:", objNames); // Pranjal

objNames.greetings = function(){
    console.log("Hello everyone");
}
objNames.greetings();

objNames.greetings = function(){
    console.log("Hello everyone", objNames.student);
}
objNames.greetings();