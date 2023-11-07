// In an object method, this refers to the object.

// Alone, this refers to the global object.

// In a function, this refers to the global object.

// In a function, in strict mode, this is undefined.

// In an event, this refers to the element that received the event.

// Methods like call(), apply(), and bind() can refer this to any object.

// const user = {
//     username: "rahul",
//     price: 999,

//     greetingMessage: function() {
//         console.log(`${this.username} , Welcome to website`);
//         console.log(this);
//     }
// }

// user.greetingMessage();
// user.username = "tiyo"
// user.greetingMessage()
// console.log(this); // it will give an empty object


// this keyword in function 

function one () {
    let username = "rahul"
    console.log(this.username); // it cannot be used in function the way we use this keyword in object
}

// one()

// const code = function () {
//     let username = "rahul"
//     console.log(this.username);
//     console.log(this);
// }


// arrow function 
const code = () => {
    let username = "rahul"
    // console.log(this.username);
    console.log(this); // it will reutrn the empty object
}

// code()

// Basic arrow function
const addTwonum = (num1, num2) => {
    return num1 + num2;
}

// console.log(addTwonum(10,20));

// Implicit return :- where don't write the return keyword for returning the value
// here if the function is only of one line then there is no need to write return statement in the function 

// const addnum = (num1, num2) => num1 + num2

// another way of writing is 
// const addnum = (num1, num2) => (num1 + num2)

// console.log(addnum(10,100))


// if using with object then we need to add () and then write inside the ()

const addnum = (num1, num2) => ({username: "rahul"})

console.log(addnum());


// Explicit :- we need to write the return keyword explicitly