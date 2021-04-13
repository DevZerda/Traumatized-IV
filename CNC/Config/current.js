// Files
const dis = require("./current.js");
const Crud = require("../Auth/crud.js");
const C = require("./current.js");

exports.clients = [];

exports.CurrentLogin = {
    "Username": "",
    "Password": ""
};

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

/*
*@param: CMD
*@type: [<void>]
*/
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

/*
*@param: Username
*@type: [<void>]
*/
exports.GetUserInfo = function(user) {
    let get_user = Crud.User(user).split(",");
    dis.CurrentUser.Username = get_user[0];
    dis.CurrentUser.IP = get_user[1];
    dis.CurrentUser.Password = get_user[2];
    dis.CurrentUser.Level = parseInt(get_user[3]);
    dis.CurrentUser.Maxtime = parseInt(get_user[4]);
    dis.CurrentUser.isAdmin = (parseInt(get_user[5]) === 1 ? true : false);
}

/*
*@type: [<void>]
*/
exports.ResetUserInfo = function() {
    dis.CurrentCmd.arg = [];
    dis.CurrentCmd.Cmd = "";
    dis.CurrentCmd.Fullcmd = "";
    dis.CurrentUser.Username = "";
    dis.CurrentUser.IP = "";
    dis.CurrentUser.Password = "";
    dis.CurrentUser.Level = "";
    dis.CurrentUser.Maxtime = "";
    dis.CurrentUser.isAdmin = "";
}