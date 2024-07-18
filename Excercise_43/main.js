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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//2
var magicians = ['Harry potter', 'Hermione Granger', 'Ron Wesley', 'Albus Dumblendore'];
function copyArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great2(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'The Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (Element) {
        console.log(Element);
    });
}
var copyMagicianArray = copyArray(magicians);
make_great2(copyMagicianArray);
console.log('\n\nThis is my original array:');
show_magicians(magicians);
console.log('\n\nThis is the modified copy of the array:');
show_magicians(copyMagicianArray);
