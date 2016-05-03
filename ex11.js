var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];

if (!port) port = 8000;
if (!file) file = process.argv[1];

//process.argv.forEach(console.log);

var server = http.createServer(function (req, res) {
    // req handling
    var src = fs.createReadStream(file);
    src.on('open', function () {
        src.pipe(res);
    });
    src.on('error', function (err) {
        res.end(err);
    });
});
server.listen(port);