const http = require('http')

const requestListener = function (req, res) {
  res.end('<h1>hello</h1><h2>how are you?</h2><h3>good</h3>');
  console.log('im listening...')
}

const server = http.createServer(requestListener);
server.listen(3000);