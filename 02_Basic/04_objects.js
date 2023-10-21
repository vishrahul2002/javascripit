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
console.log(regularUser.fullName.userFullName.firstName); // using `.` to access nested object
// 
// optional chaining
console.log(regularUser.fullName?.userFullName.firstName); // will learn in further concepts.

// how to merge or combine objects
