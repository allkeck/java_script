function numberToObj (n) {
  let numberObj = {};
  let keysQueue = ['сотни', 'десятки', 'единицы'];
  if (n < 1000) {
    while (n > 0) {
      let tempoResult = n / 10;
      let divResult = n % 10;
      numberObj[keysQueue.pop()] = divResult;
      n = Math.floor(tempoResult);
    }
  } else {
    console.log('Число больше 999!')
  }

  return numberObj;
}

let resultJob = numberToObj(375);

console.log(resultJob);

/* --- */

