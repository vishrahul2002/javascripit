// It tells you the hidden things of an object

const discripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(discripter);
// console.log(Math.PI);


// const mynewObject = Object.create()
const chai = {
    specialChai : function() {
        console.log("Your speical chai has been made")
    },

    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log('Chai has been made')
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Stoping the user to make the changes in the variable using the Object define Property to make the writable to false

Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: false
})


// here we are using Object.entries because we cannot loop throw object directly using for of loop
for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') // here we are checking if the object is containing the function then we will not log that key pair value
    console.log(`${key} : ${value}`);
}



// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));