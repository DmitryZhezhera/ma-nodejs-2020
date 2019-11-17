// console.log('sum_', sum(1, 1, 1));
// earth.toString();
// promise.then((resolve) => console.log(resolve));

const { task1 } = require('./task');
const { task2 } = require('./task');
const { task3 } = require('./task');

const boot = async () => {
  console.log(task1(1, 1, 1));
  await task3.then((resolve) => console.log(resolve));
  await task2.toString();
};

boot();
