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

exports.set_title = function(string, socket) {
    socket.write("\033]0;" + string + "\007")
}