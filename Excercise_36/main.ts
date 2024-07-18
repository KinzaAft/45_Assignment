// Excercise 36

namespace TShirt {
    export function makeShirt(size: string, message: string): void {
        console.log(`you order a shirt ${size} shirt with the message: "${message}"`);
    }
}

// Example usage:
TShirt.makeShirt("medium", "hello eric!");

