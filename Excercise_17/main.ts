//Excercise 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


// Define an array of original guests
let guests: string[] = ["Nikola Tesla", "Ada Lovelace", "Leonardo da Vinci", "Marie Curie", "Isaac Newton", "Albert Einstein", "Galileo Galilei"];

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

// Inform about the limited space
console.log("\nUnfortunately, the new dinner table won't arrive in time, so I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); // Remove the last guest from the list
    console.log(`\nSorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Print invitations for the remaining two guests
console.log("\nInvitations for the two remaining guests:");
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log("\nAfter removing the last two guests, the list is now empty:", guests);
``
