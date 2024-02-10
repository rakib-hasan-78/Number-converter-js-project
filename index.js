import {styleFunction} from './style.js';
import { clickListener } from './clickListener.js';
import { close } from './close.js';

document.getElementById('root').innerHTML=`
    <header id="header">
        <main>
            <div class="container">
                <div class="content mt-5">
                    <h1 id="project-title" class="text-center text-uppercase fw-bolder card-title">formatting number to shorter version.</h1>
                    <div class="row gy-3 gx-3 p-5 justify-content-center align-items-center">
                        <div class="col-xl-5">
                            <div class="card glass-card p-2 pb-4">
                                <div class="card-body">
                                <h3 class="card-title text-center text-capitalize fs-4 fw-bold card-title">convert any number</h3>
                                </div>
                                <div class="cardE-element">
                                    <input id="number-input" type="text" class="form-control form-control-sm fw-bold fs-5 text-center text-capitalize input-background" placeholder="provide your number to convert"/>
                                    <button id="btn" class="btn btn-success d-flex mx-auto mt-3 text-capitalize fs-4 fw-bolder"> convert the number </button>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </header>
    <section id="result-section" class="w-100">
        <div class="container">
            <div class="row gy-3 gx-3 justify-content-center align-items-center">
                <div class="col-xl-5">
                    <div id="card" class="card glass-card d-none p-2">
                        <div class="card-body d-flex justify-content-end align-items-center fs-4 ">
                         <span id="x-icon" class="pointer"><i class="fa-solid fa-x"></i></span>
                        </div>
                        <div class="cardE-element">
                            <h3 id="resultTitle" class="d-none text-center text-uppercase align-items-center justify-content-center fw-bolder"></h3>
                            <div id="result-circle" class="result-cercel p-3 border d-none justify-content-center align-items-center mx-auto shadow-lg">
                                <h3 id="result-counter" class="d-none result-title"></h3>
                            </div>
                            <p id="result-text" class="d-none justify-content-center lead text-center text-capitalize fs-4"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="mt-5 w-100">
        <main>
        <div class="container pt-5">
            <div class="footer-content pt-5">
                <p class="lead text-center text-capitalize m-0 p-0 pt-5 card-title fw-bold text-white">&copy; ${new Date().getFullYear()} all the rights reserved.</p>
            </div>
        </div>
        </main>
    </footer>

`
const numberInput = document.getElementById('number-input');
const card = document.getElementById('card');
const title = document.getElementById('resultTitle');
const resultCircle = document.getElementById('result-circle');
const resultCounter = document.getElementById('result-counter');
const resultText = document.getElementById('result-text');
const btn = document.getElementById('btn');
const xIcon = document.getElementById('x-icon');

let btnContent = btn.textContent;
let inputPlaceholder = numberInput.placeholder;



styleFunction();
clickListener(btn, numberInput, card, title, resultCircle, resultCounter, resultText);
xIcon.addEventListener('click', () => close(card, btn, numberInput, btnContent, inputPlaceholder, title, resultCircle, resultText));
