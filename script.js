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
const operations = document.querySelectorAll('[data-operation]');

// display user input
const outputPreviousInput = document.getElementById('previousInput');
const outputCurrentInput = document.getElementById('currentInput');
outputCurrentInput.textContent = 0;

// listen for all keys pressed

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    
    if(!action) {
      console.log('number key!')
    }
    
    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide' || action === 'modulus') {
      console.log('operation key!')
    }

    if(action === 'decimal') {
      console.log('decimal key!')
    }
    
    if(action === 'delete') {
      console.log('delete key!')
    }

    if(action === 'clear') {
      console.log('clear key!')
    }
    
    if(action === 'calculate') {
      console.log('equal key!')
    }
  }
});

