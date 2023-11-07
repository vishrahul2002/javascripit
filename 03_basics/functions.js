// learning the funciton 
// creating a function 

// function sayMyName () {
//     console.log("Hello I am Rahul");
// }

// sayMyName()

// function addTwoNumber (number1, number2) { // inside () is the parameter
//     console.log(number1 + number2);
// }
// addTwoNumber // it will not display anything it's just the reference of the function 
// addTwoNumber(1,2) // running the function with arugment


function addTwoNumber (number1, number2) {
    // let result = number1 + number2;
    // return result

    return number1 + number2
}

const result = addTwoNumber(10,20);

// console.log("Result :" ,result) 

function loginUserMessage (userName) {
    return `${userName} just logged in`
}

// console.log(loginUserMessage("rahul"));
// giving the default value to the parameter
function test (userName = "testEg") {
    if (!userName) {
        console.log("Please enter a vaild username");
        return
    }
    return `${userName} just logged in`
}

console.log(test());