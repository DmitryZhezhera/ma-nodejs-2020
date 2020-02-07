// const fsp = require('fs').promises;
const fs = require('fs');
const { pipeline } = require('stream');
const config = require('../config/');
const Limiter = require('./limiter');

function sendJPEG(res) {
  // fsp
  //   .readFile(config.filePath)
  //   .then(buffer => res.end(buffer))
  //   .catch(err => {
  //     console.error('Failed to send image buffer!', err.stack);
  //     res.emit('error', new Error('Failed to send image!'));
  //   });

  const readStream = fs.createReadStream(config.filePath);
  const limiter = new Limiter(config.maxSpeed);
  pipeline(readStream, limiter, res, err => {
    if (err) {
      console.log(err);
      return;
    }
    res.end();
  });
}

module.exports = {
  sendJPEG,
};
