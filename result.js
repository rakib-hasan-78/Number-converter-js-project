card.classList.remove('d-none') || ``;
card.classList.add('d-flex');
cardTitle.classList.remove('d-none');
cardTitle.classList.add('d-flex');
cardTitle.style.cssText=`
    color:var(--bs-form-valid-color) !important;
`
cardTitle.textContent = 'successful!!'.toUpperCase();
resultCircle.classList.remove('d-none');
resultCircle.classList.add('d-flex');
resultCounter.classList.remove('d-none');
resultCounter.classList.add('d-flex');
resultCounter.innerText= `${result}`;
resultText.classList.remove('d-none');
resultText.classList.add('d-flex');
resultText.style.cssText=`
    color:var(--bs-form-valid-color) !important;
    font-weight:600;
`;
resultText.innerText = `${result} is shortcut of ${givenNumber} `;