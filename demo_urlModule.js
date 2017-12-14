var url = require('url');
var addr = 'http://localhos:8080/defeault.htm?year=2017&month=Feb';
var q = url.parse(addr,true);

console.log(q.host);
console.log(q.path);
console.log(q.pathname);
console.log(q.port);
console.log(q.search);

var qData = q.query;
console.log(qData.month+' using variable');

console.log(q.query.month+' without variable');