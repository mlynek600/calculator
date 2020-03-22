const resultWindow = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const divisionBtn = document.querySelector('.division');
const multiplicationBtn = document.querySelector('.multiplication');
const minusBtn = document.querySelector('.minus');
const plusBtn = document.querySelector('.plus');
const equalsBtn = document.querySelector('.equals');
const zeroBtn = document.querySelector('.zero');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');
let newNumber;
let firstNumber = 0;
let nextNumber = 0;
let multiOperationNumber = 0;
let result = 0;
let operation;

function writeNumber(event) {
  switch (event.target) {
    case zeroBtn:
      newNumber = 0;
      break;
    case oneBtn:
      newNumber = 1;
      break;
    case twoBtn:
      newNumber = 2;
      break;
    case threeBtn:
      newNumber = 3;
      break;
    case fourBtn:
      newNumber = 4;
      break;
    case fiveBtn:
      newNumber = 5;
      break;
    case sixBtn:
      newNumber = 6;
      break;
    case sevenBtn:
      newNumber = 7;
      break;
    case eightBtn:
      newNumber = 8;
      break;
    case nineBtn:
      newNumber = 9;
      break;
  }
  if (resultWindow.innerText == '0') {
    resultWindow.innerText = '';
  }
  if (resultWindow.innerText.length < 19) {
    resultWindow.innerText += newNumber;
  }
}

function clearing() {
  resultWindow.innerText = '0';
}

function backspace() {
  if (resultWindow.innerText != '0') {
    if (resultWindow.innerText.length > 1) {
      let resultArray = Array.from(resultWindow.innerText);
      resultArray.pop();
      resultWindow.innerText = resultArray.join('');
    } else {
      resultWindow.innerText = '0';
    }
  }
}

let counter = 0;

function calculate(event) {
  counter++;
  firstNumber = parseInt(resultWindow.innerText);
  switch (event.target) {
    case plusBtn:
      operation = 'addition';
      multiOperationNumber += firstNumber;
      break;
    case minusBtn:
      operation = 'subtraction';
      if (counter == 1) {
        multiOperationNumber = firstNumber;
        break;
      } else {
        multiOperationNumber -= firstNumber;
        break;
      }
    case divisionBtn:
      operation = 'division';
      if (counter == 1) {
        multiOperationNumber = firstNumber;
        break;
      } else {
        multiOperationNumber /= firstNumber;
        break;
      }
    case multiplicationBtn:
      operation = 'multiplication';
      if (counter == 1) {
        multiOperationNumber = firstNumber;
        break;
      } else {
        multiOperationNumber *= firstNumber;
        break;
      }
  }
  resultWindow.innerText = '0';
}

function equals() {
  nextNumber = parseInt(resultWindow.innerText);
  switch (operation) {
    case 'addition':
      result = multiOperationNumber + nextNumber;
      break;
    case 'subtraction':
      result = multiOperationNumber - nextNumber;
      break;
    case 'division':
      result = multiOperationNumber / nextNumber;
      break;
    case 'multiplication':
      result = multiOperationNumber * nextNumber;
      break;
  }
  resultWindow.innerText = result;
  multiOperationNumber = 0;
  counter = 0
}

zeroBtn.addEventListener('click', writeNumber);
zeroBtn.addEventListener('click', writeNumber);
oneBtn.addEventListener('click', writeNumber);
twoBtn.addEventListener('click', writeNumber);
threeBtn.addEventListener('click', writeNumber);
fourBtn.addEventListener('click', writeNumber);
fiveBtn.addEventListener('click', writeNumber);
sixBtn.addEventListener('click', writeNumber);
sevenBtn.addEventListener('click', writeNumber);
eightBtn.addEventListener('click', writeNumber);
nineBtn.addEventListener('click', writeNumber);
clearBtn.addEventListener('click', clearing);
backspaceBtn.addEventListener('click', backspace);
plusBtn.addEventListener('click', calculate);
minusBtn.addEventListener('click', calculate);
divisionBtn.addEventListener('click', calculate);
multiplicationBtn.addEventListener('click', calculate);
equalsBtn.addEventListener('click', equals);
