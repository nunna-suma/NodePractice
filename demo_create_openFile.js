var fs = require('fs');
fs.open('myNewFile2', 'w', function(err, file){
    if(err) throw err;
    console.log('saved!');
});