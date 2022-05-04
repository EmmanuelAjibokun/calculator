const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.inputField');
/* const allClear = document.querySelector('.ac');
const memoryclear = document.querySelector('.mc');
const modulus = document.querySelector('.modulus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const dot = document.querySelector('.point');
const equal = document.querySelector('.equality'); */

// const clickedNumber = document.querySelectorAll('[data-number]');

// display user input
const display = document.getElementById('currentInput');
display.textContent = 0;

const getKeyType = key => {
  const { action } = key.dataset;
  if (!action) return 'number'
  if (action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide' ||
  action === 'modulus'
  ) return 'operator'
  // for everthing else 
  return action
}

const creatResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent;
  const action = key.dataset.action;
  const firstValue = state.firstValue;
  const modValue = state.modValue;
  const operator = state.operator;
  const previousKeyType = state.previousKeyType;
  const keyType = getKeyType(key)


  if(keyType === 'number') {
    return displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'
    ? keyContent
    : displayedNum + keyContent

//       calculator.dataset.previousKeyType = 'number'
  }

  if(keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.';
    return displayedNum;

//        calculator.dataset.previousKeyType = 'decimal';
  }

  if (keyType === 'operator') {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;

    return firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum

    key.classList.add('is-depressed');
    // add custom attribute
    calculator.dataset.previousKeyType = 'operator';
    calculator.dataset.operator = action;
  }

  if(keyType === 'clear') return 0 /*{
    if (key.textContent === 'AC') {
      calculator.dataset.firstValue = '';
      calculator.dataset.previousKeyType = '';
      calculator.dataset.modValue = '';
      calculator.dataset.operator = '';
    } else {
      key.textContent = 'AC'
    }

    display.textContent = 0;
    calculator.dataset.previousKeyType = 'clear'
  }*/

  if(keyType === 'calculate') {
    let firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    let secondValue = displayedNum;

    if (firstValue) {
      return previousKeyType === 'calculate'
      ? calculate(displayedNum, operator, modValue)
      : calculate(firstValue, operator, displayedNum)
    } else {
      return displayedNum
    }
  }
}

// listen for all keys pressed

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    const resultString = creatResultString(e.target, displayedNum, calculator.dataset)
    
    if(action === 'delete') {
      console.log('delete key!');
    }

    calculator.dataset.modValue = secondValue;
    calculator.dataset.previousKeyType = 'calculate';

    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
  }
});

function calculate(n1, operator, n2) {
  const firstNum = parseFloat(n1);
  const secondNum = parseFloat(n2);

  if (operator === 'add') return firstNum + secondNum;
  if (operator === 'subtract') return firstNum - secondNum;
  if (operator === 'multiply') return firstNum * secondNum;
  if (operator === 'divide') return firstNum / secondNum;
  if (operator === 'modulus') return firstNum % secondNum;
}
