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
let values = [];

zero.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(zero.textContent) : displayInput.textContent + zero.textContent;
});

one.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(one.textContent) : displayInput.textContent + one.textContent;
});

two.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(two.textContent) : displayInput.textContent + two.textContent;
});

three.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(three.textContent) : displayInput.textContent + three.textContent;
});

four.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(four.textContent) : displayInput.textContent + four.textContent;
});

five.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(five.textContent) : displayInput.textContent + five.textContent;
});

six.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(six.textContent) : displayInput.textContent + six.textContent;
});

seven.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(seven.textContent) : displayInput.textContent + seven.textContent;
});

eight.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(eight.textContent) : displayInput.textContent + eight.textContent;
});

nine.addEventListener('click', () => {
    displayInput.innerText = displayInput.textContent == '0' ? parseFloat(displayInput.textContent) + parseFloat(nine.textContent) : displayInput.textContent + nine.textContent;
});

clear.addEventListener('click', () => {
    displayInput.innerText = 0;
    values = [];
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
    values = [];
    // values.push(displayInput.textContent);
    // values.push('/');
    displayInput.innerText = eval(displayInput.textContent + '/ 100');
});

divider.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('/');
    displayInput.innerText = values.join('');
});

times.addEventListener('click', () => {
    values = [];
    values.push(displayInput.textContent);
    values.push('X');
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

result.addEventListener('click', () => {
    values = [];
    displayInput.textContent = eval(displayInput.textContent);
});
