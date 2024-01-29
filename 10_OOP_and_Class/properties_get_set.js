// using get and set method with function

function User(email, password) {
    this._email = email
    this._password = password

    // Using the Object to set get and set method
    Object.defineProperty(this, 'email', {
        get: function(){
            return `Email : ${this._email}`
        }, 
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this._password.toUpperCase()}`
        }, 
        set: function(value){
            this._password = value
        },
    })
}

const rahul = new User('vishrahul@.com', 'abc')
console.log(rahul.email);
console.log(rahul.password);
