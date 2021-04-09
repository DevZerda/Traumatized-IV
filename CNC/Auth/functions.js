// Files
const fs = require("fs");
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
    if(parseInt(get_user[3]) > 0 || parseInt(get_user[3]) <= 5) {
        return true;
    } else if(parseInt(get_user[3]) === 0) {
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
exports.isReseller = function(user) {
    let get_user = Crud.User(user).split(",");
    if(parseInt(get_user[5]) === 2) {
        return true;
    } else if(parseInt(get_user[5]) === 0) {
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
    if(parseInt(get_user[5]) === 2) {
        return true;
    } else if(parseInt(get_user[5]) === 0) {
        return false;
    } else {
        // console.log("Error") // APP ERROR (DIDNT READ DB CORRECT OR USER LINE CORRUPTED)
        return false;
    }
}

/*
*@type: [<int>]
*/
exports.UserCount = function() {
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = db.split("\n");
    return users.length-1;
}

/*
*@type: [<int>]
*/
exports.PremiumCount = function() {
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = db.split("\n");

    prm_count = 0;

    users.forEach(e => {
        if(e.length > 5) {
            let prm_check = e.split("','")[3];
            if(parseInt(prm_check) > 0 && parseInt(prm_check) <= 5) {
                prm_count++;
            }
        }
    })

    return prm_count;
}

/*
*@type: [<int>]
*/
exports.AdminCount = function() {
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = db.split("\n");

    let admin_count = 0
    users.forEach(e => {
        if(e.length > 5) {
            let admin_check = e.split("','")[5];
            if(parseInt(admin_check) === 1) {
                admin_count++;
            }
        }
    })

    return admin_count;
}

/*
*@type: [<int>]
*/
exports.TotalAttackedIPs = function() {
    let db_attacks = fs.readFileSync("./CNC/db/attacks/attacks.db", "utf8");
    let attacks = db_attacks.split("\n");

    return attacks.length=1;
}

/*
*@type: [<int>]
*/
exports.CurrentOnlineCount = function() {
    let current_db = fs.readFileSync("./CNC/db/sys/current.db", "utf8");
    let users = current_db.split("\n");

    return users.length-1;
}

/*
*@param: Username
*@type: [<string>]
*/
exports.show_stats = function(user) {
    let get_user = Crud.User(user);
    let info = get_user.split(",");

    let admin = info[5] == 1 ? "True\r\n":"False\r\n"

    let output = "[User]: " + info[0] + " | [IP]: " + info[1] + "\r\n";
    output += "[Level]: " + info[3] + " | [Maxtime]: " + info[4] + "\r\n";
    output += "[Admin]: " + admin

    return output;
}