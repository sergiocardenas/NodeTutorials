//Hecho por Sergio Cardenas
var http = require('http'); 
var url = require('url'); 

var server = http.createServer(function (req, res) {
	if(req.method == 'GET'){
		parsedUrl = url.parse(req.url, true);
		var response;
		var t = new Date(parsedUrl.query.iso);
		if(parsedUrl.pathname == '/api/parsetime'){
			response = {
    				hour: t.getHours(),
      				minute: t.getMinutes(),
      				second: t.getSeconds()
			};
		}else if(parsedUrl.pathname == '/api/unixtime'){
			response = {
    				unixtime: t.getTime()
			};

		} else {
			// Invalid url
			res.writeHead(404);
			res.end();
  		}
		
		res.writeHead(200, {'content-type': 'application/json'}) ;
		res.end(JSON.stringify(response));
		
	} 
}) ;
     
server.listen(process.argv[2]) ;
