const http = require('http');
const main = require('./main.js')


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`the date and the time are currently:${main.date()}`);
}

const server = http.createServer(requestListener);
server.listen(5000);