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