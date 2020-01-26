const http = require('http');
// const querystring = require('querystring');

function requestHTTP(endpoint) {
  return new Promise((resolve, reject) => {
    // const postDataSend = querystring.stringify(endpoint.postData); // ITS BREAK ALL
    const postDataSend = JSON.stringify(endpoint.postData);

    const options = {
      hostname: endpoint.hostname,
      port: endpoint.port,
      path: endpoint.path,
      method: endpoint.method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postDataSend),
        Authorization: endpoint.auth,
      },
    };

    const req = http.request(options, (res) => {
      // console.log(`STATUS: ${res.statusCode}`);
      // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
      res.setEncoding('utf8');

      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
        // console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        res.data = rawData;
        resolve(res);
      });
    });

    req.on('error', (e) => {
      // console.error(`problem with request: ${e.message}`);
      reject(e);
    });

    // Write data to request body
    req.write(postDataSend);
    req.end();
  });
}

module.exports = requestHTTP;
