let i1 = document.getElementById('firstInput');
let i2 = document.getElementById('secondInput');
let operation = document.getElementById('operations');
const result = document.getElementById('result');
const form = document.querySelector('form');

form.addEventListener('submit', calc);

function calc(event) {
  event.preventDefault();
  if (operation.value === '+') {
    result.innerHTML = Math.round(Number(i1.value) + Number(i2.value));
  }
  if (operation.value === '-') {
    result.innerHTML = Math.round(Number(i1.value) - Number(i2.value));
  }
  if (operation.value === 'X') {
    result.innerHTML = Math.round(Number(i1.value) * Number(i2.value));
  }
  if (operation.value === '/') {
    result.innerHTML = Math.round(Number(i1.value) / Number(i2.value));
  }
}
