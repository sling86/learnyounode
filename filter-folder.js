module.exports = filterFolder;

function filterFolder(folder, ext, callback) {
    ext = "." + ext;
    
    var fs = require('fs');
    
    fs.readdir(folder, function (err, files) {
        //err = "TestERR";
        if (err) return callback(err, null);
        
        var path = require('path');
        
        var result = [];
        
        files.forEach(function (file) {
            if (ext === path.extname(file)) {
                //return callback(null, file);
                result.push(file);
            }
        });
        return callback(null, result);
        
    });
}