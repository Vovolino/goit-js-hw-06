const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});