const marvel_heros = ["Ironman", "Spiderman", "Thor"];
const dc_heros = ["Superman", "Acquaman","Batman"];

// marvel_heros.push(dc_heros) // it will add dc_heros as an array in marvel_heros

// console.log(marvel_heros); 
// console.log(marvel_heros[3][0]); // accessing the array inside array


const allHeros = marvel_heros.concat(dc_heros) // it combines two or more array and return's a new array without modifiying  any existing array
// console.log(allHeros);


// Using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] // work just as concat, But we can add more than one array at a time
// console.log(all_new_heros);

// Flat operations
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, []]] // nested array
// const new_another_array = another_array.flat(Infinity) // it will remove the deapth of the array inside the array in ("no_of_depth")
// console.log(new_another_array);

// Array method used for data Scraping

console.log(Array.isArray("Rahul")); // it will check wether the following arug are array or not
console.log(Array.from("Rahul")); // it will convert the given arug into array

// Interetsting concept of object
console.log(Array.from({name: "rahul"})); // it will return empty array as it is an object and we need to specify wether we want key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

// converting more than two variable or any object into array

console.log(Array.of(score1, score2, score3));