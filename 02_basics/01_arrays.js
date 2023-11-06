// array

const myArr = [0, 1, 2, 3, 4, 5];

const Heros = ["Ironman", "Loki", "Thor"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[1])

// +++++++++ Array Methods +++++++++
// myArr.push(6); // Add's element at the last in Array.
// myArr.push(7);
// myArr.pop() // remove the last element from Array
// myArr.unshift(0); // add element at the start of the Array
// myArr.shift() // remove the 1st element form the Array


// console.log(myArr.includes(0)); // will return the in ture or false
// console.log(myArr.indexOf(10)); // if the element is not present it will show -1

// const newArr = myArr.join() // it will convert the element in string value


// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // it will create a copy of an array or return a portion of an array
console.log("B", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) // splice method is used to add or remove the element of an existing array
console.log("C", myArr);
console.log(myn2);
