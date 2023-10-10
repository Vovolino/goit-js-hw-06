const inputFontS = document.getElementById(`font-size-control`);
const abracadabra = document.getElementById(`text`);

abracadabra.style.fontSize = inputFontS.value + 'px';
function updateFontSize() {
    const fontSize = inputFontS.value + 'px';
    abracadabra.style.fontSize = fontSize;
};
inputFontS.addEventListener('input', updateFontSize);