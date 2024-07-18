//Excercise 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
//stores several examples. Use your list to print a series of statements about these items, such as “I would like to
// own a Honda motorcycle.”

// Define an array of favorite modes of transportation
const favoriteTransportations: string[] = ["bicycle", "car", "train", "motorcycle", "scooter"];

// Function to generate statements
function generateStatement(transportation: string): string {
    return `I would like to own a ${transportation}.`;
}

// Loop through the array and print statements
favoriteTransportations.forEach(transportation => {
    const statement = generateStatement(transportation);
    console.log(statement);
});