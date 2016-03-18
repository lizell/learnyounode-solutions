const fs = require('fs');

function filteredLs(dir, ext, cb) {
    fs.readdir(dir, (err, list) => {
	if (err) { return cb(err); }

	cb(undefined,
	   list.filter(file => file.endsWith(`.${ext}`)));
    });
}
    
module.exports = filteredLs;
