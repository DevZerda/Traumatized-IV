// Modules
const fs = require("fs");
const prompt = require('prompt-sync')();

// Files
const Crud = require("./CNC/Auth/crud.js");
const eCrud = require("./CNC/Auth/functions.js");
const Auth = require("./CNC/Auth/main.js");

const Banners = require("./CNC/banners/main.js");

const CNC_CP = require("./CNC_CP/main.js");
const CNC_Banners = require("./CNC_CP/banners.js");

const Config = require("./CNC/Config/main.js");
const eConfig = require("./CNC/Config/current.js");

var adminConfig = {
    "hostname": Config.Colors.Red + "[" + Config.Colors.Yellow + "FloodSec" + Config.Colors.Red + "@" + Config.Colors.Yellow + "CP" + Config.Colors.Red + "]" + Config.Colors.Yellow + "#~ " + Config.Colors.Cyan
}

console.clear();
console.log(Banners.main_b());
while(true) {
    var inputCMD = prompt(adminConfig.hostname);
    let cmd = "";
    let cmd_argv = "";

    if(inputCMD.includes(" ")) {
        cmd_argv = inputCMD.split(" ");
        cmd = cmd_argv[0];
    } else {
        cmd = inputCMD;
        cmd_argv[0] = inputCMD;
    }
    console.clear()
    console.log(Banners.main_b());

    if(cmd === "help") {
        console.clear();
        console.log(CNC_Banners.admin_list());
    } else if(cmd === "add") {
        if(cmd_argv.length < 5) { console.log("[x] Process failed, Invalid argument!"); } else {
        console.log(Crud.addUser(cmd_argv[1], cmd_argv[2], cmd_argv[3], cmd_argv[4], cmd_argv[5])); }
    } else if(cmd === "remove") {
        if(cmd_argv.length < 1) { console.log("[x] Process failed, Invalid argument!"); } else {
        console.log(Crud.removeUser(cmd_argv[1])); }
    } else if(cmd === "update") {
        if(cmd_argv.length < 4) { console.log("[x] Process failed, Invalid argument!"); } else {
        console.log(Crud.userUpdate(cmd_argv[1], cmd_argv[2], cmd_argv[3], cmd_argv[4])); }
    } else if(cmd === "reset_ip") {
        if(cmd_argv.length < 1) { console.log("[x] Process failed, Invalid argument!"); } else {
        console.log(Crud.resetIP(cmd_argv[2])); }
    } else if(cmd === "blacklist") {
        // if(cmd_argv.length <= )
        if(cmd_argv.length < 1) { console.log("[x] Process failed, Invalid argument!"); } else {
            if(cmd_argv[1] === "cnc") {
                if(cmd_argv[2] === "on") {

                } else {

                }
            } else if(cmd_argv[1] === "stresser") {
                if(cmd_argv[2] === "on") {

                } else {

                }
            }
        }
        
        console.log(Crud.blacklist_ip_from_cnc(cmd_argv[1]));
        console.log(Crud.blacklist_ip_from_stresser(cmd_argv[1]));
    // } else if(cmd === "")
    } else if(cmd === "cnc_status") {

    } else if(cmd === "cnc") {
        let switc = cmd_argv[1];
        CNC_CP.cnc_toggle(switc);
    } else if(cmd === "restart_cnc") {
        CNC_CP.restart_cnc();
        console.log('[+] Restarting cnc......!\r\n');
    } else if(cmd === "motd") {
        Crud.change_motd(cmd_argv);
    } else if(cmd === "cnc_build") {
        console.log("coming soon...\r\n");
    } else if(cmd === "cnc_rebuild") {
        console.log("coming soon...");
    } else if(cmd.length === 0) {

    } else {
        console.log("[x] Error, No command found!");
    }
}