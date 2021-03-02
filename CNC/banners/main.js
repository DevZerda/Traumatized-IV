// File
const Config = require("../Config/main.js");

/*
*@type: [<string>]
*/
exports.main_b = function() {
    let m = Config.Colors.Red + "                       ╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗\r\n";
    m += "                        ║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║\r\n";
    m += "                /\\      ╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝      /\\\r\n";
    m += "               /  \\                __                      /  \\\r\n";
    m += "               |  |                \\ \\_____                |  |\r\n";
    m += "               |  |             ###[==_____>               |  |\r\n";
    m += "              / == \\               /_/                    / == \\\r\n";
    m += "              |/**\\| ╔══════════════════════════════════╗ |/**\\|\r\n";
    m += "                     ║" + Config.Colors.Yellow + "      Traumatized.xyz/discord     " + Config.Colors.Red + "║\r\n";
    m += "                     ╚══════════════════════════════════╝\r\n";
    return m;

}

/*
*@type: [<string>]
*/
exports.login_b = function() {
    let l_m = Config.Colors.Red + "                       ╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗\r\n";
    l_m += "                        ║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║\r\n";
    l_m += "                /\\      ╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝      /\\\r\n";
    l_m += "               /  \\                __                      /  \\\r\n";
    l_m += "               |  |                \\ \\_____                |  |\r\n";
    l_m += "               |  |             ###[==_____>               |  |\r\n";
    l_m += "              / == \\               /_/                    / == \\\r\n";
    l_m += "              |/**\\| ╔══════════════════════════════════╗ |/**\\|\r\n";
    l_m += "                     ║" + Config.Colors.Yellow + "    Username:                     " + Config.Colors.Red + "║\r\n";
    l_m += "                     ╚══════════════════════════════════╝\r\n";
    return l_m;
}

/*
*@type: [<string>]
*/
exports.login_v = function() {
    let l_v = Config.Colors.Red + "                       ╔╦╗╦═╗╔═╗╦ ╦╔╦╗╔═╗╔╦╗╦╔═╗╔═╗╔╦╗\r\n";
    l_v += "                        ║ ╠╦╝╠═╣║ ║║║║╠═╣ ║ ║╔═╝║╣  ║║\r\n";
    l_v += "                /\\      ╩ ╩╚═╩ ╩╚═╝╩ ╩╩ ╩ ╩ ╩╚═╝╚═╝═╩╝      /\\\r\n";
    l_v += "               /  \\                __                      /  \\\r\n";
    l_v += "               |  |                \\ \\_____                |  |\r\n";
    l_v += "               |  |             ###[==_____>               |  |\r\n";
    l_v += "              / == \\               /_/                    / == \\\r\n";
    l_v += "              |/**\\| ╔══════════════════════════════════╗ |/**\\|\r\n";
    l_v += "                     ║" + Config.Colors.Yellow + "    Password:                     " + Config.Colors.Red + "║\r\n";
    l_v += "                     ╚══════════════════════════════════╝\r\n";
    return l_v;
}

exports.help_list = function() {
    let help_b = Config.Colors.Red + "       ╔══════════════════════╦═════════════════════════════════════════╗\r\n";
    help_b += "       ║  " + Config.Colors.Yellow + "Command Info" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "Command Usage" + Config.Colors.Red + "                          ║\r\n";
    help_b += "       ╠══════════════════════╬═════════════════════════════════════════╣\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Help Commands" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "help | ?" + Config.Colors.Red + "                               ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Clear Screen" + Config.Colors.Red + "         ║  " + Config.Colors.Yellow + "clear | cls" + Config.Colors.Red + "                            ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "My Account Info" + Config.Colors.Red + "      ║  " + Config.Colors.Yellow + "myinfo" + Config.Colors.Red + "                                 ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Methods" + Config.Colors.Red + "              ║  " + Config.Colors.Yellow + "methods" + Config.Colors.Red + "                                ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Geo IP" + Config.Colors.Red + "               ║  " + Config.Colors.Yellow + "geo <ip>" + Config.Colors.Red + "                               ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Port Scanner" + Config.Colors.Red + "         ║  " + Config.Colors.Yellow + "scan <ip>" + Config.Colors.Red + "                              ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Stresser" + Config.Colors.Red + "             ║  " + Config.Colors.Yellow + "stress <ip> <port> <time> <methods>" + Config.Colors.Red + "    ║\r\n";
    help_b += "       ║ " + Config.Colors.Yellow + "Admin" + Config.Colors.Red + "                ║  " + Config.Colors.Yellow + "admin" + Config.Colors.Red + "                                  ║\r\n";
    help_b += "       ╚══════════════════════╩═════════════════════════════════════════╝\r\n";
    return help_b;
}

exports.admin_list = function() {
    let admin_b = Config.Colors.Red + "     ╔══════════════════════╦═════════════════════════════════════════════╗\r\n";
    admin_b += "     ║  " + Config.Colors.Yellow + "Command Info" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "Command Usage" + Config.Colors.Red + "                              ║\r\n";
    admin_b += "     ╠══════════════════════╬═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Add User" + Config.Colors.Red + "             ║  " + Config.Colors.Yellow + "add [USER] [IP] [PW] [LVL] [MTIME] [ADMIN]" + Config.Colors.Red + " ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Remove User" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "remove [USER]" + Config.Colors.Red + "                              ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Update User" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "update [USER] [LVL] [MAX TIME] [ADMIN]" + Config.Colors.Red + "     ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Reset User IP" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "reset_ip [USER]" + Config.Colors.Red + "                            ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Blacklist IP (CNC)" + Config.Colors.Red + "   ║  " + Config.Colors.Yellow + "black_cnc [IP]" + Config.Colors.Red + "                             ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Blacklist IP (Stress)" + Config.Colors.Red + "║  " + Config.Colors.Yellow + "black_stress [IP]" + Config.Colors.Red + "                          ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Remove IP (CNC)" + Config.Colors.Red + "      ║  " + Config.Colors.Yellow + "rm_blk_cnc [IP]" + Config.Colors.Red + "                            ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Remove IP (Stress)" + Config.Colors.Red + "   ║  " + Config.Colors.Yellow + "rm_blk_stress [IP]" + Config.Colors.Red + "                         ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Disable Stresser" + Config.Colors.Red + "     ║  " + Config.Colors.Yellow + "stresser [ON/OFF]" + Config.Colors.Red + "                          ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Search Command Logs" + Config.Colors.Red + "  ║  " + Config.Colors.Yellow + "logs [USER]" + Config.Colors.Red + "                                ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Search Attack Logs" + Config.Colors.Red + "   ║  " + Config.Colors.Yellow + "attk_logs [USER]" + Config.Colors.Red + "                           ║\r\n";
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