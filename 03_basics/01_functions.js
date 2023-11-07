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

// console.log(test());


// rest operator
// if we don't know how many parameter will be present in the function then we can use rest operator
// here ... is the rest operator and it is also used for sperad operator

// eg: 1
function calculateCartPrice (...cart) {
    return cart;
}

// console.log(calculateCartPrice(100,500,1000));

// eg: 2
function calculateCartPrice1 (item1, item2, ...item) {
    return item // here if the val is return then only all the value of the val will be return but it will not reutrn the value of item1 & item2 cuz.
}

// console.log(calculateCartPrice1(100,200,300,400));


// function with object
const user = {
    username: "Rahul",
    price: 500
}

// Because we don't know from where the object will be comming whethere it will be coming form api or database so we take parameter name anyObject
function handleObject(anyObject) {

    console.log(`UserName is ${anyObject.username} and the price is ${anyObject.price}`);
}
// here we need to pass the actual name of the object then only it can fetch the data of that particular object
// handleObject(user);

// we can directly access using object
handleObject({
    username: "tiyo",
    price: 399
})