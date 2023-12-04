// for loop
// let array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        
//     }
// }

// printing table from 1 to 10
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i} X ${j} = ${i * j}`);
        
    }
}


// looping throw array
// const myArray = ['flash', 'Superman', 'Batman'];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }


for (let index = 1; index < 10; index++) {
    const element = index;
    if (index == 3) {
        // break
        continue // here it will skip the 3 and continue further
    }
    console.log(element);
}