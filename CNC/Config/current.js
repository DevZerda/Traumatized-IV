// Files
const Crud = require("../Auth/crud.js");
const C = require("./current.js");

exports.clients = [];

exports.CurrentCmd = {
    "Cmd": "",
    "arg": [],
    "Fullcmd": ""
};

exports.CurrentUser = {
    "Username": "",
    "IP": "",
    "Password": "",
    "Level": 0,
    "Maxtime": 0,
    "isAdmin": false
};

exports.GetCmd = function(Cmd) {
    C.CurrentCmd.Fullcmd = Cmd;
    if(Cmd.includes(" ")) {
        let split_cmd = Cmd.split(" ");
        let i = 0;
        split_cmd.forEach(e => {
            C.CurrentCmd.arg[i] = e;
            i++;
        });
        C.CurrentCmd.Cmd = split_cmd[0];
    } else {
        C.CurrentCmd.Cmd = Cmd;
        C.CurrentCmd.arg[0] = Cmd;
    }
}

exports.GetUserInfo = function(user) {
    let get_user = Crud.User(user).split(",");
    C.CurrentUser.Username = get_user[0];
    C.CurrentUser.IP = get_user[1];
    C.CurrentUser.Password = get_user[2];
    C.CurrentUser.Level = get_user[3];
    C.CurrentUser.Maxtime = get_user[4];
    C.CurrentUser.isAdmin = (get_user[5] === "1" ? true:false);
}