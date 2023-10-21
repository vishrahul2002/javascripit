// Singleton

// literal is single vairable or const used to create an object in a single variable.
// eg : 

// Creating a Symbol 

const mySum = Symbol("key1");

        let JsUser = {
            name: "Rahul",
            "full name" : "Rahul Vishwakarma",
            // using a symbol
            [mySum] : "myKey1",
            age: 5,
            location: "Mumbai",
            email: "rahul@gmail.com",
            isLoggedIn: false,
            lastLoggedinDate : ["Monday", "Satruday"]
        }

// accessing the object 

// console.log(JsUser.email); // one way to access the object
// console.log(JsUser["email"]); // bestway to acces the object

// console.log(JsUser["full name"]); // to access the string used as a key in the object


// using a Symbol in an object and accesing them 
console.log(JsUser[mySum]);
console.log(typeof JsUser[mySum]);