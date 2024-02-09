export const resetCode= (title, resultCircle, resultText)=>{
    title.classList.remove('d-flex');
    title.classList.add('d-none');
    title.textContent = '';
    resultCircle.classList.remove('d-flex');
    resultCircle.classList.add('d-none');
    resultText.textContent = '';
    resultText.classList.remove('d-flex');
    resultText.classList.add('d-none')
}