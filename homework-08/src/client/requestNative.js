const requestPromise = require('request-promise-native');

const request = async (endpoint) => {
  const requestOptions = {
    method: 'GET',
    uri: 'http://localhost:3000/metrics?filter=limit',
    headers: endpoint.auth,
    json: true,
  };
  requestPromise(requestOptions)
    .then((response) => {
      console.log('requestPromise', response);
      return response;
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = request;
