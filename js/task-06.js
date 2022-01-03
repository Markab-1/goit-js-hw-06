const inputText = document.querySelector('input#validation-input');



inputText.addEventListener("blur", () => {
    if (inputText.value.length < inputText.dataset.length) {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
    else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    };
});