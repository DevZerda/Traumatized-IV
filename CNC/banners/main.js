// Modules
const fs = require("fs");

// File
const Config = require("../Config/main.js");
const b = require("./main.js")

/*
*@type: [<string>]
*/
exports.main_b = function () {
    let main = "";
    main += b.makeMOTD() + Config.Colors.Blue + "                  ╔══════════════════════════════════════════╗\r\n";
    main += "                  ║         " + Config.Colors.White + "╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗╔═╗╔═╗" + Config.Colors.Blue + "         ║\r\n";
    main += "                  ║         " + Config.Colors.White + "╠╣ ║  ║ ║║ ║ ║║╚═╗║╣ ║  " + Config.Colors.Blue + "         ║\r\n";
    main += "                  ║         " + Config.Colors.White + "╚  ╩═╝╚═╝╚═╝═╩╝╚═╝╚═╝╚═╝" + Config.Colors.Blue + "         ║\r\n";
    main += "                  ╚════╦════╦══════════════════════╦════╦════╝\r\n";
    main += "               ╔═══════╝    ╚═══════╗     ╔════════╝    ╚════════╗\r\n";
    main += "               ║    " + Config.Colors.White + "FloodSec.xyz" + Config.Colors.Blue + "    ║     ║ " + Config.Colors.White + "FloodSec.xyz/discord" + Config.Colors.Blue + " ║\r\n";
    main += "               ╚════════════════════╝     ╚══════════════════════╝\r\n";
    return main;
}

/*
*@type: [<string>]
*/
exports.login_b = function() {
    let l_m = Config.Colors.Blue + "                  ╔══════════════════════════════════════════╗\r\n";
    l_m += "                  ║         " + Config.Colors.White + "╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗╔═╗╔═╗" + Config.Colors.Blue + "         ║\r\n";
    l_m += "                  ║         " + Config.Colors.White + "╠╣ ║  ║ ║║ ║ ║║╚═╗║╣ ║  " + Config.Colors.Blue + "         ║\r\n";
    l_m += "                  ║         " + Config.Colors.White + "╚  ╩═╝╚═╝╚═╝═╩╝╚═╝╚═╝╚═╝" + Config.Colors.Blue + "         ║\r\n";
    l_m += "                  ╚══════════════════════════════════════════╝\r\n\r\n\r\n";
    l_m += "                        ╔═══════════════════════════════╗\r\n";
    l_m += "                        ║ " + Config.Colors.White + "Username:" + Config.Colors.Black + "                     " + Config.Colors.Blue + "║\r\n";
    l_m += "                        ╚═══════════════════════════════╝\r\n";
    return l_m;
}

/*
*@type: [<string>]
*/
exports.login_v = function() {
    let l_v = Config.Colors.Blue + "                  ╔══════════════════════════════════════════╗\r\n";
    l_v += "                  ║         " + Config.Colors.White + "╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗╔═╗╔═╗" + Config.Colors.Blue + "         ║\r\n";
    l_v += "                  ║         " + Config.Colors.White + "╠╣ ║  ║ ║║ ║ ║║╚═╗║╣ ║  " + Config.Colors.Blue + "         ║\r\n";
    l_v += "                  ║         " + Config.Colors.White + "╚  ╩═╝╚═╝╚═╝═╩╝╚═╝╚═╝╚═╝" + Config.Colors.Blue + "         ║\r\n";
    l_v += "                  ╚══════════════════════════════════════════╝\r\n\r\n\r\n";
    l_v += "                        ╔═══════════════════════════════╗\r\n";
    l_v += "                        ║ " + Config.Colors.White + "Password:" + Config.Colors.Black + "                     " + Config.Colors.Blue + "║\r\n";
    l_v += "                        ╚═══════════════════════════════╝\r\n";
    return l_v;
}

exports.help_list = function() {
    let help_b = Config.Colors.Blue + "       ╔══════════════════════╦═════════════════════════════════════════╗\r\n";
    help_b += "       ║  " + Config.Colors.White + "Command Info" + Config.Colors.Blue + "        ║  " + Config.Colors.White + "Command Usage" + Config.Colors.Blue + "                          ║\r\n";
    help_b += "       ╠══════════════════════╬═════════════════════════════════════════╣\r\n";
    help_b += "       ║ " + Config.Colors.White + "Help Commands" + Config.Colors.Blue + "        ║  " + Config.Colors.White + "help | ?" + Config.Colors.Blue + "                               ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Clear Screen" + Config.Colors.Blue + "         ║  " + Config.Colors.White + "clear | cls" + Config.Colors.Blue + "                            ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "My Account Info" + Config.Colors.Blue + "      ║  " + Config.Colors.White + "myinfo" + Config.Colors.Blue + "                                 ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Methods" + Config.Colors.Blue + "              ║  " + Config.Colors.White + "methods" + Config.Colors.Blue + "                                ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Geo IP" + Config.Colors.Blue + "               ║  " + Config.Colors.White + "geo <ip>" + Config.Colors.Blue + "                               ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Port Scanner" + Config.Colors.Blue + "         ║  " + Config.Colors.White + "scan <ip>" + Config.Colors.Blue + "                              ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Stresser" + Config.Colors.Blue + "             ║  " + Config.Colors.White + "stress <ip> <port> <time> <methods>" + Config.Colors.Blue + "    ║\r\n";
    help_b += "       ║ " + Config.Colors.White + "Admin" + Config.Colors.Blue + "                ║  " + Config.Colors.White + "admin" + Config.Colors.Blue + "                                  ║\r\n";
    help_b += "       ╚══════════════════════╩═════════════════════════════════════════╝\r\n";
    return help_b;
}

