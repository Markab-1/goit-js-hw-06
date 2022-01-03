const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const value = document.querySelector('#value');
let currentValue = 0;

decrementBtn.addEventListener("click", () => {
    currentValue -= 1;
    value.textContent = currentValue;
});

incrementBtn.addEventListener("click", () => {
    currentValue += 1;
    value.textContent = currentValue;
});

