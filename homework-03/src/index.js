/*
async function Infinity(START_NUMBER) {
  let lastWholeNumber = 0;

  setInterval(() => {
    console.log(
      Date().toString(),
      ': -- IN PROCESS -- Biggest prime number found: ',
      lastWholeNumber,
    );
  }, 1000);

  let i = START_NUMBER;
  setInterval(() => {
    let isWholeNumber = true;
    //---

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isWholeNumber = false;
        break;
      }
    }
    //---
    if (isWholeNumber) lastWholeNumber = i;
    i++;
  }, 0);
}

function noDivisionRemainder(I, J) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (I % J == 0) resolve(true);
      else resolve(false);
      reject();
    }, 0);
  });
}
*/

// LONG CALCS ON LARGE NUMBERS

function myInfinity(START_NUMBER) {
  let lastWholeNumber = 0;

  setInterval(() => {
    console.log(
      Date().toString(),
      ': -- IN PROCESS -- Biggest prime number found: ',
      lastWholeNumber,
    );
  }, 1000);

  let i = START_NUMBER;
  setInterval(() => {
    let isWholeNumber = true;
    //---
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        isWholeNumber = false;
        break;
      }
    }
    //---
    if (isWholeNumber) lastWholeNumber = i;
    i += 1;
  }, 0);
}

myInfinity(1000000000);
