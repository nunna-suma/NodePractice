var http = require('http');
var dt = require('./myFirstModule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('user defines module : display date and Time: '+dt.myDateTime());
    res.end();
}).listen(8080);