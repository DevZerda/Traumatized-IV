// Files
const Server = require("./server/main.js");
const ServerFunc = require("./server/functions.js");
const Crud = require("./Auth/crud.js");
const eCrud = require("./Auth/functions.js");
const Config = require("./Config/main.js");
const eConfig = require("./Config/current.js");
const Banners = require("./banners/main.js");
const Extra = require("./Extra/main.js");
const eExtra = require("./Extra/functions.js");


Server.svr.on('connection', async function(socket) {
    socket.setEncoding('utf8');

    /* Getting Connecting User IP/PORT */
    Server.Socket_Info.UserIP = socket.remoteAddress.replace("::ffff:", "");
    Server.Socket_Info.UserPORT = socket.remotePort;

    /* Showing the connecting user on server side terminal! */
    console.log('A new connection has been established\r\nClient IP: ' + Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserIP + "\r\n");

    socket.write(Config.Colors.Clear);

    //Get Username
    socket.write(Banners.login_b());
    eExtra.set_cursor(9, 37, socket);
    let username = await ServerFunc.getInput(socket, "");

    socket.write(Config.Colors.Clear);
    eExtra.log_action("Connecting", username, Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserPORT);

    //Get Password
    socket.write(Banners.login_v());
    eExtra.set_cursor(9, 37, socket);
    let password = await ServerFunc.getInput(socket, "");

    /* Get User Input In A Loop */

    socket.write(Config.Colors.Clear);
    socket.write(Banners.main_b());
    socket.write("                   Welcome To Traumatized Bypass Land, Jeff\r\n");

    while(true) {
        let inputCMD = await ServerFunc.getInput(socket, Config.hostname(username))
        eConfig.GetCmd(inputCMD);

        if(eConfig.CurrentCmd.Cmd === "help" || eConfig.CurrentCmd.Cmd === "?") {
            // socket.write(Banners.help_b());
        } else if(eConfig.CurrentCmd.Cmd === "clear") {
            socket.write(Config.Colors.Clear + Banners.main_b());
        } else if(eConfig.CurrentCmd.Cmd === "geo") {
            let ip = eConfig.CurrentCmd.arg[1];
            let result = await eExtra.GeoIP(ip)
            socket.write(result);
        } else if(eConfig.CurrentCmd.Cmd === "scan") {
            let ip = eConfig.CurrentCmd.arg[1];
            let result = await eExtra.GeoIP(ip);
            socket.write(result);
        } else if(eConfig.CurrentCmd.Cmd === "info") {

        } else if(eConfig.CurrentCmd.Cmd === "admin") {
            if(C.CurrentCmd.arg.length === 1) {
                let tool = C.CurrentCmd.arg[1];
                if(tool === "add") {
                    socket.write(Crud.addUser(C.CurrentCmd.arg[2], C.CurrentCmd.arg[3], C.CurrentCmd.arg[4], C.CurrentCmd.arg[5], C.CurrentCmd.arg[6], C.CurrentCmd.arg[7]));
                } else if(tool === "remove") {
                    socket.write(Crud.removeUser(C.CurrentCmd.arg[2]));
                } else if(tool === "update") {
                    socket.write(Crud.userUpdate(C.CurrentCmd.arg[2], C.CurrentCmd.arg[3], C.CurrentCmd.arg[4], C.CurrentCmd.arg[5]));
                }
            }
        }

        

        socket.on('end', function() {
            console.log('Closing connection with the client\r\n');
        });

        socket.on('error', function(err) {
            console.log("[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n");
        });
    }
});
