//Excercise 29
//
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits: string[] = ['banana', 'apple', 'mango'];

// Check if 'apple' is in the array
if (favorite_fruits.includes("apple")) {
    console.log("apple");
}

// Check if 'banana' is in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

// Check if 'apple' is in the array
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

// Check if 'orange' is in the array
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}

// Check if 'mango' is in the array
if (favorite_fruits.includes('mango')) {
    console.log("You really like mangoes!");
}

// Check if 'strawberry' is in the array
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}
