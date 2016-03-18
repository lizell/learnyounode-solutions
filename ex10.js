const net = require('net');

function z(val) {
    return val < 10 ? `0${val}` : val;
}

net.createServer((socket) => {
    var d = new Date();
    socket.end(`${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}\n`);
}).listen(process.argv[2]);
