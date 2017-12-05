let userData = '';
let domLink = document.querySelectorAll('[data-link]');
let domChange = document.querySelectorAll('[data-change]');

function domRender(variable, newData) {
    console.log(newData);
    domLink.forEach(domItem => {
        if (domItem.dataset.link === variable) {
            domItem.innerHTML = newData;
        }
    });

    domChange.forEach(domItem => {
        if (domItem.dataset.change === variable) {
            domItem.value = newData;
        }
    });
}

function domAddEventListener() {
    domChange.forEach(domItem => {
        domItem.addEventListener("change", onChange);
    });
}

function onChange (e) {
    domRender(e.srcElement.dataset.change, e.srcElement.value.replace(/ +[^a-zA-Z0-9]/g, ""));
}

domRender('userData', userData);
domAddEventListener('userData');
