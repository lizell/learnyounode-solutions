const http = require('http');

function json(input) {
    var parts = input.split('=');
    if (parts[0] === 'iso') {
	var matches = parts[1].match(/T(\d+):(\d+):(\d+)/);
	return JSON.stringify({
	    hour: +matches[1]+1,
	    minute: +matches[2],
	    second: +matches[3]
	});
    } else if (parts[0] === 'unix') {
	return JSON.stringify({
	    unixtime: new Date(parts[1]).getTime()
	});
    }
}

http.createServer((request, response) => {
    var parts = request.url.split('?');
    if (request.method === 'GET') {
	if (parts[0] === '/api/parsetime') {
	    response.end(json(parts[1]));
	} else if (parts[0] === '/api/unixtime') {
	    response.end(json(parts[1].replace('iso', 'unix')));
	}
    }
}).listen(process.argv[2]);
