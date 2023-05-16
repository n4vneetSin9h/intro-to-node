var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	var filename = '.' + q.pathname;
	console.log(q.pathname);
	var htmlIndex = filename.indexOf('.html');
	if (htmlIndex != -1) {
		filename = filename.replace('.html', '');
	}
	console.log(filename);
	if (filename == './') {
		filename = './index4.3';
	}
	
	filename = filename + ".html";

	fs.readFile(filename, function(err, data){
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404: Not Found!");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("...Incoming Request: " + req.url);
		res.end();
	});
}).listen(8080);

console.log("Server listening on PORT:8080...");