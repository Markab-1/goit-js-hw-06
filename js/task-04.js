const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let currentValue = 0;

decrementBtn.addEventListener("click", decrement); 

incrementBtn.addEventListener("click", increment); 

function decrement() {
    currentValue -= 1;
    value.textContent = currentValue;
};

function increment() {
    currentValue += 1;
    value.textContent = currentValue;
};