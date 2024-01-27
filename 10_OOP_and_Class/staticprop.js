class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);

    }
    // Using static stop the function to run
    static createId() {
        return `123`
    }
}

const rahul = new User('rahul')

// console.log(rahul.createId()); // it wil produce an error as static as be put in createiId

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email

    }
}

const iphone = new Teacher('iphone', 'i@phone.com')

// console.log(iphone);
console.log(iphone.createId())