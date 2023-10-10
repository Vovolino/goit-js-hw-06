const nameInput = document.querySelector(`#name-input`);
const textSpan = document.querySelector(`#name-output`);

nameInput.addEventListener(`input`, () => {
    const inputValue = nameInput.value.trim();
    if (inputValue === ``) {
        textSpan.textContent = `Anonymous`;
    } else {
        textSpan.textContent = inputValue;
    }
    console.log(inputValue);
});