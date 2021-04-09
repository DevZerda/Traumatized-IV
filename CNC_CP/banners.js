// Files
const Config = require("../CNC/Config/main.js");
exports.admin_list = function() {
    let admin_b = Config.Colors.Red + "     ╔════════════════════════════════════════════════════════════════════╗\r\n";
    admin_b += "     ║                       " + Config.Colors.Yellow + "CNC Control Panel" + Config.Colors.Red + "                            ║\r\n";
    admin_b += "     ╠══════════════════════╦═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║  " + Config.Colors.Yellow + "Command Info" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "Command Usage" + Config.Colors.Red + "                              ║\r\n";
    admin_b += "     ╠══════════════════════╬═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "CNC Status & Stats" + Config.Colors.Red + "   ║  " + Config.Colors.Yellow + "cnc_status" + Config.Colors.Red + "                                 ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "CNC On/Off Toggle" + Config.Colors.Red + "    ║  " + Config.Colors.Yellow + "cnc <on/off>" + Config.Colors.Red + "                               ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Restart CNC" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "restart_cnc" + Config.Colors.Red + "                                ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Change MOTD" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "MOTD <message>" + Config.Colors.Red + "                             ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Build CNC" + Config.Colors.Red + "            ║  " + Config.Colors.Yellow + "cnc_build" + Config.Colors.Red + "                                  ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Rebuild CNC" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "rebuild_build" + Config.Colors.Red + "                              ║\r\n";
    admin_b += "     ╠══════════════════════╩═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║                        " + Config.Colors.Yellow + "Admin's User CP" + Config.Colors.Red + "                             ║\r\n";
    admin_b += "     ╠══════════════════════╦═════════════════════════════════════════════╣\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Add User" + Config.Colors.Red + "             ║  " + Config.Colors.Yellow + "add [USER] [IP] [PW] [LVL] [MTIME] [ADMIN]" + Config.Colors.Red + " ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Remove User" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "remove [USER]" + Config.Colors.Red + "                              ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Update User" + Config.Colors.Red + "          ║  " + Config.Colors.Yellow + "update [USER] [LVL] [MAX TIME] [ADMIN]" + Config.Colors.Red + "     ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Reset User IP" + Config.Colors.Red + "        ║  " + Config.Colors.Yellow + "reset_ip [USER]" + Config.Colors.Red + "                            ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Blacklist IP" + Config.Colors.Red + "         ║  " + Config.Colors.Yellow + "black_cnc [CNC/STRESSER] [ADD/RM] [IP]" + Config.Colors.Red + "     ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Disable/Enable Login" + Config.Colors.Red + " ║  " + Config.Colors.Yellow + "login [ON/OFF]" + Config.Colors.Red + "                             ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Disable Stresser" + Config.Colors.Red + "     ║  " + Config.Colors.Yellow + "stresser [ON/OFF]" + Config.Colors.Red + "                          ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Search Command Logs" + Config.Colors.Red + "  ║  " + Config.Colors.Yellow + "logs [USER]" + Config.Colors.Red + "                                ║\r\n";
    admin_b += "     ║ " + Config.Colors.Yellow + "Search Attack Logs" + Config.Colors.Red + "   ║  " + Config.Colors.Yellow + "attk_logs [USER]" + Config.Colors.Red + "                           ║\r\n";
    admin_b += "     ╚══════════════════════╩═════════════════════════════════════════════╝\r\n";
    return admin_b;
}