const os = require('os');

class CRam {
  state = {
    rate: 1000,
    limit: 300,
    color: true,
  };

  constructor() {
    this.memoryTotal = os.totalmem();
    this.memoryFree = os.freemem();
    this.memoryBusy = this.memoryTotal - this.memoryFree;
  }

  calc() {
    this.memoryTotal = os.totalmem() / 100000;
    this.memoryFree = os.freemem() / 100000;
    const memoryBusyCurrent = this.memoryTotal - this.memoryFree;
    const memoryDeltaBusy = this.memoryBusy - memoryBusyCurrent;
    this.memoryBusy = memoryBusyCurrent;
    let currentColor = '';
    if (this.state.color) {
      if (memoryDeltaBusy < 0) currentColor = '\x1b[31m';
      else if (memoryDeltaBusy > 0) currentColor = '\x1b[32m';
    }
    let alert = '';
    if (this.state.limit >= this.memoryFree) {
      currentColor = '\x1b[31m';
      alert = '\x1b[31m !!! ATTENTION: Available memory is under the defined limit !!! \x1b[0m';
    }

    console.clear();
    console.log(
      `Total system memory: ${this.memoryTotal.toFixed(3)} MB / LIMIT ${this.state.limit} MB
      \nFree memory available: ${this.memoryFree.toFixed(3)} MB
      \nAllocated memory: ${this.memoryBusy.toFixed(3)} MB
      \nDelta for previous allocated memory value: ${currentColor} ${memoryDeltaBusy.toFixed(
        3,
      )} MB\x1b[0m
      \n${alert}`,
    );
  }

  parseInputArguments() {
    if (process.env.RATE) this.state.rate = Number(process.env.RATE);
    if (process.env.LIMIT) this.state.limit = Number(process.env.LIMIT);
    if (process.env.COLOR) this.state.color = Number(process.env.COLOR);
    if (process.argv.length <= 2) return {};
    const arrArguments = process.argv.slice(2);
    arrArguments.forEach((item) => {
      const arrKeyValue = item.split('=');
      arrKeyValue[0] = arrKeyValue[0].replace('--', '');
      this.state[arrKeyValue[0]] = Number(arrKeyValue[1]);
    });
    // console.log(this.state);
    return this.state;
  }

  getMemoryTotal() {
    return this.memoryTotal;
  }

  getMemoryFreeValue() {
    return this.memoryFree;
  }

  getMemoryFree() {
    if (this.memoryFree >= this.state.limit) return { message: 'OK', free: this.memoryFree };
    return { message: 'Available memory is under the defined limit', free: this.memoryFree };
  }

  getMemoryAllocated() {
    return this.memoryBusy;
  }

  setLimit(newLimit) {
    this.state.limit = newLimit;
  }

  getLimit() {
    return this.state.limit;
  }

  run() {
    this.parseInputArguments();
    setInterval(() => {
      this.calc();
    }, this.state.rate);
  }
}

const app = new CRam();

module.exports = app;
