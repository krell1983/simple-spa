//import {Matrix} from './initialState.js';

let store = {
    PlayerData : {
    'Name': '',
    'XP': 0,
    'Level': 1
  }
};

function changeStore (store) {
    
    let NewName = {Name: 'ASS-FACE'};
    const newStore = {
      ...store,
      PlayerData: {...NewName, ...store.PlayerData}
    };
    return (newStore);
}

console.log(123);

console.log(store);
store = changeStore(store);
console.log(store);
//var xxx = document.querySelectorAll("div");
/*
var xxx = document.querySelectorAll('[data-link]');
console.log(xxx);
console.log(xxx[0].dataset);
console.log(xxx[0].dataset.link);
*/


//xxx[0].innerHTML = '687';
/*
 * "[data-foo='1']"
NewMatrix();
let someObject = {};
let newObject = {...someObject, aProperty: true};
console.log(Matrinx);
console.log('dupa')
*/

