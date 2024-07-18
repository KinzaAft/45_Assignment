var TShirt;
(function (TShirt) {
    function makeShirt(size, message) {
        console.log("you order a shirt ".concat(size, " shirt with the message: \"").concat(message, "\""));
    }
    TShirt.makeShirt = makeShirt;
})(TShirt || (TShirt = {}));
// Example usage:
TShirt.makeShirt("medium", "hello eric!");
