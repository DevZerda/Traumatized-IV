const Crud = require("../Auth/crud.js");

exports.Info = {
    "Name": "Traumatized",
    "Description": "Welcome to bypass land",
    "Discord_Server": "Traumatized.xyz/discord"
};


exports.hostname = function(name) {
    if(name.length === 0) {
        name = "NodeJS";
    } 
    
    return "\x1b[31m[\x1b[93mTraumatized\x1b[31m@\x1b[93m" + name + "\x1b[31m]\x1b[93m#~ \x1b[31m";
}

exports.Colors = {
    "Red": "\x1b[31m",
    "Yellow": "\x1b[93m",
    "Blue": "\x1b[34m",
    "Purple": "\x1b[95m",
    "Green": "\x1b[32m",
    "Cyan": "\x1b[96m",
    "Black": "\x1b[30m",
    "Grey": "\x1b[90m",
    "Reset": "\x1b[39m",
    "Background_Red": "\x1b[41m",
    "Background_Green": "\x1b[42m",
    "Background_Grey": "\x1b[100m",
    "Background_Reset": "\x1b[49m",
    "Clear": "\033[2J\033[1;1H"
}

exports.API_1 = "http://194.87.68.129/api.php?host=";
exports.API_2 = "https://onyxapi.online/AllAPI.php?key=n4-1m-27/3/2021-345345&host=";