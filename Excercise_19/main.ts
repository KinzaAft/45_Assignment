//Excercise 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinne

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

// Inform about the number of people invited to dinner
console.log(`\nYou are inviting ${guests.length} people to dinner.`);
