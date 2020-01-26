const queryString = require('querystring');
const url = require('url');
const router = require('./router');
const auth = require('./authorization');

module.exports = async (request, response) => {
  if (auth(request, response))
    try {
      const { url: uri } = request;
      const parsedUrl = url.parse(uri);
      const queryParams = queryString.decode(parsedUrl.query);
      let body = [];
      request
        .on('error', (err) => {
          console.log(err);
        })
        .on('data', (chunk) => {
          body.push(chunk);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
          router(
            { ...request, body: body ? JSON.parse(body) : {}, url: parsedUrl, queryParams },
            response,
          );
        });
    } catch (err) {
      console.log(err);
    }
};
