function makesandwich(item) {
    console.log('\nMaking you sandwich with:');
    item.forEach(function (Element) { return console.log("-" + Element); });
    console.log('Enjoy your sandwich !\n');
}
makesandwich(['Ham', 'Cheese', 'Lecttuce']);
makesandwich(['Turkey', 'Bacon']);
makesandwich(['Peanut Butter', 'Jelly']);
