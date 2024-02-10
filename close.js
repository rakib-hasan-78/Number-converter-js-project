import { resetCode } from "./reset.js";
import { stateChange } from "./stateClear.js";

export const close = (body, click, input, text, placeholder, title, resultCircle, resultText)=>{
    body.classList.remove('d-flex');
    body.classList.add('d-none');
    let defaultText = text;
    let defaultPlaceholder = placeholder;
    stateChange(click, 'btn-danger','btn-success',defaultText, false, input, false, defaultPlaceholder);
    resetCode(title, resultCircle, resultText);
};