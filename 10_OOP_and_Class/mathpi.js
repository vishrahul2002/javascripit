// It tells you the hidden things of an object

const discripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discripter);
// console.log(Math.PI);


// const mynewObject = Object.create()
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


// here we are using Object.entries because we cannot loop throw object directly using for of loop
for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
    
}

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));