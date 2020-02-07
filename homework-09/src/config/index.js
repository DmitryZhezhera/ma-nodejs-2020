const speed = require('./config');

module.exports = {
  port: process.env.PORT || 3000,
  filePath: './static/image.jpg',
  ...speed,
};
