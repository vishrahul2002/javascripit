class User {
    constructor(email, pass) {
        this.email = email,
        this.pass = pass
    }

    get email() {
        return `abc${this._email}abc is your email`
    }

    set email(value) {
        this._email = value // we don't return the value in the setter
    }

    // getting the propter using getter
    get pass() {
        return `${this._pass}Rahul` // modifying the value using getter method so the user can see the encrypted value
    }

    // setting the password using the user input with setter
    set pass(value) {
        this._pass = value // here the value is actually getting pass by the user 
    }
}

const rahul = new User('r@rahul.ai', 'abc')

console.log(rahul.pass);
console.log(rahul.email);