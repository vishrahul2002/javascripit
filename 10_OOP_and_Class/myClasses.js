// Classes are used from ES6

// creating a class
class User {
    //NOTE:  when enver we use new key word the constructor will be called automatically 
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    // Method
    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('rahul', 'rahul.fb.com', '123')

console.log(user1.encryptPassword());
console.log(user1.changeUsername());