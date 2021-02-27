// Modules
const fs = require("fs");

// File
const Crud = require("./crud.js");

/*
*@params: Username
*@type: [<string>]
*/
exports.User = function(user) {
    let db = fs.readFileSync("./db/sys/users.db", "utf8");
    
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
    let get_user = Crud.User(user);
    if(get_user === "[x] Error, No user found!") {
        fs.appendFile("./db/sys/users.db", "('" + user + "','" + ip + "','" + password + "','" + level + ",'" + maxtime + "','" + admin + "')\n");
        return "[+] User: " + user + " successfully added!";
    } else {
        return "[x] Error, This username is taken, choose another username!";
    }
}

/*
*@params: Username
*@type: [<string>]
*/
exports.removeUser = function(user) {
    let db = fs.appendFileSync("./db/sys/users.db", "utf8");
    let users = db.split("\n");

    users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user)) {

            }
        }
    })
}

/*
*@params: Username, New Level, New Maxtime, New Admin
*@type: [<string>]
*/
exports.userUpdate = function(user, new_level, new_maxtime, new_admin) { 
    let db = fs.appendFileSync("./db/sys/users.db", "utf8");
    let old_users = db.split("\n");
     
    let db_user = "";
    let db_ip = "";
    let db_pw = "";

    let new_db = "";

    old_users.forEach(e => {
        if(e.length > 5) {
            if(e.includes(user)) {
                let fix = e.split("('").join("");
                let fix2 = fix.split("')").join("");
                let info = fix2.split("','");
                new_db += "('" + db_user + "','" + db_ip + "','" + db_pw + "','" + info[3] + "','" + info[4] + "','" + info[5] + "')\n";
            } else {
                new_db += e + "\n";
            }
        }
    });

    fs.appendFileSync("./db/sys/users.db", new_db);
    return "[+] User: " + user + " successfully updated!";
}

/*
*@type: void
*/
exports.resetSessions = function() {
    fs.writeFileSync("./db/current.db", "");
}