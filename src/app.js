import * as initialState from './initialState.js';
let globalState = initialState;
import {renderDom, globalStateChange} from './simpleSPA.js';

globalState = renderDom(globalState);

/* APP Code */
function callButton (e){
    const callNumber = -Number(e.srcElement.innerHTML);
globalStateChange(globalState,'globalState.user.userNumber', globalState.user.userNumber-callNumber)
}

const DomButtons = document.querySelectorAll('[data-button-calc]');
DomButtons.forEach(domItem => {
    domItem.addEventListener("click", callButton);
});