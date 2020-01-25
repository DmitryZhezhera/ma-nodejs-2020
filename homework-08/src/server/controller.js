const ram = require('../ram/ram');

function internalError(res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 500;
  res.end(
    JSON.stringify({
      message: 'Internal error occured',
    }),
  );
}
// LIMITS SET
function limitSet(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const newLimit = req.body.limit;
  console.log('newLimit_', newLimit);
  if (typeof newLimit === 'number') {
    ram.setLimit(newLimit);
    res.statusCode = 200;
    res.end(
      JSON.stringify({
        message: `Minimum free memory limit is successfully set to ${newLimit} MB`,
      }),
    );
  } else {
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        message: `New value for minimum free memory limit is not valid number`,
      }),
    );
  }
}

// METRICS GET
function metrics(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      total: ram.getMemoryTotal(),
      free: ram.getMemoryFreeValue(),
      allocated: ram.getMemoryAllocated(),
    }),
  );
}

function metricsTotal(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      total: ram.getMemoryTotal(),
    }),
  );
}

function metricsFree(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(ram.getMemoryFree()));
}

function metricsAllocated(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      allocated: ram.getMemoryAllocated(),
    }),
  );
}

function metricsLimit(res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(
    JSON.stringify({
      message: 'OK',
      limit: ram.getLimit(),
    }),
  );
}

function metricsInvalidFilter(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 400;
  res.end(
    JSON.stringify({
      message: 'Filter value is not valid',
    }),
  );
}

module.exports = {
  internalError,

  limitSet,

  metrics,
  metricsTotal,
  metricsFree,
  metricsAllocated,
  metricsLimit,
  metricsInvalidFilter,
};
