/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProductsList: () => (/* binding */ getProductsList)\n/* harmony export */ });\n/* harmony import */ var _src_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/functions */ \"./src/functions/index.js\");\n\n\n\nconst getProductsList = _src_functions__WEBPACK_IMPORTED_MODULE_0__.getProductsListHandler;\n\n// module.exports.hello = async (event) => {\n//   return {\n//     statusCode: 200,\n//     body: JSON.stringify(\n//       {\n//         message: 'Go Serverless v1.0! Your function executed successfully!',\n//         input: event,\n//       },\n//       null,\n//       2\n//     ),\n//   };\n\n//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration\n//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };\n// };\n\n//# sourceURL=webpack://products-service/./handler.js?");

/***/ }),

/***/ "./src/functions/getProductsList.js":
/*!******************************************!*\
  !*** ./src/functions/getProductsList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProductsListHandler: () => (/* binding */ getProductsListHandler)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _mocks_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/products */ \"./src/mocks/products.js\");\n\n\nconst getProductsListHandler = async () => {\n  try {\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)({\n      products: _mocks_products__WEBPACK_IMPORTED_MODULE_1__.products\n    });\n  } catch (error) {\n    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)({\n      message: error.message\n    }, 500);\n  }\n};\n\n//# sourceURL=webpack://products-service/./src/functions/getProductsList.js?");

/***/ }),

/***/ "./src/functions/index.js":
/*!********************************!*\
  !*** ./src/functions/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProductsListHandler: () => (/* reexport safe */ _getProductsList__WEBPACK_IMPORTED_MODULE_0__.getProductsListHandler)\n/* harmony export */ });\n/* harmony import */ var _getProductsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getProductsList */ \"./src/functions/getProductsList.js\");\n\n\n//# sourceURL=webpack://products-service/./src/functions/index.js?");

/***/ }),

/***/ "./src/mocks/products.js":
/*!*******************************!*\
  !*** ./src/mocks/products.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   products: () => (/* binding */ products)\n/* harmony export */ });\nconst products = [{\n  description: 'Short Mortal Combat X Description',\n  id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',\n  price: 24,\n  title: 'Mortal Combat X'\n}, {\n  description: 'Short GrandTour Description',\n  id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',\n  price: 15,\n  title: 'GrandTour'\n}, {\n  description: 'Short GTA V Description',\n  id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',\n  price: 23,\n  title: 'GTA V'\n}, {\n  description: 'Short CS:GO Description',\n  id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',\n  price: 15,\n  title: 'CS:GO'\n}, {\n  description: 'Short Rust Description',\n  id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',\n  price: 23,\n  title: 'Rust'\n}, {\n  description: 'Short Product Description7',\n  id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',\n  price: 15,\n  title: 'ProductName'\n}];\n\n//# sourceURL=webpack://products-service/./src/mocks/products.js?");

/***/ }),

/***/ "./src/utils/formatJSONResponse.js":
/*!*****************************************!*\
  !*** ./src/utils/formatJSONResponse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatJSONResponse: () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst defaultHeaders = {\n  'Access-Control-Allow-Methods': '*',\n  'Access-Control-Allow-Headers': '*',\n  'Access-Control-Allow-Origin': '*'\n};\nconst formatJSONResponse = (body, statusCode = 200) => ({\n  headers: {\n    ...defaultHeaders\n  },\n  statusCode,\n  body: JSON.stringify(body, null, 2)\n});\n\n//# sourceURL=webpack://products-service/./src/utils/formatJSONResponse.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatJSONResponse: () => (/* reexport safe */ _formatJSONResponse__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)\n/* harmony export */ });\n/* harmony import */ var _formatJSONResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatJSONResponse */ \"./src/utils/formatJSONResponse.js\");\n\n\n//# sourceURL=webpack://products-service/./src/utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./handler.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;