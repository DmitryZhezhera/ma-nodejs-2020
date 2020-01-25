const controller = require('./controller');

function notFound(res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 404;
  res.write(404);
  res.end();
}

module.exports = (req, res) => {
  const { url, method, queryParams } = req;

  switch (url.pathname) {
    case '/':
      res.write('home page');
      res.end();
      break;

    case '/limit':
      if (method !== 'POST') {
        controller.internalError(res);
        break;
      }
      controller.limitSet(req, res);
      break;

    case '/metrics':
      if (method !== 'GET') {
        controller.internalError(res);
        break;
      }

      if (!queryParams.filter) controller.metrics(req, res);
      else if (queryParams.filter) {
        if (queryParams.filter === 'total') controller.metricsTotal(req, res);
        else if (queryParams.filter === 'free') controller.metricsFree(req, res);
        else if (queryParams.filter === 'allocated') controller.metricsAllocated(req, res);
        else if (queryParams.filter === 'limit') controller.metricsLimit(res);
        else controller.metricsInvalidFilter(req, res);
      }
      break;

    default:
      notFound();
      break;
  }
};
