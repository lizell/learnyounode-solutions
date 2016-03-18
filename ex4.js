const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
    const newLines = data.toString().match(/\n/g).length;

    console.log(newLines);
});
