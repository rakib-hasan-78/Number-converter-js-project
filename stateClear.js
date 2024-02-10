export const stateChange =(targetClick,presentClass,nextClass,text,firstBoolean,input,secondBoolean,placeholder)=>{


    targetClick.classList.remove(presentClass);
    targetClick.classList.add(nextClass);
    targetClick.textContent = text;
    targetClick.disabled = firstBoolean;
    input.disabled = secondBoolean;
    input.placeholder = placeholder;
}