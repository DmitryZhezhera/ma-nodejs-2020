const http = require('http');
const ram = require('./ram/ram');
const requestsHandler = require('./server/requestsHandler');

const client = require('./client/client');

function app() {
  let clientMode = 'HTTP'; // HTTP || AXIOS || NATIVE
  console.log(process.env.CLIENT);
  if (process.env.CLIENT) clientMode = process.env.CLIENT;

  ram.run();

  const server = http.createServer(requestsHandler);
  const port = 3000;
  server.listen(port, () => {
    console.log('SERVER STARTED ON PORT: ', server.address().port, ' | clientMode:', clientMode);
  });

  client(clientMode);
}

app();
