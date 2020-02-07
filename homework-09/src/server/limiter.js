const { Transform } = require('stream');

class Limiter extends Transform {
  constructor(maxSpeed) {
    super();
    this.speed = maxSpeed / 1000;
    this.sended = 0;
  }

  _transform(chunk, encoding, next) {
    const delay = chunk.length / this.speed;
    setTimeout(() => {
      this.sended += chunk.length;
      if (this.sended >= 1048576) {
        this.sended -= 1048576;
        process.stdout.write('.');
      }
      this.push(chunk);
      next();
    }, delay);
  }
}

module.exports = Limiter;
