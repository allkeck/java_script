let a = parseInt(prompt('Укажите певрое число'));
let b = parseInt(prompt('Укажите второе число'));

function checkOperation(fOp, sOp) {
  if(fOp >= 0 && sOp >= 0) alert(fOp - sOp);
  else if(fOp <= 0 && sOp <= 0) alert(fOp * sOp);
  else alert(fOp + sOp);
}

checkOperation(a, b);

let a1 = parseInt(prompt('Укажите число от 0 до 15'));

switch(true) {
  case (a1 >= 0 && a1 < 16):
    for(let i = a1; i < 16; i++) {
      alert(i);
    }
    break;
  default:
    alert('Число должно быть в диапозоне от 0 до 15!');
}

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  switch(operation) {
    case '+':
      alert(sum(arg1, arg2));
      break;
    case '-':
      alert(diff(arg1, arg2));
      break;
    case '*':
      alert(mul(arg1, arg2));
      break;
    case '/':
      alert(div(arg1, arg2));
      break;
  }
}

function power(val, pow) {
  if(pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}