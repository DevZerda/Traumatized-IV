const Crud = require("../Auth/crud.js");

exports.Info = {
    "Name": "Traumatized",
    "Description": "Welcome to bypass land",
    "Discord_Server": "Traumatized.xyz/discord"
};

exports.Stresser = true;
exports.Login = true;


exports.hostname = function(name) {
    if(name.length === 0) {
        name = "NodeJS";
    } 
    
    return "\x1b[34m[\x1b[97mFloodSec\x1b[34m@\x1b[97m" + name + "\x1b[34m]\x1b[97m#~ \x1b[34m";
}

exports.Colors = {
    "Red": "\x1b[34m",
    "Yellow": "\x1b[97m",
    "Blue": "\x1b[34m",
    "Purple": "\x1b[95m",
    "Green": "\x1b[32m",
    "Cyan": "\x1b[96m",
    "Black": "\x1b[30m",
    "Grey": "\x1b[90m",
    "White": "\x1b[97m",
    "Reset": "\x1b[39m",
    "Background_Red": "\x1b[41m",
    "Background_Green": "\x1b[42m",
    "Background_Grey": "\x1b[100m",
    "Background_Reset": "\x1b[49m",
    "Clear": "\033[2J\033[1;1H"
}

exports.API_1 = "https://syntaxapi.xyz/d0s/?key=synapi&host=";
exports.API_2 = "https://syntaxapi.xyz/d0s/lul.php?key=bootycheeks&host=";
exports.API_3 = "https://syntaxapi.xyz/d0s/api2.php?key=bootycheeks&host=";