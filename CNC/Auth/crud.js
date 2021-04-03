// Modules
const fs = require("fs");
const { prependListener } = require("process");

// File
const Crud = require("./crud.js");

/*
*@params: Username
*@type: [<string>]
*/
exports.User = function(user) {
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = db.split("\n");

    let found_check = false;
    let user_line = "";

    users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user)) {
                found_check = true;
                let fix = e.split("('").join("");
                let fix2 = fix.split("')").join("");
                user_line = fix2.split("','").join(",");
            }
        }
    })

    if(found_check == false) {
        return "[x] Error, No user found!";
    } else {
        return user_line;
    }
}

/*
*@params: Username, IP, Password, Level, Max time, Admin
*@type: [<string>]
*/
exports.addUser = function(user, ip, password, level, maxtime, admin) {
    console.log("TESTED\r\n");
    let get_user = Crud.User(user);
    if(get_user === "[x] Error, No user found!") {
        fs.appendFileSync("./CNC/db/sys/users.db", "('" + user + "','" + ip + "','" + password + "','" + level + ",'" + maxtime + "','" + admin + "')\n");
        return "[+] User: " + user + " successfully added!\r\n";
    } else {
        return "[x] Error, This username is taken, choose another username!\r\n";
    }
}

/*
*@params: Username
*@type: [<string>]
*/
exports.removeUser = function(user) {
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = db.split("\n");

    new_db = "";

    users.forEach(e => {
        if(e.length > 5) {
            if(!e.includes(user)) {
                new_db = e + "\n";
            } 
        }
    })

    fs.writeFileSync("./CNC/db/sys/users.db", new_db);
    return "[+] User: " + user + " successfully removed!\r\n";
}

/*
*@params: Username, New Level, New Maxtime, New Admin
*@type: [<string>]
*/
exports.userUpdate = function(user, new_level, new_maxtime, new_admin) { 
    let db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let old_users = db.split("\n");

    let new_db = "";

    old_users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user)) {
                let fix = e.split("('").join("");
                let fix2 = fix.split("')").join("");
                let info = fix2.split("','");
                new_db += "('" + info[0] + "','" + info[1] + "','" + info[2] + "','" + new_level + "','" + new_maxtime + "','" + new_admin + "')\n";
            } else {
                new_db += e + "\n";
            }
        }
    });

    fs.writeFileSync("./CNC/db/sys/users.db", new_db);
    console.log("User: " + user + " updated ip!")
    return "[+] User: " + user + " successfully updated!\r\n";
}

exports.changeIP = function(userOrip, ip) {
    let old_db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = old_db.split("\n");

    let new_db = "";

    users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(userOrip)) {
                let fix = e.split("('").join("");
                let fix2 = fix.split("')").join("");
                let info = fix2.split("','");
                new_db += "('" + info[0] + "','" + ip + "','" + info[2] + "','" + info[3] + "','" + info[4] + "','" + info[5] + "')\n";
            } else {
                new_db += e + "\n";
            }
        }
    })

    fs.writeFileSync("./CNC/db/sys/users.db", new_db);
    return "[+] User: " + userOrip + "'s IP successfully updated!";
}

exports.changePassword = function(user, new_pw) {
    let old_db = fs.readFileSync("./CNC/db/sys/users.db", "utf8");
    let users = old_db.split("\n");

    let new_db = "";

    users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user)) {
                let fix = e.split("('").join("");
                let fix2 = fix.split("')").join("");
                let info = fix2.split("','");
                new_db += "('" + user + "','" + info[1] + "','" + new_pw + "','" + info[3] + "','" + info[4] + "','" + info[5] + "')\n";
            } else {
                new_db += e + "\n";
            }
        }
    })

    fs.writeFileSync("./CNC/db/sys/users.db", new_db);
    return "[+] User: " + user + "'s password successfully updated!\r\n";
}

exports.LogSession = function(user, ip) {
    fs.appendFileSync("./CNC/db/sys/current.db", "('" + user + "','" + ip + "')\n");
}

exports.removeSession = function(userOrip) {
    let db = fs.readFileSync("./CNC/db/sys/current.db", "utf8");
    let old_users = db.split("\n");
    
    new_users = ""; 

    old_users.forEach(e => {
        if(e.length > 5) {
            if(!e.includes(userOrip)) {
                new_users = e + "\n";
            }
        }
    })

    fs.writeFileSync("./CNC/db/sys/current.db", new_users);
}

/*
*@type: void
*/
exports.resetSessions = function() {
    fs.writeFileSync("./CNC/db/sys/current.db", "");
}

exports.change_motd = function(new_motd) {
    fs.writeFileSync("./CNC/db/sys/motd.dat", new_motd);
    return "[+] Message Of The Day successfully set (" + new_motd + ")\r\n";
}

exports.GetCurrentUser = function(user) {
    let current_db = fs.readFileSync("./CNC/db/sys/current.db", "utf8");
    let users = current_db.split("\n");

    let found_check = false;
    let user_line = "";

    users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user))
            found_check = true;
            let fix = e.split("('").join("");
            let fix2 = fix.split("')").join("");
            user_line = fix2.split("','").join(",");
        }
    })

    if(found_check == false) {
        return "[x] Error, The user is currently not signed in!\r\n";
    } else {
        return user_line;
    }
}

exports.resetIP = function(user) {
    let info = Crud.User(user).split(",");
    Crud.removeUser(user);
    Crud.addUser(info[0], info[2], info[3], info[4], info[5])
    return "IP Successfully Reset!\r\n";
}