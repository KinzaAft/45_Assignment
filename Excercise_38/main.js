// function describe_city (city:string, country : string="pakisan"); void{
//     console.log( `${city}is in ${country}`);
// }
function descrie_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
descrie_city('karachi');
descrie_city('france', 'europe');
descrie_city('lahore', 'pakistan');
//2
// function describe_city(city: string, country: string = "USA"): void {
//     console.log(`${city} is in ${country}.`);
// }
// // Calling the function for three different cities
// describe_city("Karachi", "Pakistan");
// describe_city("New York"); // Default country is USA
// describe_city("Paris", "France");
