const userEmail = []

if (userEmail) {
    console.log("Got Your Email");
} else {
    console.log("Didn't Got Your Email");
}

// falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// '0', 'false', " ", [], {}, function(){}


// checking if the array is empty
if (userEmail.length === 0) {
    console.log('array is empty');
}

// chicking if the object is empty

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log('object is empty');
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTea = 100;

iceTea >= 80 ? console.log("The price is more than 80") : console.log("The price is below than 80")