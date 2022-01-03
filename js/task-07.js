const inputControl = document.querySelector('input#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener("input", (event) => {
    console.log(event.currentTarget.value);
    text.style.fontSize = `${event.currentTarget.value}px`;
});