exports.admin_list = function() {
    let admin_b = Config.Colors.Blue + "     ╔══════════════════════╦═════════════════════════════════════════════╗\r\n";
    admin_b += "     ║  " + Config.Colors.White + "Command Info" + Config.Colors.Blue + "        ║  " + Config.Colors.White + "Command Usage" + Config.Colors.Blue + "                              ║\r\n";
    admin_b += "     ╠══════════════════════╬═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Add User" + Config.Colors.Blue + "             ║  " + Config.Colors.White + "add [USER] [IP] [PW] [LVL] [MTIME] [ADMIN]" + Config.Colors.Blue + " ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Remove User" + Config.Colors.Blue + "          ║  " + Config.Colors.White + "remove [USER]" + Config.Colors.Blue + "                              ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Update User" + Config.Colors.Blue + "          ║  " + Config.Colors.White + "update [USER] [LVL] [MAX TIME] [ADMIN]" + Config.Colors.Blue + "     ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Reset User IP" + Config.Colors.Blue + "        ║  " + Config.Colors.White + "reset_ip [USER]" + Config.Colors.Blue + "                            ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Blacklist IP (CNC)" + Config.Colors.Blue + "   ║  " + Config.Colors.White + "black_cnc [IP]" + Config.Colors.Blue + "                             ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Blacklist IP (Stress)" + Config.Colors.Blue + "║  " + Config.Colors.White + "black_stress [IP]" + Config.Colors.Blue + "                          ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Remove IP (CNC)" + Config.Colors.Blue + "      ║  " + Config.Colors.White + "rm_blk_cnc [IP]" + Config.Colors.Blue + "                            ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Remove IP (Stress)" + Config.Colors.Blue + "   ║  " + Config.Colors.White + "rm_blk_stress [IP]" + Config.Colors.Blue + "                         ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Disable Stresser" + Config.Colors.Blue + "     ║  " + Config.Colors.White + "stresser [ON/OFF]" + Config.Colors.Blue + "                          ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Search Command Logs" + Config.Colors.Blue + "  ║  " + Config.Colors.White + "logs [USER]" + Config.Colors.Blue + "                                ║\r\n";
    admin_b += "     ║ " + Config.Colors.White + "Search Attack Logs" + Config.Colors.Blue + "   ║  " + Config.Colors.White + "attk_logs [USER]" + Config.Colors.Blue + "                           ║\r\n";
    admin_b += "     ╚══════════════════════╩═════════════════════════════════════════════╝\r\n";
    return admin_b;
}

exports.statistics = function() {
    let stats = "    ╔══════════════════╗   ╔══════════════════════╗   ╔══════════════════╗\r\n";
    stats += "    ║   Total Users    ║   ║  Total Online Users  ║   ║  Total Attacks   ║\r\n";
    stats += "    ╠══════════════════╣   ╠══════════════════════╣   ╠══════════════════╣\r\n";
    stats += "    ║        0         ║   ║           0          ║   ║        0         ║\r\n";
    stats += "    ╚══════════════════╝   ╚══════════════════════╝   ╚══════════════════╝\r\n";
    return stats;
}

exports.methods = function () {
    let SpehcM = "";
    SpehcM += Config.Colors.White + "                             ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗\r\n";
    SpehcM += "                             ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗\r\n";
    SpehcM += "                             ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝\r\n";
    SpehcM += "                      " + Config.Colors.Blue + "╔══════════════════════════════════╗\r\n";
    SpehcM += "                      ║ [+] " + Config.Colors.White + "Home Methods = Home" + Config.Colors.Blue + "          ║\r\n";
    SpehcM += "                      ║ [+] " + Config.Colors.White + "Game Methods = Game" + Config.Colors.Blue + "          ║\r\n";
    SpehcM += "                      ║ [+] " + Config.Colors.White + "Bypass Methods = Bypass" + Config.Colors.Blue + "      ║\r\n";
    SpehcM += "                      ║ [+] " + Config.Colors.White + "Special Methods = Special" + Config.Colors.Blue + "    ║\r\n";
    SpehcM += "                      ╚══════════════════════════════════╝\r\n";
    return SpehcM;
}

exports.makeMOTD = function() {
    let middle_bannr = " MOTD: ";
    let motd = fs.readFileSync("./CNC/db/sys/motd.dat", "utf8");
    middle_bannr += b.fix_motd(motd);
    return Config.Colors.Blue + "╔══════════════════════════════════════════════════════════════════════════════╗\r\n║" + middle_bannr + "║\r\n╚══════════════════════════════════════════════════════════════════════════════╝\r\n";
}

exports.fix_motd = function(motd) { 
    let name = " MOTD:                                                                       "
    let name_length = name.length;
    let new_t = " " + Config.Colors.White + motd + Config.Colors.Blue;
    let new_length = name_length - motd.length - 7;
    let count = 0;
    for(count = 0; count < new_length; count++) {
        new_t += " ";
    }
    
    return new_t;
}
