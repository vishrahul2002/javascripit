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

console.log(user.getUserDetails());