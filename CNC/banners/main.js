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

exports.Home_HomeM = function() {
    let HomeM = "";
    HomeM += "                               ╔════════════════╗\r\n";
    HomeM += "                               ║  Home Methods  ║\r\n";
    HomeM += "                               ╚══════╦══╦══════╝\r\n";
    HomeM += "    ╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗\r\n";
    HomeM += "    ║-> UDP-MIX-HOME ║║-> MSSQL        ║║-> STD          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> AMP-QUAKE    ║║-> HOME         ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> AMP-MDNS     ║║-> LDAP         ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> AMP-SNMP     ║║-> SNMP         ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣\r\n";
    HomeM += "    ║                                                                      ║\r\n";
    HomeM += "    ╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣\r\n";
    HomeM += "    ║-> AMP-DNS      ║║-> RAIL         ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> AMP-NTP      ║║-> ARD          ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> RDP-UDP      ║║-> DNS          ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ║-> CHARGEN      ║║-> NTP          ║║-> XXX          ║║-> XXX          ║\r\n";
    HomeM += "    ╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝\r\n";
    return HomeM;
}

exports.Game_GameM = function() {
    let GameM = "";
    GameM += "                                       " + Config.Colors.Blue + "╔════════════════╗" + Config.Colors.Blue + "                            \r\n";
    GameM += "                                       " + Config.Colors.Blue + "║" + Config.Colors.Blue + "  Game Methods  " + Config.Colors.Blue + "║" + Config.Colors.Blue + "                            \r\n";
    GameM += "                                       " + Config.Colors.Blue + "╚══════╦══╦══════╝" + Config.Colors.Blue + "                            \r\n";
    GameM += "            " + Config.Colors.Blue + "╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " 2K           " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " R6-CRASH     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " COD-CRASH    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " DVR          " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " GAME-SLAM    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " FIVEM-DROP   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " ZOOM         " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " 2K-FREEZE    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " BRAWLHALLA   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " PUBG         " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " APEX-DOWN    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " COD-FREEZE   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣" + Config.Colors.Blue + " \r\n"; 
    GameM += "            " + Config.Colors.Blue + "║" + Config.Colors.Blue + "                                                                      " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " FN-LAG       " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " MINECRAFT    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " GAME-LIMIT   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " ARK-255      " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " RUST-STAB    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " FORTNITE     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " GAME-DOWN    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " ROBLOX-X     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " FIVEM-UDP    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    GameM += "            " + Config.Colors.Blue + "╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝" + Config.Colors.Blue + " \r\n";
    return GameM;
}

exports.Bypass_BypaM = function() {
    let BypaM = "";
    BypaM += "                                       " + Config.Colors.Blue + "╔════════════════╗" + Config.Colors.Blue + "                            \r\n";
    BypaM += "                                       " + Config.Colors.Blue + "║" + Config.Colors.Blue + " Bypass Methods " + Config.Colors.Blue + "║" + Config.Colors.Blue + "                            \r\n";
    BypaM += "                                       " + Config.Colors.Blue + "╚══════╦══╦══════╝" + Config.Colors.Blue + "                            \r\n"; 
    BypaM += "            " + Config.Colors.Blue + "╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " DEDIPATH-SAS " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-ICMP     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-GAME     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " OCTO-DEATH   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-FUCK     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " REDSYNV2     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " VPN-BYPASS   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-NUKE     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-RAIL     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " NFO-DEATH    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " NFO-RIOT     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HYDRA-VX     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║" + Config.Colors.Blue + "                                                                      " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " OVH-DEVIL    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " NFO-SLAM     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OVH-UDP      " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " OVH-CHAOS    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " NFO-NULL     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " KILLALL      " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " OVH-ABUSE    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " VPN-ZEUS     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " 100UP        " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " 100UP-TCP    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HYDRA-VX     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " WRA          " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    BypaM += "            " + Config.Colors.Blue + "╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝" + Config.Colors.Blue + " \r\n";
    return BypaM;
}

exports.Special_SpecM = function() {
    let SpecM = "";
    SpecM += "                                       " + Config.Colors.Blue + "╔════════════════╗" + Config.Colors.Blue + "                            \r\n";
    SpecM += "                                       " + Config.Colors.Blue + "║" + Config.Colors.Blue + "Special Methods." + Config.Colors.Blue + "║" + Config.Colors.Blue + "                            \r\n";
    SpecM += "                                       " + Config.Colors.Blue + "╚══════╦══╦══════╝" + Config.Colors.Blue + "                            \r\n";  
    SpecM += "            " + Config.Colors.Blue + "╔════════════════╗╔═══════════════╩╗╔╩═══════════════╗╔════════════════╗" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " STUN         " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HTTP-POST    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " UDP-BYPASSV1 " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " SYN9         " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HTTP-HEAD    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HOT-SPOTV1   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " SYN-X        " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " SERVERV2     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " AUTOBYPASS   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " SYNACK       " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " TCP-FUCK     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " UDP-BYPASS   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "╠════════════════╝╚════════════════╝╚════════════════╝╚════════════════╣" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║" + Config.Colors.Blue + "                                                                      " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "╠════════════════╗╔════════════════╗╔════════════════╗╔════════════════╣" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " SYNACK       " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " RAIN-SYN     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " SUCURI-KILLER" + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " YUBINA       " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " UDPBYPASS    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " OPENVPN-KILL " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " CPU-SSH      " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " KILLALLV5    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " HOT-SPOTV1   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "║->" + Config.Colors.Blue + " HTTP-GET     " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " DEDI-PATH    " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " TCP-BYPASS   " + Config.Colors.Blue + "║║->" + Config.Colors.Blue + " XXX          " + Config.Colors.Blue + "║" + Config.Colors.Blue + " \r\n";
    SpecM += "            " + Config.Colors.Blue + "╚════════════════╝╚════════════════╝╚════════════════╝╚════════════════╝" + Config.Colors.Blue + " \r\n";
    return SpecM;
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
