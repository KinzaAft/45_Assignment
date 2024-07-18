var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit
var placesToVisit = ["Tokyo", "Santorini", "Machu Picchu", "Venice", "New York"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show that the array is still in its original order
console.log("\nOriginal order (not modified):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order (not modified):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show its order has changed
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the list to show it’s back to its original order
console.log("\nBack to original order:");
console.log(placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
// Print the array to show its order has been changed
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort the array to change it to reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
