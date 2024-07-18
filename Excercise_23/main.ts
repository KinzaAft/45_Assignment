//Excercise 23
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = 'subaru';

// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

// Test 3
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

// Test 4
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 5
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

// Test 6
console.log("Is car.length > 0? I predict True.");
console.log(car.length > 0);

// Test 7
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));

// Test 8
console.log("Is car.includes('b')? I predict True.");
console.log(car.includes('b'));

// Test 9
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU');

// Test 10
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
