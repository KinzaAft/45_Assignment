var current_users = ["eric ", "python", "lisa", "anoosha", "shah"];
var new_users = ["eric", "anoosha", "imran", "shahfan", "rio"];
// new_users.forEach(new_user => {
//     if (current_users = (new_user)) {
//         console.log(`Sorry, the username '${new_users}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_users}' is available.`);
//     }
// });
function isUsernameTaken(username) {
    for (var i = 0; i < current_users.length; i++) {
        if (current_users[i] === username) {
            return true;
        }
    }
    return false;
}
// Loop through the new_users list
new_users.forEach(function (new_user) {
    // Check if the new username is already in use
    if (isUsernameTaken(new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
});
