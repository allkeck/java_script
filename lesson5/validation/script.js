let div = document.querySelector('div');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', function() {
    if (!/\d/.test(input.value)) {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});