async function myInfinity(START_NUMBER) {
  let lastWholeNumber = 0;
  let i = START_NUMBER;
  let j = 2;

  setInterval(() => {
    console.log(
      Date().toString(),
      ': -- IN PROCESS -- Biggest prime number found: ',
      lastWholeNumber,
    );
  }, 1000);

  setInterval(() => {
    if (i === j) {
      lastWholeNumber = i;
      i += 1;
      j = 2;
    } else if (i % j === 0) {
      i += 1;
      j = 2;
    } else j += 1;
  }, 0);
}

// LONG CALCS ON LARGE NUMBERS
/*
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
*/

myInfinity(3);
