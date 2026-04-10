let currentInput = "";

const display1 = document.getElementById("display");
const clear = document.getElementById("clearDisplay");
const remove = document.getElementById("deletelast");
const operatorButtons = document.getElementsByClassName("operator");
const calculate = document.getElementById("calculate");
const numberButtons = document.getElementsByClassName("number");

for (let i = 0; i < numberButtons.length; i++) {
    const numberButton = numberButtons[i];
    numberButton.addEventListener("click", addNumberToDisplay);
}
function addNumberToDisplay(event) {
    const selectedNumber = event.target.innerText;
    currentInput += selectedNumber;
    display1.value = currentInput;
}

for (let i = 0; i < operatorButtons.length; i++) {
    const operatorButton = operatorButtons[i];
    operatorButton.addEventListener("click", addOperatorToDisplay);
}

function addOperatorToDisplay(event) {
    const selectedOperator = event.target.innerText;
    currentInput += selectedOperator;
    display1.value = currentInput;
}

clear.addEventListener("click", clearAll);

function clearAll() {
    currentInput = "0";
    display1.value = currentInput;
}

remove.addEventListener("click", deleteLastValue);

function deleteLastValue() {
    currentInput = currentInput.slice(0, -1);
    display1.value = currentInput;
}

calculate.addEventListener("click", calculateTotal);

function calculateTotal() {
    try {
        currentInput = eval(currentInput).toString();
        display1.value = currentInput;
    } catch {
        display1.value = "error";
        currentInput = "";
    }
}