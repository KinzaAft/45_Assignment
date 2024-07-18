//Excercise 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
//new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Define an array of original guests
let guests: string[] = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];

// Function to generate dinner invitations
function generateInvitation(guest: string): string {
    return `Dear ${guest},\n\nI would like to invite you to a dinner party at my place. It would be an honor to have your company and engage in stimulating conversations.\n\nPlease let me know if you can make it!\n\nBest regards,\n[kinza]`;
}

// Loop through the array and print invitations
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});

// Simulate a guest unable to make it
const unableToMakeIt = guests.shift(); // Remove the first guest
console.log(`Unfortunately, ${unableToMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const newGuest = "Albert Einstein";
guests.push(newGuest);

// Print a second set of invitation messages
console.log("\nSecond set of invitations:");
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});
