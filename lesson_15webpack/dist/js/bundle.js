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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMcontentLoaded', function() {\n\n    \"use strict\"\n    let calc = __webpack_require__(/*! ./parst/calc.js */ \"./src/js/parst/calc.js\"),\n        forms = __webpack_require__(/*! ./parst/forms.js */ \"./src/js/parst/forms.js\"),\n        slider = __webpack_require__(/*! ./parst/slider.js */ \"./src/js/parst/slider.js\"),\n        tabs = __webpack_require__(/*! ./parst/tabs.js */ \"./src/js/parst/tabs.js\"),\n        timer = __webpack_require__(/*! ./parst/timer.js */ \"./src/js/parst/timer.js\"),\n        modals = __webpack_require__(/*! ./parst/modals.js */ \"./src/js/parst/modals.js\");\n\n        calc();\n        forms();\n        slider();\n        tabs();\n        timer();\n        modals();\n\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/parst/calc.js":
/*!******************************!*\
  !*** ./src/js/parst/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\n    let persons = document.querySelectorAll('.counter-block-input')[0],\n    restDays = document.querySelectorAll('.counter-block-input')[1],\n    place = document.getElementById('select'),\n    totalValue = document.getElementById('total'),\n    personsSum = 0,\n    daysSum = 0,\n    total = 0;\n\n    totalValue.innerHTML = 0;\n    \n    \n    persons.addEventListener('change', function() {\n        personsSum = +this.value;\n        total = (daysSum + personsSum)*4000;\n\n        if(restDays.value == '' || restDays.value == 0) {\n            totalValue.innerHTML = 0;\n        } else {\n            totalValue.innerHTML = total;\n        }\n        if(persons.value == 0 || restDays.value == 0) {\n            totalValue.innerHTML = 0;\n        } else {\n            totalValue.innerHTML = total;\n        }\n\n    });\n    restDays.addEventListener('change', function() {\n        daysSum = +this.value;\n        total = (daysSum + personsSum)*4000;\n\n        if(persons.value == '') {\n            totalValue.innerHTML = 0;\n        } else {\n            totalValue.innerHTML = total;\n        }\n        if(persons.value == 0 || restDays.value == 0) {\n            totalValue.innerHTML = 0;\n        } else {\n            totalValue.innerHTML = total;\n        }\n\n    });\n    \n\n    place.addEventListener('change', function() {\n        if (restDays.value == '' || persons.value == '') {\n            totalValue.innerHTML = 0;\n        } else {\n            let a = total;\n            totalValue.innerHTML = a * this.options[this.selectedIndex].value;\n        }\n    });\n\n    \n};\nfunction checks(){   \n    if ( event.keyCode < 48 || event.keyCode > 57)  { \n        event.preventDefault();\n    }\n  };\n   \n\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/parst/calc.js?");

/***/ }),

/***/ "./src/js/parst/forms.js":
/*!*******************************!*\
  !*** ./src/js/parst/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function forms() {\n\n    let message = {\n        loading: \"Загрузка....\",\n        success: \"Спасибо, скоро мы свами свяжемся\",\n        failure: \"Что-то пошло не так....\"\n    };\n\n    let form = document.querySelector('.main-form'),\n         input = form.getElementsByTagName('input'),\n         statusMassage = document.createElement('div');\n         \n         statusMassage.classList.add('status');\n        \n        \n\n form.addEventListener('submit', function(event) {\n       \n     event.preventDefault();\n     form.appendChild(statusMassage);\n\n\n     let request = new XMLHttpRequest();\n     request.open('POST', 'server.php');\n     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\n     let formData = new FormData(form);\n\n     let obj = {};\n     formData.forEach(function(value, key) {\n         obj[key] = value;\n     });\n     let json = JSON.stringify(obj);\n\n     request.send(json);\n    \n     request.addEventListener('readystatechange', function(){\n         if (request.readyState < 4) {\n             statusMassage.innerHTML = message.loading;\n\n         } else if (request.readyState === 4 && request.status == 200) {\n             statusMassage.innerHTML = message.success;\n         } else {\n             statusMassage.innerHTML = message.failure;\n         }\n     });\n     \n     for (let i = 0; i < input.length; i++) {\n         input[i].value = '';\n        \n     }\n\n\n     // Fotm 2\n\n});\n\n\n\n     let formC = document.getElementById('form'),\n         inputC = formC.getElementsByTagName('input'),\n         namberPhone = formC.getElementsByTagName('input')[1];\n         \n        \n\n formC.addEventListener('submit', function(event) {\n     event.preventDefault();\n     formC.appendChild(statusMassage);\n\n\n     let requestC = new XMLHttpRequest();\n     requestC.open('POST', 'server.php');\n     requestC.setRequestHeader('Content-Type', 'application/json; charset=utf-8');\n\n     let formDataC = new FormData(formC);\n\n     let obC = {};\n     formDataC.forEach(function(value, key) {\n         obC[key] = value;\n     });\n     let jsonC = JSON.stringify(obC);\n\n     requestC.send(jsonC);\n    \n     requestC.addEventListener('readystatechange', function(){\n         if (requestC.readyState < 4) {\n             statusMassage.innerHTML = message.loading;\n\n         } else if (requestC.readyState === 4 && requestC.status == 200) {\n             statusMassage.innerHTML = message.success;\n         } else {\n             statusMassage.innerHTML = message.failure;\n         }\n     });\n     \n     for (let i = 0; i < inputC.length; i++) {\n         inputC[i].value = '';\n     }\n     \n });\n\n function check(){   \n    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)  { \n        event.preventDefault();\n    }\n  }; \n   \n}\n\nmodule.exports = forms;\n\n//# sourceURL=webpack:///./src/js/parst/forms.js?");

/***/ }),

