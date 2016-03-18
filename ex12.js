const http = require('http');
const t2map = require('through2-map')

http.createServer((request, response) => {
    if (request.method === 'POST') {
	var body = '';
        request.on('data', (data) => {
            body += data;
        });
	request.on('end', () => {
	    response.end(body.toUpperCase());
	})
    }
}).listen(process.argv[2]);
