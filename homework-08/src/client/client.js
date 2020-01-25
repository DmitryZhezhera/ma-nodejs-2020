// const http = require('http');

const endpoints = require('./endpoints');
const requestHTTP = require('./requestHTTP');
const requestAxios = require('./requestAxios');
const requestNative = require('./requestNative');

function client(clientMode) {
  setInterval(() => {
    endpoints.forEach(async (endpoint) => {
      try {
        let response = {};
        switch (clientMode) {
          case 'AXIOS':
            response = await requestAxios(endpoint);
            break;
          case 'NATIVE':
            response = await requestNative(endpoint);
            break;

          default:
            response = await requestHTTP(endpoint);
            break;
        }
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    });
  }, 5000);
}

module.exports = client;
