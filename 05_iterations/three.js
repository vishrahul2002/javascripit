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

// removing the whitespace from the string

// let greetings = "Hello World!";
// let resultString = "";

// for (const char of greetings) {
//     if (char !== " ") {
//         resultString += char;
//     }
// }

// console.log(resultString);



// breaking the loop if the whitespace is detected

let greetings = "Hello World!";
let resultString = "";

for (const char of greetings) {
    if (char === " ") {
        break
    }
    resultString += char
}

// console.log(resultString);


// Maps

const map = new Map();

map.set('IN', 'India')
map.set('CN', 'China')
map.set('USA', 'United State Of America')

// looping throw map
// for (const [key, value] of map) {
//     console.log(key, ":", value);
// }

//looping throw objects
const myObj = {
    "game1": "NFS",
    "game2": "GTA",
    "game3": "COD"
}

// here it will throw an erro as myObj is not iterable
for (const [key, value] of myObj) {
    // console.log(`${key} : ${value}`)
}