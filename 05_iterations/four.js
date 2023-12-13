const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

// for in loop

for (const key in myObj) {
    // console.log(`${key} shortcut of ${myObj[key]}`);
    
}

const arry = [1,2,3,4];
for (const key in arry) {
    console.log(key, ":", arry[key]);
}