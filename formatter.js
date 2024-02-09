import { resultFunction } from "./result.js";

export const numberFormatter =(number, card,
     cardTitle, resultCircle, resultCounter,resultText)=>{

    const givenNumber = number.value;
    console.log(givenNumber);
    let thousand = 1000;
    let million = 1000000;
    let billion = 1000000000;
    let trillion = 1000000000000;

    let result;

    if(givenNumber<0 || isNaN(givenNumber)){
    resultFunction(card, 'd-none', 'd-flex',
     cardTitle, 'd-none', 'd-flex', 'var(--bs-danger)',
      'error occured !must provide a valid number !!',
       resultCircle,null, null,resultCounter, null, null,
        null, resultText, null, null, null, null);
        return;
    }

    if (givenNumber>=thousand) {
        result = givenNumber % thousand ===0 ?
        (givenNumber / thousand) + 'K' : (givenNumber / thousand).toFixed(1) + 'K'
    }

    if (givenNumber>=million){
        result = givenNumber % million ? 
                (givenNumber / million) + 'M' :
                (givenNumber / million).toFixed(1) + 'M'
    }

    if (givenNumber>=billion) {
        result = givenNumber % billion ?
                 (givenNumber / billion) + 'B' :
                 (givenNumber / billion).toFixed(1) + 'B';
    }

    if (givenNumber >= trillion) {
        result = givenNumber % trillion === 0 ?
                 (givenNumber / trillion) + 'T' :
                 (givenNumber / trillion).toFixed(1) + 'T'
    }

    card.classList.remove('d-none');
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
    
}