var http = require('http');

http.createServer(function(req, res){
	res.writeHeader(200, {'Content-Type':'text/html'});
	res.write('content');
	res.end('Hello World');
}).listen(8080);