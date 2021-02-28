// Modules
const fs = require("fs");
const prompt = require('prompt-sync')();

// Files
const Crud = require("./CNC/Auth/crud.js");
const eCrud = require("./CNC/Auth/functions.js");
const Auth = require("./CNC/Auth/main.js");

const Banners = require("./CNC/banners/main.js");

const Config = require("./CNC/Config/main.js");
const eConfig = require("./CNC/Config/current.js");

var adminConfig = {
    "hostname": Config.Colors.Red + "[" + Config.Colors.Yellow + "Traumatized" + Config.Colors.Red + "@" + Config.Colors.Yellow + "CP" + Config.Colors.Red + "]" + Config.Colors.Yellow + "#~ " + Config.Colors.Cyan
}

console.clear();

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

    if(cmd === "help") {
        console.clear();
        console.log(Banners.main_b() + Banners.admin_list());
    } else if(cmd.length === 0) {

    } else {
        console.log("[x] Error, No command found!");
    }
}