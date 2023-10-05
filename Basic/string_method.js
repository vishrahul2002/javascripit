// declaring the string

const name = "Rahul";
const gitrepo = 20;

// console.log(name + gitrepo);
// another way to join two variable
// console.log(`My name is ${name} and i have ${gitrepo} github repo`)

// another way to create String

const string = new String("Rahul");
// console.log(string[0])
// console.log(string.__proto__); // will retrun the object

// console.log(string.length);
// console.log(string.toUpperCase());
// console.log(string.charAt(2));
// console.log(string.indexOf("h"));

const newString = string.substring(0,4); 
// console.log(newString);

const anotherString = string.slice(-4,3);
// console.log(anotherString);

let firstName = "    Rahul    "

const fname = firstName.trim() // trim only remove whitespaces

// console.log(fname);

// Replace 
const url = "https://rahul%20vish@google.com";
url.replace("%20", "-")
// console.log(url.replace("%20", "-"));
// console.log(url);

// console.log(url.includes("vish")); // true
// console.log(url.includes("vish%20")); // false

const fullname = "Rahul-M-Vish";
// console.log(fullname.split("-")); // will convert string into array and return the value