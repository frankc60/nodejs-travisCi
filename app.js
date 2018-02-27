var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

//when test run (npm test), it will use jshint to find issues,, if you take off a semi-colon, it will report this failure.

//if you push to github, travis will run the tests remotely and email me the failure, once fixed, it will report it has been fixed,
//and the github icon build, will go green and say passing :)