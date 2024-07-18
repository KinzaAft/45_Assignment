//Excercise 3
var personName = "Kinza Aftab";
//for lower case
console.log(personName.toLowerCase());
//for upper case
console.log(personName.toUpperCase());
//for tittle case
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
