var users = ["Admin", "eric", "haseeb", "ali", "fatima"];
for (var i = 0; i < users.length; i++) {
    if (users[i] === "admin") {
        console.log("Hello ".concat(users, ",would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(users, ",thank you for logging in again"));
    }
}
