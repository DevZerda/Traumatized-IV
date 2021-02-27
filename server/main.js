// Modules
const Net = require('net');
const fs = require('fs');
const f = require("node-fetch");
const exec = require('child_process');
const EventEmitter = require("events");
const Crud = require("../Auth/crud.js");

// Files
const ServerFunc = require("./functions");

// Extra
const port = 455;
const server = new Net.Server();
exports.Socket_Info = {
    "SocketIP": "",
    "SocketPORT": "",
    "UserIP": "",
    "UserPORT": ""
}

// Exports
exports.svr = server;

server.listen(port, function() {
    console.log("Server started! => "  + port);
    Crud.resetSessions();
});

exports.setInfo = function(ip, port) {
    this.Socket_Info.UserIP = ip;
    this.Socket_Info.UserPORT = port;
}