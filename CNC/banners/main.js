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

/*
*@type: [<string>]
*/
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

/*
*@type: [<string>]
*/
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

/*
*@type: [<string>]
*/
exports.statistics = function() {
    let stats = "    ╔══════════════════╗   ╔══════════════════════╗   ╔══════════════════╗\r\n";
    stats += "    ║   Total Users    ║   ║  Total Online Users  ║   ║  Total Attacks   ║\r\n";
    stats += "    ╠══════════════════╣   ╠══════════════════════╣   ╠══════════════════╣\r\n";
    stats += "    ║        0         ║   ║           0          ║   ║        0         ║\r\n";
    stats += "    ╚══════════════════╝   ╚══════════════════════╝   ╚══════════════════╝\r\n";
    return stats;
}

/*
*@type: [<string>]
*/
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

/*
*@type: [<string>]
*/
exports.Home_HomeM = function() {
    let HomeM = "";
    HomeM += Config.Colors.Blue + "                               ╔════════════════╗\r\n";
    HomeM += "                               ║  " + Config.Colors.White + "Home Methods" + Config.Colors.Blue + "  ║\r\n";
    HomeM += "                               ╚══════╦══╦══════╝\r\n";
    HomeM += "    ╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "UDP-MIX-HOME" + Config.Colors.Blue + " ║║-> " + Config.Colors.White + "MSSQL" + Config.Colors.Blue + "        ║║-> " + Config.Colors.White + "STD" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "AMP-QUAKE" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "HOME" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "AMP-MDNS" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "LDAP" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "AMP-SNMP" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "SNMP" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣\r\n";
    HomeM += "    ║                                                                      ║\r\n";
    HomeM += "    ╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "AMP-DNS" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "RAIL" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "AMP-NTP" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "ARD" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "RDP-UDP" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "DNS" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ║-> " + Config.Colors.White + "CHARGEN" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "NTP" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    HomeM += "    ╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝\r\n";
    return HomeM;
}

/*
*@type: [<string>]
*/
exports.Game_GameM = function() {
    let GameM = "";
    GameM += Config.Colors.Blue + "                               ╔════════════════╗\r\n";
    GameM += "                               ║  " + Config.Colors.White + "Game Methods" + Config.Colors.Blue + "  ║\r\n";
    GameM += "                               ╚══════╦══╦══════╝\r\n";
    GameM += "    ╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗\r\n";
    GameM += "    ║-> " + Config.Colors.White + "2K" + Config.Colors.Blue + "           ║║-> " + Config.Colors.White + "R6-CRASH" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "COD-CRASH" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "DVR" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "GAME-SLAM" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "FIVEM-DROP" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "ZOOM" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "2K-FREEZE" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "BRAWLHALLA" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "PUBG" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "APEX-DOWN" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "COD-FREEZE" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣\r\n"; 
    GameM += "    ║                                                                      ║\r\n";
    GameM += "    ╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣\r\n";
    GameM += "    ║-> " + Config.Colors.White + "FN-LAG" + Config.Colors.Blue + "       ║║-> " + Config.Colors.White + "MINECRAFT" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "GAME-LIMIT" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "ARK-255" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "RUST-STAB" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "FORTNITE" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "GAME-DOWN" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ║-> " + Config.Colors.White + "ROBLOX-X" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "FIVEM-UDP" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    GameM += "    ╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝\r\n";
    return GameM;
}

/*
*@type: [<string>]
*/
exports.Bypass_BypaM = function() {
    let BypaM = "";
    BypaM += Config.Colors.Blue + "                               ╔════════════════╗\r\n";
    BypaM += "                               ║ " + Config.Colors.White + "Bypass Methods" + Config.Colors.Blue + " ║\r\n";
    BypaM += "                               ╚══════╦══╦══════╝\r\n"; 
    BypaM += "    ╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "DEDIPATH-SAS" + Config.Colors.Blue + " ║║-> " + Config.Colors.White + "OVH-ICMP" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "OVH-GAME" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "OCTO-DEATH" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "OVH-FUCK" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "REDSYNV2" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "VPN-BYPASS" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "OVH-NUKE" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "OVH-RAIL" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "NFO-DEATH" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "NFO-RIOT" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "HYDRA-VX" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣\r\n";
    BypaM += "    ║                                                                      ║\r\n";
    BypaM += "    ╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "OVH-DEVIL" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "NFO-SLAM" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "OVH-UDP" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "OVH-CHAOS" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "NFO-NULL" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "KILLALL" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "OVH-ABUSE" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "VPN-ZEUS" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "100UP" + Config.Colors.Blue + "        ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ║-> " + Config.Colors.White + "100UP-TCP" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "HYDRA-VX" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "WRA" + Config.Colors.Blue + "          ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    BypaM += "    ╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝\r\n";
    return BypaM;
}

/*
*@type: [<string>]
*/
exports.Special_SpecM = function() {
    let SpecM = "";
    SpecM += Config.Colors.Blue + "                               ╔════════════════╗\r\n";
    SpecM += "                               ║" + Config.Colors.White + "Special Methods." + Config.Colors.Blue + "║\r\n";
    SpecM += "                               ╚══════╦══╦══════╝\r\n";
    SpecM += "    ╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "STUN" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "HTTP-POST" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "UDP-BYPASSV1" + Config.Colors.Blue + " ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "SYN9" + Config.Colors.Blue + "         ║║-> " + Config.Colors.White + "HTTP-HEAD" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "HOT-SPOTV1" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "SYN-X" + Config.Colors.Blue + "        ║║-> " + Config.Colors.White + "SERVERV2" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "AUTOBYPASS" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "SYNACK" + Config.Colors.Blue + "       ║║-> " + Config.Colors.White + "TCP-FUCK" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "UDP-BYPASS" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣\r\n";
    SpecM += "    ║                                                                      ║\r\n";
    SpecM += "    ╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "SYNACK" + Config.Colors.Blue + "       ║║-> " + Config.Colors.White + "RAIN-SYN" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "SUCURI-KILLER" + Config.Colors.Blue + "║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "YUBINA" + Config.Colors.Blue + "       ║║-> " + Config.Colors.White + "UDPBYPASS" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "OPENVPN-KILL" + Config.Colors.Blue + " ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "CPU-SSH" + Config.Colors.Blue + "      ║║-> " + Config.Colors.White + "KILLALLV5" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "HOT-SPOTV1" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ║-> " + Config.Colors.White + "HTTP-GET" + Config.Colors.Blue + "     ║║-> " + Config.Colors.White + "DEDI-PATH" + Config.Colors.Blue + "    ║║-> " + Config.Colors.White + "TCP-BYPASS" + Config.Colors.Blue + "   ║║-> " + Config.Colors.White + "XXX" + Config.Colors.Blue + "          ║\r\n";
    SpecM += "    ╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝\r\n";
    return SpecM;
}

/*
*@type: [<string>]
*/
exports.makeMOTD = function() {
    let middle_bannr = " MOTD: ";
    let motd = fs.readFileSync("./CNC/db/sys/motd.dat", "utf8");
    middle_bannr += b.fix_motd(motd);
    return Config.Colors.Blue + "╔══════════════════════════════════════════════════════════════════════════════╗\r\n║" + middle_bannr + "║\r\n╚══════════════════════════════════════════════════════════════════════════════╝\r\n";
}

/*
@param: MOTD
*@type: [<string>]
*/
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
