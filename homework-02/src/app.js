const { task1: sum } = require('./task');
const { task2: earth } = require('./task');
const { task3 } = require('./task');

const boot = async () => {
  console.log(sum(1, 1, 1));
  await task3.then((resolve) => console.log(resolve));
  await earth.toString();
};

boot();
