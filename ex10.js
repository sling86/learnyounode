var net = require('net');
var port = process.argv[2];
if (!port) port = 8000;

function zeroPad(i) {
    return (i < 10 ? '0' : '') + i;
}

function now() {
    var d = new Date();
    return d.getFullYear() + '-'
    + zeroPad(d.getMonth() + 1) + '-'
    + zeroPad(d.getDate()) + ' '
    + zeroPad(d.getHours()) + ':'
    + zeroPad(d.getMinutes());
}

var server = net.createServer(function(socket) {
    socket.end(now() + '\n');
});
server.listen(port);