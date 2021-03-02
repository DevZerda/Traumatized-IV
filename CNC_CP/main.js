// Modules
const fs = require("fs");
const exec = require("child_process");

// Files
const Crud = require("../CNC/Auth/crud.js");

exports.cnc_toggle = function(switc) {
    if(switc === "on") {
        Turn_CNC_On();
    } else {
        Turn_CNC_Off();
    }
}

exports.restart_cnc = function() {
    this.Turn_CNC_Off();
    this.Turn_CNC_On();
}

exports.Turn_CNC_On = function() {
    exec("screen -dmS cnc node cnc.js", function(error, stdout, stderr) {
        if(!error && !stderr) {
            console.log("[+] CNC is now starting up on port 455!");
        }
    })
}

exports.Turn_CNC_Off = function() {
    exec("screen -r cnc -X quit", function(error, stdout, stderr) {
        if(!stderr && !error) {
            console.log("[+] CNC is turning off...");
        }
    })
}