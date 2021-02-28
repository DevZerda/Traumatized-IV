// Modules
const fs = require("fs");

// Files
const Server = require("./main.js");

exports.getInput = function(socket, string) {
    return new Promise(resolve => {
        socket.write(string);

        socket.on("data", c => {
        c = c.toString();
        
        if(c.indexOf("\n") !== -1) {
            socket.removeAllListeners("data");
  
          return resolve(c.trim());
        }
      });
    });
}

exports.sendBots = function(socket, string) {
    Server.bot.on('connection', function(socket) {
    
    })
}

exports.set_title = function(string, socket) {
    socket.write("\033]0;" + string + "\007")
}

exports.changeMotd = function(new_motd) {
    fs.writeFileSync("./CNC/db/sys/motd.dat", new_motd);
    return "[+] New Message of the day updated!";
}