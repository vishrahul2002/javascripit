function setUsername(username) {
    // complex DB Calls
    this.username = username;
    console.log("called")
}

function createUsername(username, email, pass) {
    // here we are using call and this to give reference to the setUsername
    setUsername.call(this, username);
    this.email = email,
    this.pass = pass;
}

const rahul = new createUsername('rahul', 'rahul.fb.com', '124');

console.log(rahul);

console.log(rahul.pass)