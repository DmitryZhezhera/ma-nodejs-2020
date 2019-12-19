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
      `Total system memory: ${this.memoryTotal.toFixed(3)} MB
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

  run() {
    this.parseInputArguments();
    setInterval(() => {
      this.calc();
    }, this.state.rate);
  }
}

const app = new CRam();
app.run();
