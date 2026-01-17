// lexical scoping 
//its just about the scope variable information sharing with in the function.

    function outer(){
        let username = "hitesh"
        console.log("OUTER", secret);
        function inner(){
            let secret = "my123"
            console.log("inner", username);
        }
        function innerTwo(){
            console.log("innerTwo", username);
            console.log(secret);
        }
        inner()
        innerTwo()

    }
    outer()
    console.log("TOO OUTER", username);


    //Clouser

    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc();