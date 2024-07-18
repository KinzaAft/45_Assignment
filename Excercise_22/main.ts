//Excercise 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: accessing an out-of-bounds index
const invalidIndexValue = numbers[10]; // This will produce an index error (undefined)

console.log(`Value at index 10: ${invalidIndexValue}`);

// 2nd
const numbers: number[] = [1, 2, 3, 4, 5];

// Corrected: Accessing a valid index
const validIndexValue = numbers[2]; // Accessing the third element

console.log(`Value at index 2: ${validIndexValue}`);


