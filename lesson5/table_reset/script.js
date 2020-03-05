let btnClear = document.querySelector('.btn-reset');
let mainTable = document.querySelector('.main-table');

function clearTable(table) {
    let tableСell = table.getElementsByTagName('td');
    for (let i = 0; i < tableСell.length; i++) {
        tableСell[i].innerText = '';
    }
}