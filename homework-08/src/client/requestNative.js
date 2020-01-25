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

  let response;
  try {
    response = await requestPromise(requestOptions);
  } catch (e) {
    console.log(e);
  }

  return response;
  // DOESN'T RETURN RESULT
  // requestPromise(requestOptions)
  //   .then((response) => {
  //     console.log('requestPromise', response);
  //     return response;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
};

module.exports = request;
