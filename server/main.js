const Net = require('net');
var fs = require('fs');
const f = require("node-fetch");
const { exec } = require('child_process');
const EventEmitter = require("events");
const port = process.argv[2];
const server = new Net.Server();

exports.start = server.listen(port, function() {
    console.log("Server started! => "  + port);
    reset_sessions();
});