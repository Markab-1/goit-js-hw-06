const inputFormRef = document.querySelector('.login-form');

inputFormRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;
    if (!email.value || !password.value) {
        return alert("Please fill in all the fields!");
    }
     
    const data = {
        email: email.value,
        password: password.value.trim(),
    }
    console.log(data);

    event.currentTarget.reset();
};