const http = require('http');
const main = require('./main.js')
const b = 5
console.log(main.largeNumber + b)


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hi there at the frontend');
  console.log('im listening...')
}

const server = http.createServer(requestListener);
server.listen(3000);