
export const styleFunction =()=>{

        const style = `
        :root{
            --fw-Blod:600;
            --cs-wait: pointer;
        }
        #x-icon .fa-x {
            transition: 150ms all ease-in-out;
            color: var(--bs-gray-700);
        }

        #x-icon .fa-x:hover {
            color: var(--bs-gray-800);
        }
        .result-cercel{
            width:100px;
            height:100px;
            border-radius:50%;

        }
        .pointer{
            cursor:pointer;
        }
        .not-allowed{
            cursor: var(--cs-wait) !important;
        }
    `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

};