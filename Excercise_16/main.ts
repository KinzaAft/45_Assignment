//Excercise 16
// //More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Define an array of original guests
let guests: string[] = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];

// Function to generate dinner invitations
function generateInvitation(guest: string): string {
    return `Dear ${guest},\n\nI would like to invite you to a dinner party at my place. It would be an honor to have your company and engage in stimulating conversations.\n\nPlease let me know if you can make it!\n\nBest regards,\n[Your Name]`;
}

// Loop through the array and print invitations
console.log("First set of invitations:");
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});

// Simulate a guest unable to make it
const unableToMakeIt = guests.shift(); // Remove the first guest
console.log(`\nUnfortunately, ${unableToMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new guest
const newGuest = "Albert Einstein";
guests.push(newGuest); // Add new guest to the end of the array

// Add one new guest to the beginning of the array
const newGuestAtBeginning = "Nikola Tesla";
guests.unshift(newGuestAtBeginning);

// Add one new guest to the middle of the array
const newGuestInMiddle = "Isaac Newton";
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, newGuestInMiddle);

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table. There's more space available now.");

// Add one more new guest to the end of the array
const newGuestAtEnd = "Galileo Galilei";
guests.push(newGuestAtEnd);

console.log("\nNew set of invitations with additional guests:");
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});
