var http = require('http');
var funcStuff = require('./export');

http.createServer(function (req,res){
  res.writeHead(200);

  res.write(funcStuff.oneFunc());
  res.write(funcStuff.twoFunc());

  res.end();
}).listen(3000);
