const score = 100;

// console.log(score);

// Specifying the type of vairable

const balance = new Number(100);
// console.log(balance);

// using number method's 
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // after decimal (mostly used in ecommerce site's)

const anotherNumber = 123.9039

// console.log(anotherNumber.toPrecision(3));

const hundreds = 100000;

// console.log(hundreds.toLocaleString("en-IN")); // it will add comma in Number's

// +++++++++++++++++++++++++++++++++++++      Maths    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // It will give number between 0 and 1
// console.log((Math.random()*10) + 1); // In range of 1 to 10 with decimal value
// console.log(Math.floor(Math.random()*10) + 1); // It will give number between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)