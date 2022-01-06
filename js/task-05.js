const inputText = document.querySelector('input#name-input');
const outputText = document.querySelector('span#name-output');
const defaultText = "Anonymous"

inputText.addEventListener("input", (event) => {
    const currentText = event.currentTarget.value;
    outputText.textContent = currentText;
    outputText.textContent = currentText.trim() || defaultText;
});
