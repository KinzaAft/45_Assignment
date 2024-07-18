//Excercise 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
// and titlecase.

let personName ="Kinza Aftab";

//for lower case
console.log(personName.toLowerCase());

//for upper case
console.log(personName.toUpperCase());

//for tittle case
console.log( personName.replace(/\b\w/g, (char) => char.toUpperCase()));
