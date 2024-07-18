//Excercise 43

// function make_great2(magicians: string[]): string[]{
//     const greatMagicians: string[] = [];
//     for (let i = 0; i< magicians.length; i++){
//         greatMagicians.push(magicians[i] + ' the Great');
//     }
//     return greatMagicians;
// }
// const magicians: string[] = ["usama","haseeb","wajahat"];
// const greatMagicians: string[] = make_great2(magicians);
// showMagicians(magicians);
// showMagicians(greatMagicians);


//2
let magicians: string[] = ['Harry potter','Hermione Granger','Ron Wesley','Albus Dumblendore'];

function copyArray(arr: string[]){
       return [...arr]
}

function make_great2(magicianArry : string[]){

    for (let i=0; i<magicianArry.length; i++){
        magicianArry[i] = 'The Great ' + magicianArry[i]
    }
}

function show_magicians(magicians : string[]){

    magicians.forEach(Element => {
        console.log(Element);
    });
}
 const copyMagicianArray = copyArray(magicians)


make_great2(copyMagicianArray);

console.log('\n\nThis is my original array:')
show_magicians(magicians);

console.log('\n\nThis is the modified copy of the array:')
show_magicians(copyMagicianArray);

