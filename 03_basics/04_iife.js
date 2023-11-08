// Immediately Invoked Function Expression

// named iffe
(function chai() {
    console.log("DB Connected");
})(); // it is important to use ';' in order to run another iffe after the other

// nameless iffe with parameters and arug
( (name) => {
    console.log(`DB Connected TWO, ${name}`);
})("Rahul")


// function name1(name) {
//     console.log(`Hello ${name}`);
// }
// ( () => {
//     console.log("Hello");

// })()
// name1("Tiyo")
// console.log("End of the iffe function");