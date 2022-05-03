
const allClear = document.querySelector('.ac');
const memoryclear = document.querySelector('.mc');
const modulus = document.querySelector('.modulus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const dot = document.querySelector('.point');
const equal = document.querySelector('.equality');

const clickedNumber = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation]');

// display user input
const outputPreviousInput = document.getElementById('previousInput');
const outputCurrentInput = document.getElementById('currentInput');
outputCurrentInput.textContent = 0;

// calculator class takes all calculator's function
class Calculator {
  constructor(outputPreviousInput, outputCurrentInput) {
    this.outputPreviousInput = outputPreviousInput;
    this.outputCurrentInput = outputCurrentInput;
    this.clear();
  }
}


// clear function
clear() {
  this.currentOperand = '';
  this.previousOperand = '';
  this.operation = undefined;
}

// making hooked varaibles operate on calculator object
const calculator = new Calculator(outputPreviousInput, outputCurrentInput);

// get users input or appendNumber
let userInput = clickedNumber;
clickedNumber.forEach(button => {
  button.addEventListener('click', () => {
//    outputCurrentInput.textContent = button.innerText;
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(this.outputCurrentInput.innerText = currentOperand);
  })
});

// appendNumber function
appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return this.currentOperand = this.currentOperand.toString() + number.toString()
}

// operators function
operation.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
})

// add numbers
/*
function add() {
  let answer = userInput + userInput;
  return answer
}
*/