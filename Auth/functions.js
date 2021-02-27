// Files
const { parse } = require("path");
const Crud = require("./crud.js");

/*
*@params: Username
*@type: [<boolean>]
*/
exports.isRegistered = function(user) {
    let get_user = Crud.User(user);

    if(get_user === "[x] Error, No user found!") {
        return false;
    } else {
        if(get_user.includes(user)) {
            return true;
        } else {
            return false;
        }
    }
}

/*
*@params: Username
*@type: [<boolean>]
*/
exports.isPremium = function(user) {
    let get_user = Crud.User(user).split(",");
    if(parseInt(get_user[2]) > 0 || parseInt(get_user[2]) <= 5) {
        return true;
    } else if(parseInt(get_user[2]) === 0) {
        return false;
    } else {
        // console.log("Error") // APP ERROR (DIDNT READ DB CORRECT OR USER LINE CORRUPTED)
        return false;
    }
}

/*
*@params: Username
*@type: [<boolean>]
*/
exports.isAdmin = function(user) {
    let get_user = Crud.User(user).split(",");
    if(parseInt(get_user[2]) === 1) {
        return true;
    } else if(parseInt(get_user[2]) === 0) {
        return false;
    } else {
        // console.log("Error") // APP ERROR (DIDNT READ DB CORRECT OR USER LINE CORRUPTED)
        return false;
    }
}