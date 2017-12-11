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
    console.log(globalState);
    console.log('%c[Global State Change]:' + '%c ' + state + ':%c' + value, 'background: #1e5adb; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#1e5adb;');
    eval(`${state} = "${value}"`);
    initSimpleSPA(globalState ,state, value);
    return globalState
}
