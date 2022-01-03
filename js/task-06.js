const inputText = document.querySelector('input#validation-input');

inputText.addEventListener("blur", () => {
    if (inputText.value.length < inputText.dataset.length) {
        inputText.classList.add('invalid');
    }
    else {inputText.classList.add('valid');};
});