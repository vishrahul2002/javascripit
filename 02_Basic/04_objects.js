// const tinderUser = new Object(); // Singleton Object

const tinderUser = {} // Non-Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sahil";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "some@mail.com",
    fullName: {
        userFullName: {
            firstName: "Pawan",
            lastName: "Yadav",
        }
    }
}

// accessing the nested object
// console.log(regularUser.fullName.userFullName.firstName); // using `.` to access nested object
// 
// optional chaining
// console.log(regularUser.fullName?.userFullName.firstName); // will learn in further concepts.

// how to merge or combine objects

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "e"};

// merging
const obj4 = {obj1, obj2, obj3};
console.log(obj4); // it will return the objects inside the object 
// using an object method to make a copy of an array into another array

const obj5 = Object.assign({}, obj1, obj2, obj3) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// console.log(obj5);

// experiment

const egobj = Object.assign(obj1, obj2, obj3) // here the obj1 will be the target and all the other object will be source so either we can use egobj or obj1 for reference of copy
// console.log(egobj);
console.log(obj1);
console.log(egobj === obj1);


// Sperate Operator
// best and easy way to add objects

const combineobj = {...obj1, ...obj2};
console.log(combineobj);