// Define an array of original guests
var guests = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];
// Function to generate dinner invitations
function generateInvitation(guest) {
    return "Dear ".concat(guest, ",\n\nI would like to invite you to a dinner party at my place. It would be an honor to have your company and engage in stimulating conversations.\n\nPlease let me know if you can make it!\n\nBest regards,\n[kinza]");
}
// Loop through the array and print invitations
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
// Simulate a guest unable to make it
var unableToMakeIt = guests.shift(); // Remove the first guest
console.log("Unfortunately, ".concat(unableToMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
var newGuest = "Albert Einstein";
guests.push(newGuest);
// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
