/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _initialState = __webpack_require__(3);

var initialState = _interopRequireWildcard(_initialState);

var _simpleSPA = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var globalState = initialState;


globalState = (0, _simpleSPA.renderDom)(globalState);

/* APP Code */
function callButton(e) {
    var callNumber = -Number(e.srcElement.innerHTML);
    (0, _simpleSPA.globalStateChange)(globalState, 'globalState.user.userNumber', globalState.user.userNumber - callNumber);
}

var DomButtons = document.querySelectorAll('[data-button-calc]');
DomButtons.forEach(function (domItem) {
    domItem.addEventListener("click", callButton);
});

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderDom = renderDom;
exports.globalStateChange = globalStateChange;
function renderDom(globalState, state) {

    var domLink = document.querySelectorAll('[data-link]');
    var domChange = document.querySelectorAll('[data-change]');

    function onSimpleSPAChange(e) {
        globalStateChange(globalState, e.srcElement.dataset.change, e.srcElement.value.replace(/[^a-zA-Z0-9 ]/g, ""));
    }

    domLink.forEach(function (domItem) {
        var selector = domItem.dataset.link;
        if (selector && !state || state === selector) {
            domItem.innerHTML = eval(selector);
        }
    });

    domChange.forEach(function (domItem) {
        var selector = domItem.dataset.change;
        if (selector && !state || state === selector) {
            domItem.value = eval(selector);
        }
    });

    if (!state) {
        domChange.forEach(function (domItem) {
            domItem.addEventListener("change", onSimpleSPAChange);
        });
    }
    return globalState;
}

function globalStateChange(globalState, state, value) {

    if (eval('' + state) === value) {
        console.log('%c[Global State No Change Same Value]:' + '%c ' + state + ':%c' + value, 'background: #084cb2; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#084cb2;');
    } else {
        console.log('%c[Global State]:' + '%c ' + state + ':%c' + eval('' + state), 'background: #e07300; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#e07300;');
        console.log('%c[Global State Change]:' + '%c ' + state + ':%c' + value, 'background: #007a0a; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#007a0a;');

        if (typeof value === 'number') {
            eval(state + ' = ' + value);
        } else {
            eval(state + ' = "' + value + '"');
        }
        renderDom(globalState, state, value);
        return globalState;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
var user = exports.user = {
        userFirstName: 'name1',
        userSecondName: 'secondName',
        userNumber: 1,
        numberOperators: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10],
        testObject: {
                test1: 1,
                test2: 2,
                test3: 3
        }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map