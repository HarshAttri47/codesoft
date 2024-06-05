let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;

function appendNumber(number) {
    if (display.value.includes('.') && number === '.') return;
    display.value = display.value.toString() + number.toString();
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    previousOperand = '';
    operation = null;
}

function setOperation(op) {
    if (display.value === '') return;
    if (currentOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = display.value;
    display.value = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(display.value);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    display.value = computation;
    operation = null;
    previousOperand = '';
    currentOperand = computation;
}
