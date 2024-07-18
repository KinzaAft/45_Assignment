// Define an array of guests
var guests = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];
// Function to generate dinner invitations
function generateInvitation(guest) {
    return "Dear ".concat(guest, ",\n\nI would like to invite you to a dinner party at my place. It would be an honor to have your company and engage in stimulating conversations.\n\nPlease let me know if you can make it!\n\nBest regards,\n[kinza Aftab]");
}
// Loop through the array and print invitations
guests.forEach(function (guest) {
    var invitation = generateInvitation(guest);
    console.log(invitation);
});
