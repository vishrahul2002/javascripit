let myObj = {
    ironman: 'tec',
    spiderman: 'splide',
    hulk: 'strong'
}

// creating an prototye for an object
Object.prototype.sayRahul = function () {
    console.log('Rahul is everywhere');
}

let myArr = ['thor', 'spiderman', 'ironman']

Array.prototype.Rahul = function () {
    console.log("this is rahul here");
}

// myObj.sayRahul()
myObj.Rahul() // here it will throw an error as rahul function has been injected in array not in object
// trying to access in the array
// myArr.sayRahul()
// myArr.Rahul()