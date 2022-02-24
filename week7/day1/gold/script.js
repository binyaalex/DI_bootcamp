// const http = require('http');
// const date = require('./date.js')


// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end(` the 1st January is in ${date.date()} days`);
// }

// const server = http.createServer(requestListener);
// server.listen(5000);

const http = require('http');
const date = require('./date.js')
const prompts = require('prompts');

(async () => {
  const response = await prompts({
    type: 'text',
    name: 'year',
    message: 'what is the year you was burn?'
  });
  const response2 = await prompts({
    type: 'text',
    name: 'month',
    message: 'what is the month you was burn?'
  });
  const response3 = await prompts({
    type: 'text',
    name: 'day',
    message: 'what is the day you was burn?'
  });

  console.log(response.year);
  console.log(response2.month);
  console.log(typeof(Number(response3.day)));
  let year = response.year
  let month = response.month
  let day = response.day
  const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`you lived ${year} so far ${date.birthdate(year, month, day)} minutes`);
  }
  const server = http.createServer(requestListener);
	server.listen(5000);
})();

/*const http = require('http');
const date = require('./date.js')


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`the next holiday is Hanucka and its in ${date.date()} days`);
}

const server = http.createServer(requestListener);
server.listen(5000);*/



