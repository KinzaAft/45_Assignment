//Excercise 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
//  cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Define an array of famous landmarks
const landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Taj Mahal",
    "Statue of Liberty",
    "Machu Picchu",
    "Colosseum",
    "Sydney Opera House",
    "Petra",
    "Christ the Redeemer",
    "Pyramids of Giza"
];

// Print the list of landmarks
console.log("List of famous landmarks:");
landmarks.forEach(landmark => {
    console.log(landmark);
});
