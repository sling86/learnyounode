var filterFolder = require('./filter-folder');

filterFolder(process.argv[2], process.argv[3], function (err, filteredFiles) {
    if (err) return console.error('ERROR!: ', err);
    
    filteredFiles.forEach(function(file){
        console.log(file);
    });
    
});