const fs = require('fs');

const data = fs.readFileSync(process.argv[2]);
const newLines = data.toString().match(/\n/g).length;

console.log(newLines);
