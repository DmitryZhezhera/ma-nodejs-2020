/*
в случае коллбеков ожидалось, что throwDice(callback) будет возвращать значение вызовом callback(null, randomIntegerInRangeOneToSix)
или ошибку callback(new Error(…))

function sum(a, b, callback) {
  callback(a + b);
}
sum(1, 2, (res) => {
  console.log(res);
});

setTimeout(() => {
    throwDice(() => {
        setTimeout(() => {
            throwDice(() => {
                ...
            })
        });
    })
});
*/

function throwDice(callback) {
  const random1 = Math.floor(Math.random() * 7);
  const random2 = Math.floor(Math.random() * 7);
  if (random1 === 0 || random2 === 0) callback(Error('Lost dice'));
  else callback(null, random1, random2);
}

function app() {
  console.log('=================');
  let sum = 0;
  setTimeout(() => {
    throwDice((err, res1, res2) => {
      if (err) {
        console.log(`HAVE AN ERROR ${err}`);
        return;
      }
      sum = res1 + res2;
      console.log(`number1=${res1} number2=${res2} sum ${sum}`);

      setTimeout(() => {
        /* eslint-disable */
        throwDice((err, res1, res2) => {
          /* eslint-enable */
          if (err) {
            console.log(`HAVE AN ERROR ${err}`);
            return;
          }
          sum = sum + res1 + res2;
          console.log(`number1=${res1} number2=${res2} sum ${sum}`);

          setTimeout(() => {
            /* eslint-disable */
            throwDice((err, res1, res2) => {
              /* eslint-enable */
              if (err) {
                console.log(`HAVE AN ERROR ${err}`);
                return;
              }
              sum = sum + res1 + res2;
              console.log(`number1=${res1} number2=${res2} sum ${sum}`);
            });
          }, 1000);
        });
      }, 1300);
    });
  }, 700);
}
app();
