const inputTextRef = document.querySelector('#name-input');
const outputTextRef = document.querySelector('#name-output');
const defaultText = "Anonymous"

inputTextRef.addEventListener("input", (event) => {
    const currentText = event.currentTarget.value;
    outputTextRef.textContent = currentText.trim() || defaultText;
});