/***/ "./src/js/parst/modals.js":
/*!********************************!*\
  !*** ./src/js/parst/modals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modals() {\n    let more = document.querySelector('.more'),\n        descriptionBtn = document.querySelectorAll('.description-btn'),\n        overlay = document.querySelector('.overlay'),\n        close = document.querySelector('.popup-close');\n\n\n    more.classList.add(\"mor\");\n        for (let i = 0; i < descriptionBtn.length; i++){\n        descriptionBtn[i].classList.add(\"mor\");\n        };\n    let mor = document.getElementsByClassName('mor');\n\n   for (let i = 0; i < mor.length; i++){\n\n    mor[i].addEventListener('click', function(){\n        overlay.style.display = 'block';\n        this.classList.add('more-splash');\n        document.body.style.overflow = 'hidden';\n    });\n    close.addEventListener('click', function() {\n        overlay.style.display = 'none';\n        more.classList.remove('more-splash');\n        document.body.style.overflow = '';\n    });\n\n   }\n   \n}\n\nmodule.exports = modals;\n\n//# sourceURL=webpack:///./src/js/parst/modals.js?");

/***/ }),

/***/ "./src/js/parst/slider.js":
/*!********************************!*\
  !*** ./src/js/parst/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\n    let slideIndex = 1,\n    slides = document.querySelectorAll('.slider-item'),\n    prev = document.querySelector('.prev'),\n    next = document.querySelector('.next'),\n    dorsWrap = document.querySelector('.slider-dots'),\n    dots = document.querySelectorAll('.dot');\n\n    showSlides(slideIndex);\nfunction showSlides (n) {\n    if(n > slides.length){\n        slideIndex = 1;\n    }\n    if(n < 1) {\n        slideIndex = slides.length;\n    }\n    slides.forEach((item) => item.style.display = 'none');\n    // for (let i = 0; i < slides.length; i++){\n    //     slides[i].style.display = 'none';\n    // }\n    dots.forEach((item) => item.classList.remove('dot-active'));\n    slides[slideIndex - 1].style.display = 'block';\n    dots[slideIndex - 1].classList.add('dot-active');\n}\nfunction plusSlides(n) {\n    showSlides(slideIndex += n);\n}\nfunction cuuretSlide(n) {\n    showSlides(slideIndex = n);\n}\nprev.addEventListener('click', function() {\n    plusSlides(-1)\n});\nnext.addEventListener('click', function() {\n    plusSlides(1)\n});\ndorsWrap.addEventListener('click', function(event) {\n    for(let i = 0; i < dots.length + 1; i++) {\n        if(event.target.classList.contains('dot') && event.target == dots[i-1]) {\n            cuuretSlide(i);\n        }\n    }\n});\n   \n}\n\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/parst/slider.js?");

/***/ }),

/***/ "./src/js/parst/tabs.js":
/*!******************************!*\
  !*** ./src/js/parst/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\n\n    let tab = document.querySelectorAll('.info-header-tab'),\n        info = document.querySelector('.info-header'),\n        tabContent = document.querySelectorAll('.info-tabcontent');\n\n        function hideTabContent(a) {\n            for (let i = a; i < tabContent.length; i++) {\n                tabContent[i].classList.remove('show');\n                tabContent[i].classList.add('hide');\n            }\n        }\n\n    hideTabContent(1);\n\n    function showTabContent(b) {\n        if (tabContent[b].classList.contains('hide')) {\n            tabContent[b].classList.remove('hide');\n            tabContent[b].classList.add('show');\n        }\n    }\n\n    info.addEventListener('click', function(event) {\n        let target = event.target;\n        if (target && target.classList.contains('info-header-tab')) {\n            for(let i = 0; i < tab.length; i++) {\n                if (target == tab[i]) {\n                    hideTabContent(0);\n                    showTabContent(i);\n                    break;\n                }\n            }\n        }\n    });\n}\n\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/parst/tabs.js?");

/***/ }),

/***/ "./src/js/parst/timer.js":
/*!*******************************!*\
  !*** ./src/js/parst/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\n    let deadline = '2018-10-28';\n\n    function getTimeRemaining(endtime) {\n        let t = Date.parse(endtime) - Date.parse(new Date()),\n            seconds = Math.floor((t/1000) % 60),\n            minutes = Math.floor((t/1000/60) % 60),\n            hours = Math.floor((t/(1000*60*60)));\n\n            if (seconds < 10) {\n                seconds = \"0\" + seconds;\n            }\n            if (minutes < 10) {\n                minutes = \"0\" + minutes;\n            }\n            if (hours < 10) {\n                hours = \"0\" + hours;\n            } \n            if (t <= 0) {\n                hours = \"00\";\n                minutes = \"00\";\n                seconds = \"00\";\n            }\n            return {\n                'total' : t,\n                'hours' : hours,\n                'minutes' : minutes,\n                'seconds' : seconds\n            };\n        \n    }\n   \n    function setClock (id, endTime){\n        let timer = document.getElementById(id),\n            hours = timer.querySelector('.hours'),\n            minutes = timer.querySelector('.minutes'),\n            seconds = timer.querySelector('.seconds'),\n            timeInterval = setInterval(updateClock, 1000);\n\n        function updateClock(){\n            let t = getTimeRemaining(endTime);\n            hours.textContent = t.hours;\n            minutes.textContent = t.minutes;\n            seconds.textContent = t.seconds;\n\n            if (t.total <= 0) {\n                clearInterval(timeInterval);\n            }\n            \n        }\n        \n    }\n    setClock('timer', deadline);\n   \n}\n\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/parst/timer.js?");

/***/ })

/******/ });