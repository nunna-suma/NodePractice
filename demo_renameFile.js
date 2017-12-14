var fs = require('fs');

fs.rename('myNewFile3', 'myNewFile3.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});