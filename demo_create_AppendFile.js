var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello chandu!', function(err){
    if(err) throw err;
    console.log('saved!');
});