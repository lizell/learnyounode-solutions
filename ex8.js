const http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf8');
    var doc = '';
    response.on('data', (data) => { doc += data });
    response.on('end', () => {
	console.log(doc.length);
	console.log(doc);
    });
});
