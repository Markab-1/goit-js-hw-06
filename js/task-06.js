const inputTextRef = document.querySelector('#validation-input');

inputTextRef.addEventListener("blur", () => {
    if (inputTextRef.value.length !== Number(inputTextRef.dataset.length)) {
        inputTextRef.classList.remove('valid');
        inputTextRef.classList.add('invalid');
    }
    else {
        inputTextRef.classList.remove('invalid');
        inputTextRef.classList.add('valid');
    };
});