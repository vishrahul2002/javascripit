// Classes are used from ES6

// creating a class
// class User {
//     //NOTE:  when enver we use new key word the constructor will be called automatically 
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     // Method
//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User('rahul', 'rahul.fb.com', '123')

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// behind the scene

// before the class we introduce the code was written this way

function User (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// Because the function is also an Object we can use the prototype with the function 

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const vish = new User('vish', 'vish@google.com', '111')

console.log(vish.changeUsername());
console.log(vish.encryptPassword());

