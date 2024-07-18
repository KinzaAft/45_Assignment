// Define an array of favorite modes of transportation
var favoriteTransportations = ["bicycle", "car", "train", "motorcycle", "scooter"];
// Function to generate statements
function generateStatement(transportation) {
    return "I would like to own a ".concat(transportation, ".");
}
// Loop through the array and print statements
favoriteTransportations.forEach(function (transportation) {
    var statement = generateStatement(transportation);
    console.log(statement);
});
