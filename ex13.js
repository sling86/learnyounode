var http = require('http');
var url = require('url');

var port = process.argv[2];
if (!port) port = 8000;

var jsonTime, err;

function convertDate(isoTime, to) {
    var d = new Date(isoTime);
    switch(to) {
        case 'parse':
            //
            jsonTime = {
                "hour" : d.getHours(),
                "minute" : d.getMinutes(),
                "second" : d.getSeconds()
            };
            break;
            
        case 'unix':
            //
            jsonTime = {
                "unixtime" : d.getTime()
            };
            break;
        default:
            //
            break;
    }
    return jsonTime;
}

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        return res.end('send GET\n');
        
    var queryObj = url.parse(req.url, true);
    var isoTime = queryObj.query.iso;
    
    if (queryObj.pathname == '/api/parsetime') {
        convertDate(isoTime, 'parse');
    } else if (queryObj.pathname == '/api/unixtime') {
        convertDate(isoTime, 'unix');
    } else {
        err = queryObj.pathname + " is invalid!";
    }
    
    if (jsonTime) {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(jsonTime));  
    } else {
        res.writeHead(404);
        res.end(err);
    }
    
});
server.listen(port);