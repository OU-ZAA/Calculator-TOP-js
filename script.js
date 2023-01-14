let currentOperand = "";
let previousOperand = "";
let currentOperator = undefined;

const numberButtons = document.querySelectorAll("#number");
const additionBtn = document.querySelector("#addition-btn");
const substractionBtn = document.querySelector("#substraction-btn");
const multiplicationBtn = document.querySelector("#multiplication-btn");
const divisionBtn = document.querySelector("#division-btn");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete-btn");
const previousOperandText = document.querySelector("#previous-operand");
const currentOperandText = document.querySelector("#current-operand");

numberButtons.forEach(button => 
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
        updateDisplay();
    })
);
additionBtn.addEventListener("click", () => {
    setOperator(additionBtn.textContent);
    updateDisplay();
});
substractionBtn.addEventListener("click", () => {
    setOperator(substractionBtn.textContent);
    updateDisplay();
});
multiplicationBtn.addEventListener("click", () => {
    setOperator(multiplicationBtn.textContent);
    updateDisplay();
});
divisionBtn.addEventListener("click", () => {
    setOperator(divisionBtn.textContent);
    updateDisplay();
});
equalBtn.addEventListener("click", () => {
    operate(previousOperand, currentOperand)
    updateDisplay()
})
clearBtn.addEventListener("click", () => {
    clear();
    updateDisplay();
});
deleteBtn.addEventListener("click", () => {
    deleteNumber();
    updateDisplay();
});
window.addEventListener("keydown", handleKeyboerdInput);

function handleKeyboerdInput(e) {
    if ((e.key >= 0 && e.key <= 9) || e.key === ".") {
        appendNumber(e.key);
        updateDisplay();
    }
    if (e.key === "=" || e.key === "Enter") {
        operate(previousOperand, currentOperand);
        updateDisplay();
    }
    if (e.key === "Escape") {
        clear();
        updateDisplay();
    }
    if (e.key === "Backspace") {
        deleteNumber();
        updateDisplay();
    }
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
        setOperator(e.key);
        updateDisplay();
    }
}

function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return
    currentOperand += number;
}

function updateDisplay() {
    currentOperandText.textContent = currentOperand;
    if (currentOperator !== undefined) {
        previousOperandText.textContent = `${previousOperand} ${currentOperator}`; 
    } else {
        previousOperandText.textContent = "";
    }   
}

function setOperator(operator) {
    if (currentOperand === "") return
    if (previousOperand !== "") {
        operate(previousOperand, currentOperand);
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = "";
} 

function operate(a, b) {
    a = Number(a);
    b = Number(b);
    let computation;
    switch (currentOperator) {
        case "+":
            computation = add(a, b)
            break;
        case "-":
            computation = substract(a, b)
            break
        case "*":
            computation = multiply(a, b)
            break
        case "/":
            if (b === 0) return showError();
            computation = divide(a, b)
            break
    }
    currentOperand = computation;
    currentOperator = undefined;
    previousOperand = "";
}

function clear() {
    currentOperand = "";
    previousOperand = "";
    currentOperator = undefined;
}

function deleteNumber() {
    currentOperand = currentOperand.slice(0, -1);
}

function showError() {
    alert("can't divide by 0!");
    clear();
    updateDisplay();
}

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