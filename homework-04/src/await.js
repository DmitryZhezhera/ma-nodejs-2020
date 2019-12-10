/*
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
*/

function throwDice(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random1 = Math.floor(Math.random() * 7);
      const random2 = Math.floor(Math.random() * 7);
      if (random1 === 0 || random2 === 0) reject(new Error('Lost dice'));
      console.log(
        `func1 ${Date().toString()} | random1:${random1} random2:${random2} sum:${random1 +
          random2}`,
      );
      resolve(random1 + random2);
    }, timeout);
  });
}

async function app() {
  console.log('===========');
  let result = 0;
  try {
    const curResult = await throwDice(700);
    result += curResult;
    result += await throwDice(1300);
    result += await throwDice(1000);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

app();
