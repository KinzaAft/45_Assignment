// Define an array of names
var names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Function to generate personalized messages
function generateMessage(name) {
    return "Hello, ".concat(name, "! We hope you're having a great day.");
}
// Loop through the array and print personalized messages
names.forEach(function (name) {
    var message = generateMessage(name);
    console.log(message);
});
