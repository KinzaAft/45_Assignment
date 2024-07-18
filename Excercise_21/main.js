// Define an array of country objects
var countries = [
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
countries.forEach(function (country) {
    console.log("Name: ".concat(country.name));
    console.log("Capital: ".concat(country.capital));
    console.log("Population: ".concat(country.population));
    console.log("Language: ".concat(country.language));
    console.log("Currency: ".concat(country.currency));
    console.log("-----------------------");
});
