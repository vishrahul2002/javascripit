// for each loop

const coding = ['java', 'python', 'c++', 'c#', 'javascript'];

// coding.forEach( function (val) {
//     console.log(val);
// })

// using arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// })

// using another function 

const printMe = (item) => {
    console.log(item);
}

coding.forEach(printMe) // here we just have to give the reference of the fucntion 