const { Task1: sum, Task2: Earth, Task3 } = require('./task');

const boot = async () => {
  console.log(sum);
  await Task3.then((resolve) => console.log(resolve));
  Earth.toString();
};

boot();
