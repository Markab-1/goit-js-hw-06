const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let currentValue = 0;

decrementBtnRef.addEventListener("click", decrement); 
incrementBtnRef.addEventListener("click", increment); 

function decrement() {
    currentValue -= 1;
    value.textContent = currentValue;
};

function increment() {
    currentValue += 1;
    value.textContent = currentValue;
};