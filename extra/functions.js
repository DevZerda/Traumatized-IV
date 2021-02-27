// Modules 
const fs = require("fs");
const fetch = require("node-fetch");

// File
const eExtra = require("./functions.js");
const Crud = require("../Auth/crud.js");
const Config = require("../Config/main.js");
const eConfig = require("../Config/current.js");

/*
*@type: void
*/
exports.sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*
*@params: Log Type, Username, IP Address
*@type: [<string>]
*/
exports.log_action = function(log_type, user, ip) {
    /*
    Get user info
    */

    let get_user = Crud.User(user);
    let info = get_user.split(",");

    let response = "[LOG]: " + log_type + " | [Timestamp]: " + eExtra.currentTime() + "\r\n";
    response += "[User]: " + user + " | [IP]: " + ip + "\r\n";
    response += "[Level]: " + info[3] + " | [Admin]: " + info[5] + "\r\n";
    response += "[Cmd]: " + eConfig.CurrentCmd.Cmd + " | [FullCmd]: " + eConfig.CurrentCmd.Fullcmd + "\r\n";
    console.log(response);
    eExtra.log_to_file(response);
}

/*
*@param: output
*@type: void
*/
exports.log_to_file = function(output) {
    fs.appendFileSync("./db/logs.db", output);
}

exports.log_attack = function(user, ip, port, time, method) {

}

/*
*@params: IP Address
*@type: [<string>]
*/
exports.GeoIP = async function(ip) {
    let results = await(await fetch("https://scrapy.tech/geo.php?ip="+ ip)).text();
    return results;
}

/*
*@params: IP Address
*@type: [<string>]
*/
exports.pScan = async function(ip) {
    let results = await(await fetch("https://scrapy.tech/pscan.php?ip="+ ip)).text();
    return results;
}

/*
*@type: void
*/
exports.currentTime = function() {
    let current = new Date();
    let gay = current.getMonth()+1 + "/" + current.getDate() + "/" + current.getFullYear();
    return gay;
}

/*
*@params: time
*@type: (Promise[void])
*/
exports.sleep = function(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/*
*@params: Row, Column, Socket
*@type: (Promise[void])
*/
exports.set_cursor = function(row, column, socket) {
    socket.write("\033[" + row + ";" + column + "f");
}

/*
*@params: Row, Column, Socket
*@type: (Promise[void])
*/
exports.set_TerminalSize = function(row, col, socket) {
    socket.write("\033[" + row + ";" + col + ";39t");
}