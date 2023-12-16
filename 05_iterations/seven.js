// Maps

const myNums = [1,2,3,4,5,6,7,8,9,10];

// using map function

// const newNums = myNums.map( (num) => {return num + 10 })



// using for each loop

// myNums.forEach ( (num, index, arr) => {
//     return arr[index] = num + 10
// })

// console.log(myNums);

// chaining in js

let num = [1,2,3,4,5,6,7,8,9,10];

let newNum = num // using mulitple operation's is chaining
.map( (num) => num * 10)
.map( (num) => num + 5) // here it will take the above map function result and perform the operation
.filter( (num) => num >= 50) // here it will take the above result and perform the task

console.log(newNum);