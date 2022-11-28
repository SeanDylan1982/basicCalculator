let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
firstNumber.value = "";
secondNumber.value = "";
let total = 0;
let display = document.getElementById("display");
let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let multiplyBtn = document.getElementById("multiply");
let divideBtn = document.getElementById("divide");
let equalsBtn = document.getElementById("equals");
let clearBtn = document.getElementById("clear");

function clear() {
  display.textContent = 0;
  firstNumber.value = "";
  secondNumber.value = "";
}
clearBtn.addEventListener("click", clear);

function add() {
  total = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
  display.textContent = parseFloat(total);
}
addBtn.addEventListener("click", add);

function subtract() {
  total = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
  display.textContent = total;
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
  total = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
  display.textContent = total;
}
multiplyBtn.addEventListener("click", multiply);

function divide() {
  total = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
  display.textContent = total;
}
divideBtn.addEventListener("click", divide);
