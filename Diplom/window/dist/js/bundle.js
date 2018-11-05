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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/modal */ \"./src/js/parts/modal.js\");\n/* harmony import */ var _parts_modalForms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/modalForms */ \"./src/js/parts/modalForms.js\");\n/* harmony import */ var _parts_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/inputs */ \"./src/js/parts/inputs.js\");\n/* harmony import */ var _parts_tabsGlazing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/tabsGlazing */ \"./src/js/parts/tabsGlazing.js\");\n/* harmony import */ var _parts_tabsDecoration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/tabsDecoration */ \"./src/js/parts/tabsDecoration.js\");\n/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/calc */ \"./src/js/parts/calc.js\");\n/* harmony import */ var _parts_photos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/photos */ \"./src/js/parts/photos.js\");\n/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/timer */ \"./src/js/parts/timer.js\");\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n\n    'use strict';\n\n    Object(_parts_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    Object(_parts_modalForms__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    Object(_parts_inputs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    Object(_parts_tabsGlazing__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    Object(_parts_tabsDecoration__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    Object(_parts_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    Object(_parts_photos__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    Object(_parts_timer__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n});\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction calc(){\n    let popupCalcBtn = document.querySelectorAll(\".popup_calc_btn\"),\n        popupCalc = document.querySelector(\".popup_calc\"),\n        popupCalcProfile = document.querySelector(\".popup_calc_profile\"),\n        popupCalcEnd = document.querySelector(\".popup_calc_end\"),\n        popupCalcButton = document.querySelector(\".popup_calc_button\"),\n        popupCalcProfileButton = document.querySelector(\".popup_calc_profile_button\"),\n        popupCalcClose = document.querySelectorAll(\".popup_calc_close\"),\n        popupCloes = [popupCalc, popupCalcProfile, popupCalcEnd],\n        balconIcons = document.querySelectorAll(\".balcon_icons > a > img\"),\n        balconBig = document.querySelectorAll(\".big_img > img\"),\n        coldBox = document.querySelector(\".cold-box\"),\n        warmBox = document.querySelector(\".warm-box\"),\n        formCalcFinish = document.querySelector(\".form-calc-finish\"),\n        formDatas = new FormData(),\n        statusMessage = document.createElement(\"div\"),\n        message = {\n            loading: \"Отправка\",\n            success: \"Замены отправлены, мы скоро с вами свяжемся.\",\n            failure: \"Произошла ошибка\"\n        };\n\n    popupCalcBtn.forEach(function(btn) {\n        btn.addEventListener(\"click\", function() {\n            popupCalc.style.display = \"block\";\n            popupCalc.classList.remove(\"hide\");\n        });\n    });\n\n    popupCalcClose.forEach(function(x) {\n        x.addEventListener(\"click\", function() {\n            popupCloes.forEach(function(item) {\n                item.style.display = \"none\";\n                item.classList.remove(\"hide\"); \n                item.classList.remove(\"fade\");\n            clearInputs();\n            });\n        });\n    });\n\n    balconIcons.forEach(function(icon, index) {\n        icon.addEventListener(\"click\", function(event) {\n            event.preventDefault();\n            balconIcons.forEach(function(icon) {\n                icon.style.width = \"20%\";\n                icon.classList.remove(\"choosen\");\n            });\n            balconBig.forEach(function(img) {\n                img.style.display = \"none\";\n            });\n            this.style.width = \"30%\";\n            this.classList.add(\"choosen\");\n            balconBig[index].style.display = \"inline-block\";\n        });\n    });\n\n    popupCalcButton.addEventListener(\"click\", function() {\n        let width = document.querySelector(\"#width\").value,\n            height = document.querySelector(\"#height\").value,\n            type = document.querySelector(\".choosen\");\n\n        if (width == \"\" || height == \"\" || type == null) {\n            alert(\"Выбирите форму балкона, высоту и ширину\");\n        } else {\n            formDatas.append(\"Форма: \", type.alt);\n            formDatas.append(\"Ширина: \", width);\n            formDatas.append(\"Высота: \", height);\n            popupCalc.style.display = \"none\";\n            popupCalcProfile.style.display = \"block\";\n        }\n    });\n\n    coldBox.addEventListener(\"click\", function() {\n        warmBox.checked = false;\n    });\n\n    warmBox.addEventListener(\"click\", function() {\n        coldBox.checked = false;\n    });\n\npopupCalcProfileButton.addEventListener(\"click\", function() {\n  let viewType = document.querySelector(\"#view_type\").value;\n\n  if (!warmBox.checked && !coldBox.checked) {\n          alert(\"Выберите тип профиля.\");\n      } else {\n      if (coldBox.checked) {\n          formDatas.append(\"Профиль: \", \"cold\");\n      } else {\n          formDatas.append(\"Профиль: \", \"warm\");\n      }\n      formDatas.append(\"Остекление: \", viewType);\n      popupCalcProfile.style.display = \"none\";\n      popupCalcEnd.style.display = \"block\";\n  }\n});\n\nfunction clearInputs() {\n  let inputs = document.querySelectorAll(\"input\");\n\n  inputs.forEach(function(input) {\n      input.value = \"\";\n  });\n \n  formDatas = new FormData();\n}\n\nformCalcFinish.addEventListener(\"submit\", function(event) {\n  event.preventDefault();\n  let name = document.querySelector(\"#calc_user_name\").value,\n  phone = document.querySelector(\"#calc_phone-number\").value;\n\nformDatas.append(\"Имя: \", name);\nformDatas.append(\"Телефон: \", phone);\n\n  formCalcFinish.appendChild(statusMessage);\n\n  function postData(data) {\n      return new Promise(function(resolve, reject) {\n          let request = new XMLHttpRequest();\n\n          request.open(\"POST\", \"server.php\");\n          request.setRequestHeader(\n          \"Content-Type\",\n          \"application/json; charset=utf-8\"\n          );\n\n          request.onreadystatechange = function() {\n          if (request.readyState < 4) {\n              resolve();\n          } else if (request.readyState === 4) {\n          if (request.status == 200 && request.status < 300) {\n              resolve();\n          }\n          } else {\n          reject();\n          }\n           \n    };\n   let obj = {};\n          formDatas.forEach(function(value, key){\n              obj[key] = value;\n          });\n          let json = JSON.stringify(obj);\n        request.send(json ,data);\n  \n  \n    });\n}\npostData(formDatas)\n    .then(() => (statusMessage.innerHTML = message.loading))\n    .then(() => (statusMessage.innerHTML = message.success))\n    .catch(() => (statusMessage.innerHTML = message.failure))\n    .then(clearInputs);\n});\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (calc);\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/inputs.js":
/*!********************************!*\
  !*** ./src/js/parts/inputs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction inputs() {\n  let inputNumber = document.querySelectorAll(\".input-number\");\n\n  for(let i = 0; i < inputNumber.length; i++) {\n      inputNumber[i].addEventListener(\"input\", function() {\n      this.value = `${this.value.replace(/\\D|^0{1}/g, \"\")}`;\n    })\n  }\n  \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (inputs);\n\n//# sourceURL=webpack:///./src/js/parts/inputs.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction modal() {\n    let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),\n    popupEngineer = document.querySelector('.popup_engineer'),\n    close1 = document.getElementsByClassName('popup_close')[1];\n\n    popupEngineerBtn.addEventListener('click', function(){\n    popupEngineer.style.display = 'block';\n});\nclose1.addEventListener('click', function() {\n    popupEngineer.style.display = 'none';\n});\n\npopupEngineer.addEventListener('click', function(event) {\n    if (event.target === popupEngineer)\n    popupEngineer.style.display = 'none';\n});\n//Modal popup\nlet phoneLink = document.getElementsByClassName('phone_link'),\n    popup = document.querySelector('.popup'),\n    close = document.getElementsByClassName('popup_close')[0];\n    for (let i = 0; i < phoneLink.length; i++){\n\n        phoneLink[i].addEventListener('click', function(){\n            popup.style.display = 'block';\n        });\n     \n        \n    }\n    close.addEventListener('click', function() {\n        popup.style.display = 'none';\n    });\n    popup.addEventListener('click', function(event) {\n        if (event.target === popup)\n        popup.style.display = 'none';\n    });\n    setTimeout(function() {\n        popup.style.display = 'block';\n      }, 60000);\n\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/modalForms.js":
/*!************************************!*\
  !*** ./src/js/parts/modalForms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction modalForms() {\n\n   \n    let massege = {\n        loading: \"Отправка.....\",\n        success: \"Отправлено!\",\n        failure: \"Ошибка\"\n    };\n  let formDom = document.querySelectorAll('.form-input-dom'),\n      statusMassege = document.createElement('div');\n      \n      statusMassege.classList.add('status');\n    for (let i = 0; i < formDom.length; i++) {\n        let input = formDom[i].getElementsByTagName('input');\n          formDom[i].addEventListener('submit', function(event) {\n              event.preventDefault();\n              formDom[i].appendChild(statusMassege);\n\n              let formData = new FormData(formDom[i]); \n\n              let request = new XMLHttpRequest();\n                  request.open('POST', 'server.php');\n                  request.setRequestHeader (\"Content-Type\", \"application/json; charset=utf-8\");\n                  request.addEventListener('readystatechange', function(){\n                      if (request.readyState < 4) {\n                          statusMassege.innerHTML = massege.loading;\n                      } else if (request.readyState === 4 && request.status == 200) {\n                          statusMassege.innerHTML = massege.success;\n                      } else {\n                          statusMassege.innerHTML = massege.failure;\n                      }\n                  });\n\n                  let objc = {};\n                  formData.forEach(function(value, key){\n                      objc[key] = value;\n                  });\n                  let jsons = JSON.stringify(objc);\n                  request.send(jsons);\n\n                      for (let i = 0; i < input.length; i++){\n                          input[i].value = '';\n                      }\n                      \n          });\n      }\n    \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalForms);\n\n//# sourceURL=webpack:///./src/js/parts/modalForms.js?");

/***/ }),

