const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

// for in loop

for (const key in myObj) {
    console.log(`${key} shortcut of ${myObj[key]}`);
    
}