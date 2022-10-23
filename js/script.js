const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const displayInput = document.getElementById('display-input');
const clear = document.getElementById('clear');
const deleteInput = document.getElementById('deleteInput');
const percent = document.getElementById('percent');
const divider = document.getElementById('divider');
const times = document.getElementById('times');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const result = document.getElementById('result');

function getNum(num) {
    num.addEventListener('click', () => {
        displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(num.textContent) : displayInput.textContent + num.textContent;
    });
}
const number = [zero, one, two, three, four, five, six, seven, eight, nine];

number.map(value => getNum(value));
clear.addEventListener('click', () => {
    displayInput.innerText = 0;
});

deleteInput.addEventListener('click', () => {
    const str = displayInput.textContent;
    if (str.length == 1) {
        displayInput.innerText = 0;
    } else {
        displayInput.innerText = str.substring(0, str.length - 1);
    }
});

percent.addEventListener('click', () => {
    const values = [];
    values.push(displayInput.textContent + " ");
    values.push("%" + " ");
    displayInput.innerText = eval(displayInput.textContent + '/ 100');
});

function evaluate(symbolName, symbol) {
    symbolName.addEventListener('click', () => {
        const values = [];
        values.push(displayInput.textContent + " ");
        values.push(symbol + " ");
        displayInput.innerText = values.join('');
    });
}

evaluate(divider, "/");
evaluate(times, "*");
evaluate(minus, "-");
evaluate(plus, "+");
/*
divider.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('/');
    displayInput.innerText = values.join('');
    console.log(values);
});

times.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('*');
    displayInput.innerText = values.join('');
});

minus.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('-');
    displayInput.innerText = values.join('');
});

plus.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('+');
    displayInput.innerText = values.join('');
});
*/

result.addEventListener('click', () => {
    displayInput.textContent = eval(displayInput.textContent);
});
