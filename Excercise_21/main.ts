//Excercise 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define an array of country objects
const countries = [
    {
        name: "United States",
        capital: "Washington, D.C.",
        population: 331449281,
        language: "English",
        currency: "United States Dollar (USD)"
    },
    {
        name: "France",
        capital: "Paris",
        population: 65273511,
        language: "French",
        currency: "Euro (EUR)"
    },
    {
        name: "Japan",
        capital: "Tokyo",
        population: 126050000,
        language: "Japanese",
        currency: "Japanese Yen (JPY)"
    },
    {
        name: "Brazil",
        capital: "Brasília",
        population: 213993437,
        language: "Portuguese",
        currency: "Brazilian Real (BRL)"
    }
];

// Print information about each country
console.log("Information about each country:");
countries.forEach(country => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Language: ${country.language}`);
    console.log(`Currency: ${country.currency}`);
    console.log("-----------------------");
});
