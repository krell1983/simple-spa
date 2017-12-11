import * as initialState from './initialState.js';
let globalState = initialState;
import {renderDom, globalStateChange} from './simpleSPA.js';

globalState = renderDom(globalState);
globalState = globalStateChange(globalState,'globalState.user.userNumber', 10);

document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});