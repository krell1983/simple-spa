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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function initSimpleSPA(state) {
    var domLink = document.querySelectorAll('[data-link]');
    var domChange = document.querySelectorAll('[data-change]');

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

    domChange.forEach(function (domItem) {
        domItem.addEventListener("change", onSimpleSPAChange);
    });
}

function onSimpleSPAChange(e) {
    globalStateChange(e.srcElement.dataset.change, e.srcElement.value.replace(/[^a-zA-Z0-9 ]/g, ""));
}

function globalStateChange(state, value) {
    console.log('%c[Global State Change]:' + '%c ' + state + ':%c' + value, 'background: #1e5adb; color:#fff; padding:2px;', 'font-weight: bold;', 'font-weight: bold; color:#1e5adb;');
    eval(state + ' = "' + value + '"');
    initSimpleSPA(state, value);
}

/***/ })

/******/ });
//# sourceMappingURL=simpleSPA.entry.js.map