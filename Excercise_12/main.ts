//Excercise 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, but each message should be personalized 
//with the person’s name.

// Define an array of names
const names: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to generate personalized messages
function generateMessage(name: string): string {
    return `Hello, ${name}! We hope you're having a great day.`;
}

// Loop through the array and print personalized messages
names.forEach(name => {
    const message = generateMessage(name);
    console.log(message);
});