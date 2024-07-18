// Excercise 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makesandwich (item: string[]) {
     console.log('\nMaking you sandwich with:');
     item.forEach(Element => console.log("-" + Element));

     console.log('Enjoy your sandwich !\n');
}

makesandwich(['Ham','Cheese','Lecttuce']);
makesandwich(['Turkey','Bacon']);
makesandwich(['Peanut Butter','Jelly']);