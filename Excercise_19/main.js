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
// Inform about the number of people invited to dinner
console.log("\nYou are inviting ".concat(guests.length, " people to dinner."));
