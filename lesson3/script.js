function primaryNumbers (n = 100) {
  let k = 2;
  let primaryNumbersArray = [];
  while (k < n) {
    let i = 0;
    let isPrime = true;
    while (i < primaryNumbersArray.length) {
      if (k % primaryNumbersArray[i] === 0) {
        isPrime = false;
        break;
      }
      i++;
    }
    if (isPrime) {
      primaryNumbersArray.push(k);
    }
    k++;
  }
  console.log(primaryNumbersArray);
}

primaryNumbers();



let basket = [
  // название, кол, цена за ед. изм.
  ['молоко', 1, 300],
  ['сыр', 2, 400],
  ['колбаса', 2, 500],
  ['яблоки', 2, 80],
  ['рыба', 2, 450],
  ['хлеб', 1, 47]
]

function countBasketPrice (basketEntity) {
  let basketPrice = 0;
  let i = 0;
  while (i < basketEntity.length) {
    basketPrice += basketEntity[i][1] * basketEntity[i][2];
    i++;
  }
  return basketPrice;
}

console.log('Итого: ' + countBasketPrice(basket) + ' руб.');




/*
    4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
    for(…){// здесь пусто}
*/

for (let i = 0; i < 9; console.log(i++)) {}




/*
    5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
*/

function repeat (symbol, count) {
  let string = '';
  for (let i = 0; i < count; i++) {
    string += symbol;
  }
  return string;
}

for (let i = 1; i < 21; i++) {
  console.log(repeat('x', i));
}