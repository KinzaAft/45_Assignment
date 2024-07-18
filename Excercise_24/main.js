// Tests for equality and inequality with strings
console.log("Equality and inequality with strings:");
console.log("apple" === "apple"); // True
console.log("apple" !== "orange"); // True
console.log("banana" === "orange"); // False
console.log("banana" !== "banana"); // False
// Tests using the lower case function
console.log("\nTests using lower case function:");
console.log("HELLO".toLowerCase() === "hello"); // True
console.log("WORLD".toLowerCase() === "WORLD"); // False
console.log("TEStIng".toLowerCase() === "testing"); // True
// Numerical tests
console.log("\nNumerical tests:");
console.log(5 === 5); // True
console.log(10 !== 15); // True
console.log(20 > 15); // True
console.log(10 < 5); // False
console.log(10 >= 10); // True
console.log(20 <= 15); // False
// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log((3 > 2) && (5 < 10)); // True
console.log((10 === 5) || (15 !== 20)); // True
console.log((7 < 5) && (10 >= 10)); // False
console.log((3 > 2) || (5 < 2)); // True
// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log([1, 2, 3].includes(2)); // True
console.log(["orange", "banana", "apple"].includes("apple")); // True
console.log([4, 6, 8, 10].includes(7)); // False
// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(![1, 2, 3, 4].includes(5)); // True
console.log(!["apple", "banana", "orange"].includes("pear")); // True
console.log(![2, 4, 6, 8].includes(3)); // True
