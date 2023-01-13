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

function updateDisplay(number) {
    const display = document.querySelector("#display");
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