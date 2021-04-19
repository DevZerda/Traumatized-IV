// Modules
const fs = require("fs");

// Files
const Crud = require("./crud.js");
const eCrud = require("./functions.js");
const eExtra = require("../Extra/functions.js");


/*
*@params: Username, Password, IP
*@type: [<string>]
*/
exports.login = function(user, pass, ip) {
    console.log("user, pass, ip:15 [/Auth/crud.js] - " + user + " " + pass + " " + ip);
    if(user.length === 0 || pass.length === 0) {
        return "[x] Error, Invalud argument value!";
    }

    let get_user = Crud.User(user);
    console.log("get_user:20 [/Auth/crud.js] - " + get_user);
    if(get_user === "[x] Error, No user found!") {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }

    let info = get_user.split(",");
    eExtra.log_login(user, ip);
    if(user === info[0] || pass === info[2]) {
        Crud.LogSession(user, ip)
        if(info[1] === "none") {
            Crud.changeIP(user, ip);
        }
        return "[+] Successfully logged in, Welcome: " + user;
    } else {
        return "[x] Error, Username or password seem to be incorrect!. Try again";
    }
}