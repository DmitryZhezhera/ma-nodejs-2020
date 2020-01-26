const requestHTTP = require('../requestHTTP');
const requestAxios = require('../requestAxios');
const requestNative = require('../requestNative');

class Service {
  constructor(endpoint) {
    this.errorAttempts = 0;
    this.errorAttemptsMax = 10;
    this.timeout = 5000;
    this.endpoint = endpoint;
  }

  run(clientMode, timeout) {
    setTimeout(() => {
      try {
        switch (clientMode) {
          case 'AXIOS':
            requestAxios(this.endpoint).then((response) => {
              if (!response.isAxiosError) {
                console.log(Date().toString(), ' ', response.data);
                this.errorAttempts = 0;
                this.run(clientMode, this.timeout);
              } else {
                console.log(Date().toString(), ' ', response.response.data);
                this.onError(clientMode);
              }
            });
            break;
          case 'NATIVE':
            requestNative(this.endpoint)
              .then((response) => {
                console.log(Date().toString(), ' ', response);
                this.errorAttempts = 0;
                this.run(clientMode, this.timeout);
              })
              .catch((e) => {
                console.log(Date().toString(), ' ', e);
                this.onError(clientMode);
              });
            break;

          default:
            requestHTTP(this.endpoint).then((response) => {
              if (response.statusCode >= 400) this.onError(clientMode);
              else {
                this.errorAttempts = 0;
                this.run(clientMode, this.timeout);
              }
              console.log(Date().toString(), ' ', response.data);
            });
            break;
        }
      } catch (e) {
        console.log(e);
      }
    }, timeout);
  }

  onError(clientMode) {
    this.errorAttempts += 1;
    const delay = this.calcDelay();
    // console.log('DELAY', delay);
    if (this.errorAttempts < this.errorAttemptsMax) this.run(clientMode, delay);
    else console.log('attempts is out. No more requests');
  }

  calcDelay() {
    let delay = this.timeout;
    for (let i = 0; i < this.errorAttempts; i += 1) delay += 5000;
    return delay;
  }
}

module.exports = Service;
