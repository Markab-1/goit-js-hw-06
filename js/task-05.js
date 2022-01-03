const inputText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');

inputText.addEventListener("input", (event) => {
    outputText.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") { outputText.textContent = "Anonymous"; }
});
