
export const styleFunction =()=>{

        const style = `
        :root{
            --fw-Blod:600;
            --cs-wait: pointer;
            --cs-green-background: linear-gradient(120deg, #65dd9e, #e3e9b1);
            --card-title-color: #333;
            --input-background : rgb(38 169 38 / 60%);
            --cs-placeholder-white: rgb(221 241 221 / 60%);
            --cs-placeholder-Text-white:rgb(231 235 231 / 60%);
            --cs-white:rgb(122 163 95);
            --global-white: rgb(245,245,245);
        }
        *{
            margin:0;
            padding:0;
            box-sizing: border-box;
        }
        html{
            min-height:100%;
        }
        body{
            width:100%;
            height:100%;
            background:var(--cs-green-background) !important;
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
        .glass-card {
            background-color: rgba(144, 238, 144, 0.6);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
            padding: 20px;
        }
        .card-title{
            color:var(--cs-white);
        }
        .input-background{
            background:var(--input-background);
            border:none;
            outline:none;
        }
        .input-background:focus{
            background:var(--input-background);
            border:none;
            outline:none !important;
            box-shadow:none;
            color: var(--cs-placeholder-white) !important;
        }
        .input-background::placeholder{
            color: var(--cs-placeholder-Text-white) !important;
        }
        
        .result-title{
            color:var(--global-white);
        }
    `
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

};

