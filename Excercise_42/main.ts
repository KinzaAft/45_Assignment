// Excercise 42
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

// type MagicianArray = string[];

// function show_magicians(Magicians : string[]) : void{

//     for( const magician of Magicians) {
//         console.log (magician.charAt(0).toUpperCase()+magician.slice(1)) ;

//     }
// }
// function make_great(magicians: string[]) : void{

//     for (let i=0;i< magicians.length; i++ )  {
//         magicians[i] = magicians[i] + 'the great'
//     }
// }
// const Magicians2 : string[]= ["ali" ,"hamza" , "bilal"];
// make_great(Magicians2)
// console.log(Magicians2)


//type 2
// Define a type for the array of magicians' names
// type MagicianArray = string[];

// // Function to add "the Great" to each magician's name
// function make_great(magicians: MagicianArray): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `${magicians[i]} the Great`;
//     }
// }

// // Function to show magicians' names
// function show_magicians(magicians: MagicianArray): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// // Test
// const magicians: MagicianArray = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
// console.log("Original Magicians:");
// show_magicians(magicians);
// make_great(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(magicians);


//3
function show_magicians(magicians:string[]):void{
    for(const magician of magicians){
        console.log(magician.charAt(0).toUpperCase()+ magician.slice(1));
    }
}
function make_great(magicians:string[]): void{
    for(let i=0; i< magicians.length; i++){
        magicians[i] = magicians[i]    + ' the great'

    }
}

const Magicians2 : string[] = ["usama","ali","Haseeb"];
make_great(Magicians2);
show_magicians(Magicians2);
