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
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
let currentOperator;
let previousNumber;
let currentNumber;

additionBtn.addEventListener("click", () => {
    setPreNumber(display.textContent);
    setOperator("addition");
    clearDisplay();
});
substractionBtn.addEventListener("click", () => {
    setPreNumber(display.textContent);
    setOperator("substraction");
    clearDisplay();
});
multiplicationBtn.addEventListener("click", () => {
    setPreNumber(display.textContent);
    setOperator("multiplication");
    clearDisplay();
});
divisionBtn.addEventListener("click", () =>{
    setPreNumber(display.textContent);
    setOperator("division");
    clearDisplay();
});
equalBtn.addEventListener("click", () => {
    setCurrNumber(display.textContent);
    showResult();
})
clearBtn.addEventListener("click", () => clearDisplay());

function setOperator(operator) {
    currentOperator = operator;
}

function setPreNumber(number) {
    previousNumber = Number(number);
}

function setCurrNumber(number) {
    currentNumber = Number(number);
}

function showResult() {
    display.textContent = operate(currentOperator, previousNumber, currentNumber);
}

function clearDisplay() {
    display.textContent = "";
}