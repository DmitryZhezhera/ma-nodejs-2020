const axios = require('axios');

const send = async (endpoint) => {
  try {
    const url = `http://${endpoint.hostname}:${endpoint.port}${endpoint.path}`;
    const response = await axios(url, {
      method: endpoint.method,
      headers: {
        Authorization: endpoint.auth,
      },
      data: endpoint.postData,
    });
    return response;
  } catch (e) {
    // console.log(e);
    return e;
  }
};

module.exports = send;
