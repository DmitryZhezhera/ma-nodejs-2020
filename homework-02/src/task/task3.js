function SomePromise(miliseconds, text) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(text);
      reject();
    }, miliseconds);
  });
}
const somePromise = SomePromise(1000, 'somePromise');
module.exports = somePromise;
