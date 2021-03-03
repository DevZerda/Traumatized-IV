// Modules
const fs = require("fs");
const { exec } = require('child_process');

// Files
const Crud = require("../CNC/Auth/crud.js");
const CNC_Func = require("./main.js");
const eExtra = require("../CNC/Extra/functions.js");

exports.cnc_toggle = async function(switc) {
    if(switc === "on") {
        await CNC_Func.Turn_CNC_On();
    } else if (switc === "off") {
        await CNC_Func.Turn_CNC_Off();
    } else {
        console.log("[x] Error, Invalid Option...!");
    }
}

exports.restart_cnc = async function() {
    CNC_Func.Turn_CNC_Off();
    setTimeout(CNC_Func.Turn_CNC_On(), 5000);
}

exports.Turn_CNC_On = async function() {
    exec('screen -dmS cnc node cnc.js', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('Child Process STDOUT: '+stdout);
    console.log('[+] CNC starting up....!\r\n');
  });
}

exports.Turn_CNC_Off = async function() {    
    exec('screen -r cnc -X quit', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('Child Process STDOUT: '+stdout);
    console.log('[+] CNC is shutting down....!\r\n');
  });
}
