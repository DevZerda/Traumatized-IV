const Server = require("./server/main.js");


server.on('connection', async function(socket) {
    socket.setEncoding('utf8');
    let ggg = await getInput(socket, "Username: ");
    console.log(ggg);
    console.log("A new connection has been established");
    var socket_port = socket.remotePort;
    var socket_ip = socket.remoteAddress.replace("::ffff:", "");
    console.log('Client IP: ' + socket_ip + ":" + socket_port + "\r\n");

    // READING DATA
    socket.on('data', async function(chunk) {
        //Cleaning data
        let cleanSTR = chunk.toString().replace(/(\r\n|\n|\r)/gm,"");
    });

    socket.on('end', function() {
        crud.remove_session(socket_ip);
        console.log('Closing connection with the client\r\n');
    });

    socket.on('error', function(err) {
        console.log("[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n");
    });
});

function reset_sessions() {
    fs.writeFileSync(crud.current_path, "");
}

function set_title(string, socket)
{
    socket.write("\033]0;" + string + "\007")
}

function getInput(socket, string) {
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