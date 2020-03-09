function insert(num) {
  document.form.screen.value += num;
}

function clean() {
  document.form.screen.value = '';
}

function backSpace() {
  document.form.screen.value = document.form.screen.value.slice(0, -1);
}

function insertOp(operation) {
  let screen = document.form.screen;
  let lastChar = screen.value.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    screen.value = screen.value.slice(0, -1) + operation;
  } else {
    screen.value += operation;
  }
}

function myEval() {
  let expression = document.form.screen.value;
  let lastChar = expression.slice(-1);
  if (!'+-*/'.includes(lastChar) && expression !== '') {
    document.form.screen.value = eval(expression);
  }
}

document.addEventListener('keyup', function(event) {
  if ('0123456789'.includes(event.key)) {
    insert(event.key);
    return;
  }
  if ('+-*/'.includes(event.key)) {
    insertOp(event.key);
    return;
  }
  if (event.key === 'Backspace') {
    event.preventDefault();
    backSpace();
    return;
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    myEval();
    return;
  }
});