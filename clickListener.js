import { numberFormatter } from './formatter.js';
import { resultFunction, thousand } from './result.js';
import { stateChange } from './stateClear.js';

export function clickListener(click, numberInput, card, title, resultCircle, resultCounter, resultText) {

    
    click.addEventListener('click', (e) => {
        e.preventDefault();
        let number = numberInput.value;

        if (number.trim() === '') {
            resultFunction(card, 'd-none', 'd-flex', title, 'd-none', 'd-flex', 'var(--bs-danger)', 'Error! Empty search', resultCircle, null, null, resultCounter, null, null, null, resultText, null, null, null, null);
            return;
        } else if (number <= 0) {
            resultFunction(card, 'd-none', 'd-flex', title, 'd-none', 'd-flex', 'var(--bs-danger)', `Error! ${number} not accepted. Provide at least 4 digit positive number!`, resultCircle, null, null, resultCounter, null, null, null, resultText, null, null, null, null);
            numberInput.value = '';
            return;
        } else if (number < thousand) {
            resultFunction(card, 'd-none', 'd-flex', title, 'd-none', 'd-flex', 'var(--bs-form-valid-color)', `Regular number.`, resultCircle, 'd-none', 'd-flex', resultCounter, 'd-none', 'd-flex', number, resultText, 'd-none', 'd-flex', 'var(--bs-code-color)', '600');
            numberInput.value = '';
            return;
        } else {
            numberFormatter(numberInput, card, title, resultCircle, resultCounter, resultText);
            stateChange(click, 'btn-success','btn-danger','click disabled',true, numberInput, true, 'number input disabled');
            numberInput.value = '';
        }
    });
}
