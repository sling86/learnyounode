var http = require('http');
var bl = require('bl');
var url = process.argv[2];

//console.log(url);

http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
        if (err) 
            return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});