var http = require('http');
var map = require('through2-map')

var port = process.argv[2];
if (!port) port = 8000;

var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send POST\n');
        
    // var body = '';
    // req.on('data', function (chunk) {
    //     body += chunk.toString().toUpperCase();
    // });
    
    // req.on('end', function () {
    //     res.writeHead(200);
    //     res.end(body);
    // });
    
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
    
});
server.listen(port);