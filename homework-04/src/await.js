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

async function app() {
  console.log('===========');
  let result = 0;
  const curResult = await lap(result, 700);
  result += curResult;
  result += await lap(result, 1300);
  result += await lap(result, 1000);
}

app();
