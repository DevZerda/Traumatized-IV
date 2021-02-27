// Modules
const Net = require('net');
const fs = require('fs');
const f = require("node-fetch");
const exec = require('child_process');
const EventEmitter = require("events");
const Crud = require("../Auth/crud.js");

// Files
const ServerFunc = require("./functions");

// Extrak
const port = 455;
const server = new Net.Server();
const gay = new Net.Server();
exports.Socket_Info = {
    "SocketIP": "",
    "SocketPORT": "",
    "UserIP": "",
    "UserPORT": ""
}

exports.Bot_Socket = {
    "BotIP": "",
    "BotPORT": ""
}

// Exports
exports.svr = server;

server.listen(port, function() {
    console.log("Server started! => "  + port);
    Crud.resetSessions();
});

exports.bot = gay;

gay.listen(444, function() {
    console.log("Bot Port Start => 444");
})

exports.setInfo = function(ip, port) {
    this.Socket_Info.UserIP = ip;
    this.Socket_Info.UserPORT = port;
}

exports.setBotInfo = function(ip, port) {
    this.Socket_Info.BotIP = ip;
    this.Socket_Info.BotPORT = port;
}