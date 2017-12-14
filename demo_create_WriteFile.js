var fs = require('fs');

fs.writeFile('myNewFile3', 'Hello suma!', function(err){
    if(err) throw err;
    console.log('saved!');
});