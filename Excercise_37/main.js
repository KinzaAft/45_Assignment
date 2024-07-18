function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love typescript'; }
    console.log("you order a ".concat(size, ", shirt that says ").concat(text));
}
make_shirt();
make_shirt("medium", 'i love javascript');
make_shirt("small", 'I need a big shirt to wear');
