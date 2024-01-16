// Making Object literal
const user = {
    username: "rahul",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database")
        console.log(this.username);
        console.log(this); //
    }
}

// console.log(user["signedIn"])
// console.log(user.username)
// console.log(user.getUserDetails());

// Constructor function
// const promise = new Promise()
// const date = new Date()
// here the new and the Promise is the constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}


const userOne = new User('rahul', 10, 234)
const userTwo = new User('LearnJS', 4, 1234)
// console.log(userOne);
console.log(userTwo.constructor); 
// there is also an another function which is called `instanceOf` learn more on google