// Define an array of original guests
var guests = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];
// Function to generate dinner invitations
function generateInvitation(guest) {
    return "Dear ".concat(guest, ",\n\nI would like to invite you to a dinner party at my place. It would be an honor to have your company and engage in stimulating conversations.\n\nPlease let me know if you can make it!\n\nBest regards,\n[Your Name]");
}
// Loop through the array and print invitations
console.log("First set of invitations:");
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
// Simulate a guest unable to make it
var unableToMakeIt = guests.shift(); // Remove the first guest
console.log("\nUnfortunately, ".concat(unableToMakeIt, " can't make it to the dinner."));
// Replace the guest who can't make it with a new guest
var newGuest = "Albert Einstein";
guests.push(newGuest); // Add new guest to the end of the array
// Add one new guest to the beginning of the array
var newGuestAtBeginning = "Nikola Tesla";
guests.unshift(newGuestAtBeginning);
// Add one new guest to the middle of the array
var newGuestInMiddle = "Isaac Newton";
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuestInMiddle);
// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table. There's more space available now.");
// Add one more new guest to the end of the array
var newGuestAtEnd = "Galileo Galilei";
guests.push(newGuestAtEnd);
console.log("\nNew set of invitations with additional guests:");
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
