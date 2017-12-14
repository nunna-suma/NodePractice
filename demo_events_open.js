var fs = require('fs');

var rs = fs.createReadStream('./myNewFile3.txt');
rs.on('open', function(){
    console.log('this file is open');
});