let globalState = {
    user: {
        userFirstName: 'name1',
        userSecondName: 'secondName',
        userNumber: 1,
        testArray: [0, 1, 2, 4, 5],
        testObject: {
            test1: 1,
            test2: 2,
            test3: 3,
        }
    },
    db: {
        t1: 1,
        t2: 2,
        t3: 3,
        t4: 4,
        t5: 5,
    }
};

function initSimpleSPA(state) {
    const domLink = document.querySelectorAll('[data-link]');
    const domChange = document.querySelectorAll('[data-change]');

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

    domChange.forEach(domItem => {
        domItem.addEventListener("change", onSimpleSPAChange);
    });
}

function onSimpleSPAChange(e) {
    globalStateChange(e.srcElement.dataset.change, e.srcElement.value.replace(/[^a-zA-Z0-9 ]/g, ""));
}

function globalStateChange(state, value) {
    console.log('%c[Global State Change]:'+ '%c ' +state+':%c' + value, 'background: #1e5adb; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#1e5adb;');
    eval(`${state} = "${value}"`);
    initSimpleSPA(state, value);
}

initSimpleSPA();
globalStateChange('globalState.user.userNumber', 10);

//globalStateChange('globalState.user.userName', 'newName');
//console.log(globalState);