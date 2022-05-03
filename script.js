
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
