const valueSpan = document.getElementById('value');
let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  updateValue();
}

function increment() {
  counterValue += 1;
  updateValue();
}

function updateValue() {
  valueSpan.textContent = counterValue;
}
