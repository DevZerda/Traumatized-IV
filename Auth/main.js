// Modules
const fs = require("fs");

// Files
const Crud = require("./crud.js");
const eCrud = require("./functions.js");

exports.login = function(user, pass, ip) {
    if(user.length === 0 || pass.length === 0) {
        return "[x] Error, Invalud argument value!";
    }

    let get_user = Crud.User(user);

    if(get_user === "[x] Error, No user found!") {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }

    let db_user = get_user.split(",")[0];
    let db_pw = get_user.split(",")[2];

    if(user === db_user || pass === db_pw) {
        Crud.LogSession(user, ip)
        return "[+] Successfully logged in, Welcome: " + user;
    } else {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }
}