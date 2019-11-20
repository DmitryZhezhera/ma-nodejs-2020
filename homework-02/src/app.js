const { Task1: sum, Task2: Earth, Task3 } = require('./task');

const boot = async () => {
  console.log(sum);
  console.log(await Task3);
  Earth.toString();
};

boot();
