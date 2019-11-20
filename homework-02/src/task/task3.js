const SomePromise = (miliseconds, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
      reject();
    }, miliseconds);
  });
};
// const somePromise = SomePromise(1000, 'somePromise');
module.exports = SomePromise(1000, 'somePromise');
