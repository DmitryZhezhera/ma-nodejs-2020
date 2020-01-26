const requestPromise = require('request-promise-native');

const request = async (endpoint) => {
  const requestOptions = {
    method: endpoint.method,
    uri: `http://${endpoint.hostname}:${endpoint.port}${endpoint.path}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: endpoint.auth,
    },
    body: JSON.stringify(endpoint.postData),
    json: true,
  };

  // let response;
  // try {
  //   response = await requestPromise(requestOptions);
  // } catch (e) {
  //   console.log(e);
  // }
  // return response;

  const result = await requestPromise(requestOptions)
    .then((response) => {
      // console.log('requestPromise', response);
      return response;
    })
    .catch((e) => {
      throw new Error(e);
      // console.log(e);
    });
  return result;
};

module.exports = request;
