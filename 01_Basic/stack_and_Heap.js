// Stack (Primitive)
// where you get copy of the variable
// meaning whatever value is changed will not get changed 

// Heap (Non-Primitive)
// where you get the reference of the variable
// meaning whatever value is changed will be changed in original value

// Stack (Copy Value)
let email1 = "rahul@google.com";
let email2 = email1 // here as it took copy of the email1. 
email2 = "vishrahul@google.com"; // changing the value of the email2 with new string
// console.log(email1); // the value will remain same 
// console.log(email2);  // the value of the email will not get affect as it was the copy of the email1 

// Heap (Reference Value)

let userOne = {
    email: "user@google.com",
    upi: "user@ubl"
}

let userTwo = userOne;
// console.log(userTwo) // here userTwo is taking the reference of the userOne

userTwo.email = "rahul@google.com"; // it will also change the value of the userOne

console.log("UserOne", userOne.email);
console.log("UserTwo", userTwo.email);
// console.log(userTwo.upi);
