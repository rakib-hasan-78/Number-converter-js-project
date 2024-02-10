export const resetCode= (title, resultCircle, resultText)=>{
    title.style.removeProperty('color'); 
    title.classList.remove('d-flex');
    title.classList.add('d-none');
    title.textContent = '';
    // resultCircle.style.removeProperty('color'); 
    resultCircle.classList.remove('d-flex');
    resultCircle.classList.add('d-none');
    resultText.style.removeProperty('color'); 
    resultText.textContent = '';
    resultText.classList.remove('d-flex');
    resultText.classList.add('d-none')
}