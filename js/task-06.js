const inputBlur = document.querySelector('#validation-input');

inputBlur.addEventListener('blur', () => {
    const inputValue = inputBlur.value.trim();
    const requiredLength = inputBlur.dataset.length;

    if (inputValue.length === parseInt(requiredLength)) {
        inputBlur.classList.remove('invalid');
        inputBlur.classList.add('valid');
        } else {
            inputBlur.classList.remove('valid');
        inputBlur.classList.add('invalid');
    }
});