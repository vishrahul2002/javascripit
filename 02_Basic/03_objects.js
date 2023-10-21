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
// console.log(JsUser["email"]); // bestway to access Symbol in object

// console.log(JsUser["full name"]); // to access the string used as a key in the object


// using a Symbol in an object and accesing them 
// console.log(JsUser[mySum]);
// console.log(typeof JsUser[mySum]);

// Learning to manulipate the object actual value

JsUser.name = "Vish" // the value has been changed to vish

// console.log(JsUser["name"]);


// Freasing the object so that no one can modifiy the value of an actual object

// Object.freeze(JsUser) // from here onward JSUser can't be modifiyed

JsUser.name = "Rahul" // here the value of name will not change in the object
// console.log(JsUser);

// Using a function in object
JsUser.greeting = function () {
    console.log("Hello JSUser");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JSUser, Your name is ${this.name}`); // here [this] is used to access the object elements
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 