// for loop
// let array = [1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        
    }
}