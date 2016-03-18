const http = require('http');

function getter(urls) {
    if (!urls || urls.length < 1) { return; }

    http.get(urls.shift(), (response) => {
	response.setEncoding('utf8');
	var doc = '';
	response.on('data', (data) => { doc += data });
	response.on('end', () => {
	    console.log(doc);
	    getter(urls);
	});
    });
}

getter(process.argv.slice(2));
