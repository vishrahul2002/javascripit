// Creating our own function

let username = 'rahulvish    ';
// console.log(username.length); // before trim
// here in order to remove the background we have to use trim function which would look like 
// console.log(username.trim().length);

// creating a function of turelength

String.prototype.truelength = function() {
    // console.log(this); // here it is show the reference of the value it is taking from 
    console.log(`The true length is ${this.trim().length}`)
}

// console.log(username) 
// username.truelength() // here it is taking a reference of username value using this keyword

'rahul  '.truelength()
'heyrahul'.truelength()