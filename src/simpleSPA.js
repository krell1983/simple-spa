export function renderDom(globalState, state) {

    const domLink = document.querySelectorAll('[data-link]');
    const domChange = document.querySelectorAll('[data-change]');

    function onSimpleSPAChange(e) {
        globalStateChange(globalState ,e.srcElement.dataset.change, e.srcElement.value.replace(/[^a-zA-Z0-9 ]/g, ""));
    }

    domLink.forEach(domItem => {
        const selector = domItem.dataset.link;
        if (selector && !state || state === selector) {
            domItem.innerHTML = eval(selector);
        }
    });

    domChange.forEach(domItem => {
        const selector = domItem.dataset.change;
        if (selector && !state || state === selector) {
            domItem.value = eval(selector);
        }
    });

    if(!state) {
        domChange.forEach(domItem => {
            domItem.addEventListener("change", onSimpleSPAChange);
        });
    }
    return globalState
}

export function globalStateChange(globalState ,state, value) {

    if(eval(`${state}`) === value){
        console.log('%c[Global State No Change Same Value]:' + '%c ' + state + ':%c' + value, 'background: #084cb2; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#084cb2;');
    } else {
        console.log('%c[Global State]:' + '%c ' + state + ':%c' + eval(`${state}`), 'background: #e07300; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#e07300;');
        console.log('%c[Global State Change]:' + '%c ' + state + ':%c' + value, 'background: #007a0a; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#007a0a;');

        if(typeof value === 'number') {
            eval(`${state} = ${value}`);
        }else {
            eval(`${state} = "${value}"`);
        }
        renderDom(globalState ,state, value);
        return globalState
    }

}