/***/ "./src/js/parts/photos.js":
/*!********************************!*\
  !*** ./src/js/parts/photos.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction photos() {\n    let img = document.querySelectorAll(\".photo\"),\n        pictures = document.querySelector(\".pictures\"),\n        bigPhoto = document.createElement(\"div\");\n\n        function imgContent(a) {\n        pictures.insertBefore(bigPhoto, img[a]);\n        bigPhoto.classList.add(\"big_photo\");\n        }\n        imgContent(0);\n\n        img.forEach(function(photo, index) {\n            photo.addEventListener(\"click\", function(event) {\n            event.preventDefault();\n            bigPhoto.innerHTML = `<img src='img/our_works/big_img/${index + 1}.png'>`;\n            bigPhoto.classList.add(\"big_photo_img\");\n            bigPhoto.style.display = \"block\";\n            });\n        });\n\n        bigPhoto.addEventListener(\"click\", function(event) {\n            if (event.target.classList.contains(\"big_photo\")) {\n            bigPhoto.classList.remove(\"big_photo_img\");\n            bigPhoto.style.display = \"none\";\n            }\n        });\n    \n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (photos);\n\n\n\n//# sourceURL=webpack:///./src/js/parts/photos.js?");

/***/ }),

/***/ "./src/js/parts/tabsDecoration.js":
/*!****************************************!*\
  !*** ./src/js/parts/tabsDecoration.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabsDecoration() {\n\n    let clickLink = document.querySelectorAll('.click_link'),\n    decorSlider = document.querySelector('.decoration_slider'),\n    tabsContent = document.querySelectorAll('.tabs-contenet'),\n    noСlick = document.getElementsByClassName('no_click');\n\n\nfunction hideContent(a) {\n  for (let i = a; i < tabsContent.length; i++) {\n        tabsContent[i].classList.remove('show');\n        tabsContent[i].classList.add('hide');\n        noСlick[i].classList.remove('after_click');\n  }\n}\n\nhideContent(1);\n\nfunction showContent(b) {\n  if (tabsContent[b].classList.contains('hide')) {\n    tabsContent[b].classList.remove('hide');\n    tabsContent[b].classList.add('show');\n    noСlick[b].classList.add('after_click');\n  }\n}\n\ndecorSlider.addEventListener('click', function(event){\n  let target = event.target;\n  if(target && target.classList.contains('click_link')) {\n      for(let i = 0; i < clickLink.length; i++) {\n          if(target == clickLink[i]) {\n              hideContent(0);\n              showContent(i);\n              break;\n          }\n      }\n  }\n});\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabsDecoration);\n\n//# sourceURL=webpack:///./src/js/parts/tabsDecoration.js?");

/***/ }),

