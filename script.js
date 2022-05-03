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
      if(displayedNum == '0' || previousKeyType == 'operator') {
        display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'modulus') {
      key.classList.add('is-depressed');
      // add custom attribute
      calculator.dataset.previousKeyType = 'operator';
    }

    if(action === 'decimal') {
      display.textContent = displayedNum + '.';
    }
    
    if(action === 'delete') {
      console.log('delete key!');
    }

    if(action === 'clear') {
      console.log('clear key!')
    }
    
    if(action === 'calculate') {
      console.log('equal key!')
    }

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  }
});

