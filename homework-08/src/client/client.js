const endpoints = require('./endpoints');
const Service = require('./models/service');

function client(clientMode) {
  const arrServices = [];
  endpoints.forEach(async (endpoint) => {
    const newService = new Service(endpoint);
    newService.run(clientMode, 0);
    arrServices.push(newService);
  });
}

module.exports = client;
