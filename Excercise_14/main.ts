//Excercise 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, 
//inviting them to dinner.

// Define an array of guests
const guests: string[] = ["Ada Lovelace", "Leonardo da Vinci", "Marie Curie"];

// Function to generate dinner invitations
function generateInvitation(guest: string): 
string {
    return `Dear ${guest},\n\nI would like to invite you to a dinner party at my place. 
    It would be an honor to have your company and engage in stimulating conversations.
    \n\nPlease let me know if you can make it!\n\nBest regards,\n[kinza Aftab]`;
}

// Loop through the array and print invitations
guests.forEach(guest => {
    const invitation = generateInvitation(guest);
    console.log(invitation);
});