const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.inputField');
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

// display user input
const display = document.getElementById('currentInput');
display.textContent = 0;

// listen for all keys pressed

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    
    if(!action) {
      if(displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }

      calculator.dataset.previousKeyType = 'number'
    }
    
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'modulus') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

      if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
        const calcValue = calculate(firstValue, operator, secondValue);
        display.textContent = calcValue;

        //update calculated value as first value
        calculator.dataset.firstValue = calcValue;
      } else {
        // if they are no calculations, set displayedNum as the firstValue
        calculator.dataset.firstValue = displayedNum;
      }

      key.classList.add('is-depressed');
      // add custom attribute
      calculator.dataset.previousKeyType = 'operator';
      calculator.dataset.operator = action;
    }

    if(action === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
      } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
        display.textContent = '0.'
      }

      calculator.dataset.previousKeyType = 'decimal';
    }
    
    if(action === 'delete') {
      console.log('delete key!');
    }

    if(action === 'clear') {
      console.log('clear key!')
      calculator.dataset.previousKeyType = 'clear'
    }
    
    if(action === 'calculate') {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondValue = displayedNum;

      if (firstValue) {
        if (previousKeyType === 'calculate') {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }

      display.textContent = calculate(firstValue, operator, secondValue);
      }

      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = 'calculate';
    }

    Array.from(key.parentNode.children)
    .forEach(k => k.classList.remove('is-depressed'))
  }
});

function calculate(n1, operator, n2) {
  let result = '';

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  } else if (operator === 'modulus') {
    result = parseFloat(n1) % parseFloat(n2);
  }

  return result
}
