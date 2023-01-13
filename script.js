function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, preNumber, currNumber) {
    if (operator === "addition") {
        return add(preNumber, currNumber);
    } else if (operator === "substraction") {
        return substract(preNumber, currNumber);
    } else if (operator === "multiplication") {
        return multiply(preNumber, currNumber);
    } else if (operator === "division") {
        return divide(preNumber, currNumber);
    }
}

const display = document.querySelector("#display");
function updateDisplay(number) {
    if (display.textContent === "") {
        display.textContent = number;
    } else {
        display.textContent = display.textContent + number;
    }
        
} 

const numbers = document.querySelectorAll("#numbers");
[...numbers].map(number => {
    number.addEventListener("click", () => {
        updateDisplay(number.textContent)
    })
})

const additionBtn = document.querySelector("#addition-btn");
const substractionBtn = document.querySelector("#substraction-btn");
const multiplicationBtn = document.querySelector("#multiplication-btn");
const divisionBtn = document.querySelector("#division-btn");
let currentOperator;

additionBtn.addEventListener("click", () => setOperator("addition"));
substractionBtn.addEventListener("click", () => setOperator("substraction"));
multiplicationBtn.addEventListener("click", () => setOperator("multiplication"));
divisionBtn.addEventListener("click", () => setOperator("division"));

function setOperator(operator) {
    currentOperator = operator;
}