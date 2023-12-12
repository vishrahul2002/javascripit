// for of loop

// ["", "", ""]
// [{}, {}, {}]

let numbers = [1,2,3,4,5];
for (const num of numbers) {
    // console.log(`Value of numbers are ${num}`);   
}

// on string
// let greetings = "Hello World!";
// for (const greet of greetings) {
//    // console.log(`Value of each char is ${greet}`);
// }

let greetings = "Hello World!";
let resultString = "";

for (const char of greetings) {
    if (char !== " ") {
        resultString += char
    }
}

console.log(resultString);


