const filteredLs = require('./ex6-module');

filteredLs(process.argv[2], process.argv[3], (err, list) => {
    if (err) { console.err('Oh no', err); }

    console.log(list.join('\n'));
});
