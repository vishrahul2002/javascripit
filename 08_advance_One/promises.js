// Creating Promises
const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
     // call Database, cryptography, network
     setTimeout(() => {
        console.log("Async completed");
        resolve() // here we have to use resolve method to connect the resolve and then 
     }, 2000);
})

// Consuming Promise
promiseOne.then(() => {
    console.log('Promise Consumed');
}) 