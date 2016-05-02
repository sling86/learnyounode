var http = require('http');
var queue = [],
    results = {};
    
function showResults() {
        queue.forEach(function (url) {
        
        console.log(results[url]);
    });
}

function loadUrl(url) {
        http.get(url, function (res) {
            var body = '';
            res.on('data', function (chunk) {
                //console.log(url + " :BODY: " + chunk);
                body += chunk;
            });
            res.on('end', function () {
                results[url] = body;
                
                if (Object.keys(results).length === queue.length) {
                    showResults();
                }
                //console.log(results);
                //return body;
            });
            res.on('error', console.error);
        }).on('error', console.error);
    }

if (process.argv.length > 2) {
    //console.log(process.argv.toString());
    
    for (var i = 2; i < process.argv.length; i++) {
        var url = process.argv[i];
        
        queue.push(url); 
        loadUrl(url);
    }
    //console.log("QUEUE: " + queue);
    
}