/***/ "./src/js/parts/tabsGlazing.js":
/*!*************************************!*\
  !*** ./src/js/parts/tabsGlazing.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction tabsGlazing() {\n\n    let tabLinc = document.querySelectorAll('.tab-link'),\n        info = document.querySelector('.glazing_slider'),\n        tabFoto = document.querySelectorAll('.tab-foto'),\n        tabContent = document.querySelectorAll('.tab-contenet');\n        \n        function hideTabsContent(a) {\n            for (let i = a; i < tabContent.length; i++) {\n                tabContent[i].classList.remove('show');\n                tabContent[i].classList.add('hide');\n                tabLinc[i].classList.remove('active');\n            }\n        }\n        hideTabsContent(1);\n\n        function showTabsContent(b) {\n            if (tabContent[b].classList.contains('hide')) {\n                tabContent[b].classList.remove('hide');\n                tabContent[b].classList.add('show');\n                tabLinc[b].classList.add('active');\n                \n            }\n        }\n\n        info.addEventListener('click', function(event) {\n            let target = event.target;\n            if(target && target.classList.contains('tab-link')) {\n                for (let i = 0; i < tabLinc.length; i++) {\n                    if (target == tabLinc[i]) {\n                        hideTabsContent(0);\n                        showTabsContent(i);\n                        break;\n                    }\n                }\n            }\n            if(target && target.classList.contains('tab-foto')) {\n                for (let i = 0; i < tabFoto.length; i++) {\n                    if (target == tabFoto[i]) {\n                        hideTabsContent(0);\n                        showTabsContent(i);\n                        break;\n                    }\n                }\n            }\n        });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabsGlazing);\n\n\n\n//# sourceURL=webpack:///./src/js/parts/tabsGlazing.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction timer() {\n    let deadLine = '2018-11-03';\n\nfunction getTimeRemaining(endtime) {\n  let date = new Date();\n  let currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));\n  let diff = Date.parse(endtime) - Date.parse(currentDate),\n    seconds = Math.floor((diff / 1000) % 60),\n    minutes = Math.floor((diff / 1000 / 60) % 60),\n    hours = Math.floor((diff / 1000 / 60 / 60) % 24),\n    days = Math.floor((diff / (1000 * 60 * 60 * 24)));\n\n  if (diff <= 0) {\n    return {\n      'total': 0,\n      'days': \"00\",\n      'hours': \"00\",\n      'minutes': \"00\",\n      'seconds': \"00\"\n    };\n  }\n  return {\n    'total': diff,\n    'days': convertParam(days),\n    'hours': convertParam(hours),\n    'minutes': convertParam(minutes),\n    'seconds': convertParam(seconds)\n  };\n\n}\n\nfunction convertParam(value) {\n  if (value < 10) {\n    value = \"0\" + value;\n  }\n  return value;\n}\n\nfunction setClock(id, endTime) {\n  let timer = document.getElementById(id),\n    days = timer.querySelector('.days'),\n    hours = timer.querySelector('.hours'),\n    minutes = timer.querySelector('.minutes'),\n    seconds = timer.querySelector('.seconds'),\n    timeInterval = setInterval(updateClock, 1000);\n\n  function updateClock() {\n    let diff = getTimeRemaining(endTime);\n    days.textContent = diff.days;\n    hours.textContent = diff.hours;\n    minutes.textContent = diff.minutes;\n    seconds.textContent = diff.seconds;\n\n    if (diff.total <= 0) {\n      clearInterval(timeInterval);\n    }\n\n  }\n\n}\nsetClock('timer', deadLine);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (timer);\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ })

/******/ });