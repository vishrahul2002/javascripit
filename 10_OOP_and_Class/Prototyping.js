// In javascript everything is the object and it has there own prototye
// 
// even the function  can be also used as an object 

function multiplyBy5 (num) {
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power); // here it is also having the power of 2 as we have assigned
console.log(multiplyBy5.prototype);


function createUser (username, score) {
    this.username = username,
    this.score = score
}

// here we are creating a new prototype by ourself and it can be access by the function
createUser.prototype.increament = function () {
    this.score++
}

// creating an another prototype method
createUser.prototype.price = function () {
    // here we are mentining the socre with the current context using the `this` keyword
    console.log(`Price is ${this.score}`);
}

const userOne = new createUser('Rahul', 1000)
const userTwo = new createUser('rahul', 50)


// console.log(userOne);
// console.log(userTwo);

userOne.price() // 