const http = require('http');
const ram = require('./ram');
const requestsHandler = require('./requestsHandler');

const server = http.createServer(requestsHandler);
const port = 3000;
server.listen(port, () => {
  console.log('SERVER STARTED ON PORT: ', server.address().port);
});

ram.run();
