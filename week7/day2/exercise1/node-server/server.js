const http = require('http')
const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
const jsonUser = JSON.stringify(user)
console.log(jsonUser)

const requestListener = function (req, res) {
  res.end(jsonUser);
  console.log('im listening..')
}

const server = http.createServer(requestListener);
server.listen(8080);