const http = require('http');
const ram = require('./ram/ram');
const requestsHandler = require('./server/requestsHandler');

const client = require('./client/client');

function app() {
  ram.run();

  const server = http.createServer(requestsHandler);
  const port = 3000;
  server.listen(port, () => {
    console.log('SERVER STARTED ON PORT: ', server.address().port, ' | clientMode:', clientMode);
  });

  let clientMode = 'HTTP'; // HTTP || AXIOS || NATIVE
  process.argv.forEach((item) => {
    if (item === 'AXIOS') clientMode = 'AXIOS';
    if (item === 'NATIVE') clientMode = 'NATIVE';
  });
  client(clientMode);
}

app();
