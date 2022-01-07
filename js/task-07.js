const inputControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = `${inputControlRef.value}px`;

inputControlRef.addEventListener("input", (event) => {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
});