const inputForm = document.querySelector('.login-form');

inputForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (!email.value || !password.value) {
        return alert("Please fill in all the fields!");
    }
       
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, fieldName) => {
        console.log(fieldName,":", value);
    });

    event.currentTarget.reset();
    
};