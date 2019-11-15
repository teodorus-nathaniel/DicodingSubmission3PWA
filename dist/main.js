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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/controller */ \"./src/js/controller.js\");\n\r\n\r\nwindow.addEventListener('load', () => {\r\n\tObject(_js_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/team.js":
/*!***********************************!*\
  !*** ./src/js/components/team.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getTeamComponent; });\nfunction getTeamComponent ({ crestUrl, name, website, email, founded, phone, address, id }, idx){\r\n\treturn `\r\n    <div class=\"col s12 m5 ${idx % 2 == 0 ? '' : 'offset-m1'}\">\r\n      <div class=\"card hoverable team\" data-id=\"${id}\">\r\n        <div class=\"card-image\">\r\n          <a class=\"btn-floating halfway-fab waves-effect waves-light btn-large white\"><i class=\"material-icons red-text\">favorite_border</i></a>\r\n          <img src=\"${crestUrl}\" alt=\"${name}\" class=\"cursor\">\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <i class=\"material-icons activator cursor\">more_vert</i>\r\n          <p class=\"large-font center cursor\">${name}</p>\r\n        </div>\r\n        <div class=\"card-reveal\">\r\n          <span class=\"card-title grey-text text-darken-4\">${name}<i class=\"material-icons right\">close</i></span>\r\n          <p>Email      : ${email}</p>\r\n          <p>Phone      : ${phone}</p>\r\n          <p>Address    : ${address}</p>\r\n          <p>Founded on : ${founded}</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a href=\"${website}\" target=\"_blank\">Visit ${name} official website</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  `;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/team.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n\r\n\r\n\r\nasync function changePage (pagename){\r\n\tif (pagename == '') pagename = 'home';\r\n\telse if (!isNaN(pagename)) pagename = 'team-detail';\r\n\telse return;\r\n\r\n\tconst page = await _model__WEBPACK_IMPORTED_MODULE_0__[\"getPage\"](pagename);\r\n\t_view__WEBPACK_IMPORTED_MODULE_1__[\"renderPage\"](page);\r\n\r\n\tswitch (pagename) {\r\n\t\tcase 'home':\r\n\t\t\tinitHomePage();\r\n\t\tdefault:\r\n\t\t\tinitTeamDetailPage(pagename);\r\n\t}\r\n}\r\n\r\nasync function initTeamDetailPage (){}\r\n\r\nasync function initHomePage (){\r\n\tconst teamsDom = document.getElementById(_view__WEBPACK_IMPORTED_MODULE_1__[\"domString\"].teams);\r\n\tteamsDom.addEventListener('click', (e) => {\r\n\t\tconst target = e.target;\r\n\t\tconst closestTeam = target.closest('.team');\r\n\t\tif (closestTeam && target.tagName !== 'I' && !target.closest('.card-reveal')) {\r\n\t\t\twindow.location.hash = closestTeam.dataset.id;\r\n\t\t}\r\n\t});\r\n\r\n\tconst teams = await _model__WEBPACK_IMPORTED_MODULE_0__[\"getTeams\"]();\r\n\t_view__WEBPACK_IMPORTED_MODULE_1__[\"renderTeams\"](teams);\r\n\tconsole.log(teams);\r\n}\r\n\r\nfunction init (){\r\n\tchangePage(window.location.hash.substring(1));\r\n\twindow.addEventListener('hashchange', () => changePage(window.location.hash.substring(1)));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/controller.js?");

/***/ }),

/***/ "./src/js/key/api-key.js":
/*!*******************************!*\
  !*** ./src/js/key/api-key.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('7e51bca113684f488b9da7e69537f4f7');\r\n\n\n//# sourceURL=webpack:///./src/js/key/api-key.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: getPage, getTeams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPage\", function() { return getPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTeams\", function() { return getTeams; });\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/fetch */ \"./src/js/utils/fetch.js\");\n\r\n\r\nlet teams = [];\r\nconst baseURL = 'https://api.football-data.org/v2/';\r\nconst competitionID = 2014;\r\n\r\nasync function getPage(pagename) {\r\n\tconst res = await fetch(`pages/${pagename}.html`);\r\n\treturn await res.text();\r\n}\r\n\r\nasync function getTeams() {\r\n\tif (teams.length !== 0) return teams;\r\n\tconst res = await Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__[\"fetchJSON\"])(`${baseURL}competitions/${competitionID}/teams`);\r\n\tteams = res.teams;\r\n\treturn teams;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/model.js?");

/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/*! exports provided: fetchJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchJSON\", function() { return fetchJSON; });\n/* harmony import */ var _key_api_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../key/api-key */ \"./src/js/key/api-key.js\");\n\r\n\r\nasync function fetchJSON(url, body = {}, method = 'GET') {\r\n\tconst headers = new Headers({\r\n\t\t'X-Auth-Token': _key_api_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n\t});\r\n\r\n\tconst options = {\r\n\t\theaders,\r\n\t\tmethod,\r\n\t};\r\n\tif (method === 'POST') {\r\n\t\toptions.body = body;\r\n\t} else if (method === 'GET') {\r\n\t\tlet params = '';\r\n\t\tObject.entries(body).forEach(([ key, value ]) => {\r\n\t\t\tparams += `&${key}=${value}`;\r\n\t\t});\r\n\t\tparams.substring(1);\r\n\t\turl += `?${params}`;\r\n\t}\r\n\r\n\tconst myRequest = new Request(url, options);\r\n\tlet res;\r\n\ttry {\r\n\t\tres = await fetch(myRequest);\r\n\t} catch (error) {\r\n\t\talert('An error occurred');\r\n\t\tconsole.log(`Failed fetch ${url}\\n${error}`);\r\n\t\treturn null;\r\n\t}\r\n\r\n\treturn await res.json();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/utils/fetch.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: domString, renderPage, renderTeams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domString\", function() { return domString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderPage\", function() { return renderPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTeams\", function() { return renderTeams; });\n/* harmony import */ var _components_team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/team */ \"./src/js/components/team.js\");\n\r\n\r\nconst domString = {\r\n\tmain: 'main',\r\n\tteams: 'teams',\r\n};\r\n\r\nfunction renderPage (page){\r\n\tdocument.getElementById(domString.main).innerHTML = page;\r\n}\r\n\r\nfunction renderTeams (teams){\r\n\tconst teamDom = document.getElementById(domString.teams);\r\n\tif (!teamDom) return;\r\n\tteamDom.innerHTML = '';\r\n\tteams.forEach((team, idx) => {\r\n\t\tteamDom.innerHTML += Object(_components_team__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(team, idx);\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/view.js?");

/***/ })

/******/ });