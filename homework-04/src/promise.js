function throwDice() {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 7);
    if (random === 0) reject(new Error('Lost dice'));
    resolve(random);
  });
}

function lap(sum, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let num1 = 0;
      let num2 = 0;
      throwDice()
        .then((result) => {
          num1 = result;
          return throwDice();
        })
        .then((result) => {
          num2 = result;
          const sumResult = sum + num1 + num2;
          console.log('num1=', num1, ' num2=', num2, ' sumResult=', sumResult);
          resolve(sumResult);
        })
        .catch((err) => console.log(err));
    }, timeout);
  });
}

/*
function throwDice() {
  const rand = Math.floor(Math.random() * 7);
  if (rand === 0) throw new Error('Lost dice');
  return rand;
}

function lap(sum, timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //console.log(Date().toString(), ' pre sum_', sum);
      const num1 = throwDice();
      const num2 = throwDice();
      const result = sum + num1 + num2;
      console.log('num1=', num1, ' num2=', num2, ' result=', result);
      resolve(result);
    }, timeout);
  });
}
*/
(() => {
  console.log('===========');
  lap(0, 700)
    .then((result) => {
      return lap(result, 1300);
    })
    .then((result) => {
      return lap(result, 1000);
    })
    .catch((e) => {
      console.log(e);
    });
})();
