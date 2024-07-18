// Define an array of original guests
var guests = ["Nikola Tesla", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Albert Einstein", "Galileo Galilei"];
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
// Inform about the limited space
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest from the list
    console.log("\nSorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
// Print invitations for the remaining two guests
console.log("\nInvitations for the two remaining guests:");
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list
console.log("\nAfter removing the last two guests, the list is now empty:", guests);
"";
