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

// const printMe = (item) => {
//     console.log(item);
// }

// coding.forEach(printMe) // here we just have to give the reference of the fucntion 

// using more function of the for Each loop

// coding.forEach( (val, index, arr) => {
//     console.log(index, val, arr);
// })

// object inside the array 

const program = [
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'python',
        languageFileName : 'py'
    }
]

// for looping throw database result

program.forEach( (val) => {
    console.log(val.languageFileName);
})