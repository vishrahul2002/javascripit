// Creating Promises
const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
     // call Database, cryptography, network
     setTimeout(() => {
        console.log("Async completed");
        resolve() // here we have to use resolve method to connect the resolve and then 
     }, 1000);
})

// Consuming Promise
promiseOne.then(() => {
    console.log('Promise Consumed');
}) 

// Creating a Promise without any variable and using it directly
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async Task 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Async Task 2 Resovled');
})

// 
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({'username': 'rahulvish', 'email': 'vishrahul@eg.com'})
    }, 1000)
})

// whatever parameter i will pass in the resolve it can be accessed by the then function
promiseThree.then(function(user) {
    console.log(user);
})

// 

const promiseFour = new Promise(function(resolve, reject) {
    let error = true
    if(!error) {
        resolve({username: 'rahul', password: '123'})
    } else {
        reject("Error: Something went wrong")
    }
})

// learning about Chaining
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})
// finally will always run if the promise is resolve or rejected
.finally(()=> console.log('Promise either resolve or rejected'))

//
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: 'Javascript', password: 123})
        } else {
            reject('Error: Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// fetching data using fetch() method

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(response)
//         const data = await response.json() // here we have to use the await function because it takes time to convert the data into the json format from string
//         console.log(data);

//     } catch (error) {
//         console.log('E: ', error);
        
//     }
// }

// fetchData()

// Using fetch directly
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error)=> console.log(error))