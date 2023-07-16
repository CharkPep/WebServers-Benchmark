"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/banner";
exports.ids = ["pages/api/banner"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./config/connetMongo.ts":
/*!*******************************!*\
  !*** ./config/connetMongo.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)({\n    \"path\": \"C:\\\\Users\\\\Pep\\\\WebstormProjects\\\\httpserversbenchmark\\\\apis\\\\next\\\\.env\"\n});\nconst connectDb = async ()=>{\n    const connect = await mongoose.connect(process.env.CONNECTION_STRING);\n    console.log(\"Database connected: \", connect.connection.host, connect.connection.name);\n    return connect;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvY29ubmV0TW9uZ28udHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDLDBCQUFVO0FBQ25DQSxvREFBd0IsQ0FBQztJQUNyQixRQUFTO0FBQ2I7QUFFQSxNQUFNRSxZQUFZO0lBQ2QsTUFBTUMsVUFBVSxNQUFNSixTQUFTSSxPQUFPLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0lBQ2hFQyxRQUFRQyxHQUFHLENBQ1Asd0JBQ0FMLFFBQVFNLFVBQVUsQ0FBQ0MsSUFBSSxFQUN2QlAsUUFBUU0sVUFBVSxDQUFDRSxJQUFJO0lBRy9CLE9BQU9SO0FBQ1g7QUFFQSxpRUFBZUQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQvLi9jb25maWcvY29ubmV0TW9uZ28udHM/NjYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKVxyXG5yZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoe1xyXG4gICAgXCJwYXRoXCIgOiAnQzpcXFxcVXNlcnNcXFxcUGVwXFxcXFdlYnN0b3JtUHJvamVjdHNcXFxcaHR0cHNlcnZlcnNiZW5jaG1hcmtcXFxcYXBpc1xcXFxuZXh0XFxcXC5lbnYnXHJcbn0pXHJcblxyXG5jb25zdCBjb25uZWN0RGIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb25uZWN0ID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5DT05ORUNUSU9OX1NUUklORylcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgXCJEYXRhYmFzZSBjb25uZWN0ZWQ6IFwiLFxyXG4gICAgICAgICAgICBjb25uZWN0LmNvbm5lY3Rpb24uaG9zdCxcclxuICAgICAgICAgICAgY29ubmVjdC5jb25uZWN0aW9uLm5hbWVcclxuICAgICAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gY29ubmVjdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERiOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJjb25maWciLCJjb25uZWN0RGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkNPTk5FQ1RJT05fU1RSSU5HIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb24iLCJob3N0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/connetMongo.ts\n");

/***/ }),

/***/ "(api)/./models/Banner.ts":
/*!**************************!*\
  !*** ./models/Banner.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dbConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConfig */ \"(api)/./src/utils/dbConfig.ts\");\n\n\nconst BannerSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    description: String,\n    onClickLink: {\n        type: String,\n        required: true\n    },\n    shown: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    percentage: {\n        type: Number,\n        required: true\n    }\n});\n(0,_utils_dbConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst Banner = (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Banners\", BannerSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQmFubmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFFRjtBQU12QyxNQUFNRyxlQUFlLElBQUlILDRDQUFNQSxDQUE0QjtJQUN2REksTUFBTztRQUFFQyxNQUFPQztRQUFRQyxVQUFXO0lBQUs7SUFDeENDLE9BQVE7UUFBRUgsTUFBT0k7UUFBUUYsVUFBVztJQUFLO0lBQ3pDRyxhQUFjSjtJQUNkSyxhQUFjO1FBQUVOLE1BQU9DO1FBQVFDLFVBQVc7SUFBSztJQUMvQ0ssT0FBUTtRQUFFUCxNQUFPSTtRQUFRRixVQUFXO1FBQU1NLFNBQVU7SUFBRTtJQUN0REMsWUFBYTtRQUFFVCxNQUFPSTtRQUFRRixVQUFXO0lBQUk7QUFDakQ7QUFDQUwsMkRBQU9BO0FBQ1AsTUFBTWEsU0FBU2QsK0NBQUtBLENBQTRCLFdBQVdFO0FBRzNELGlFQUFlWSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL21vZGVscy9CYW5uZXIudHM/N2VhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQge0Jhbm5lcn0gZnJvbSBcIi4uL3R5cGVzL2Jhbm5lclR5cGVcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJDb25maWdcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEJhbm5lcldpdGhQcmljZVBlcmNlbnRhZ2UgPSBCYW5uZXIgJiB7XHJcbiAgICBwZXJjZW50YWdlIDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IEJhbm5lclNjaGVtYSA9IG5ldyBTY2hlbWE8QmFubmVyV2l0aFByaWNlUGVyY2VudGFnZT4oe1xyXG4gICAgbmFtZSA6IHsgdHlwZSA6IFN0cmluZywgcmVxdWlyZWQgOiB0cnVlIH0sXHJcbiAgICBwcmljZSA6IHsgdHlwZSA6IE51bWJlciwgcmVxdWlyZWQgOiB0cnVlIH0sXHJcbiAgICBkZXNjcmlwdGlvbiA6IFN0cmluZyxcclxuICAgIG9uQ2xpY2tMaW5rIDogeyB0eXBlIDogU3RyaW5nLCByZXF1aXJlZCA6IHRydWUgfSxcclxuICAgIHNob3duIDogeyB0eXBlIDogTnVtYmVyLCByZXF1aXJlZCA6IHRydWUsIGRlZmF1bHQgOiAwIH0sXHJcbiAgICBwZXJjZW50YWdlIDogeyB0eXBlIDogTnVtYmVyLCByZXF1aXJlZCA6IHRydWV9LFxyXG59KTtcclxuY29ubmVjdCgpXHJcbmNvbnN0IEJhbm5lciA9IG1vZGVsPEJhbm5lcldpdGhQcmljZVBlcmNlbnRhZ2U+KCdCYW5uZXJzJywgQmFubmVyU2NoZW1hKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsImNvbm5lY3QiLCJCYW5uZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwicHJpY2UiLCJOdW1iZXIiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2tMaW5rIiwic2hvd24iLCJkZWZhdWx0IiwicGVyY2VudGFnZSIsIkJhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Banner.ts\n");

/***/ }),

/***/ "(api)/./pages/api/banner.ts":
/*!*****************************!*\
  !*** ./pages/api/banner.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _models_Banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Banner */ \"(api)/./models/Banner.ts\");\n\nasync function handler(req, res) {\n    try {\n        let randomPercentage = Math.random();\n        const Response = await _models_Banner__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n            percentage: {\n                $gte: randomPercentage\n            }\n        }).limit(1);\n        res.status(200).json(Response);\n    } catch (err) {\n        res.status(500).send(err);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFubmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR3lDO0FBRTFCLGVBQWVDLFFBQVFDLEdBQW9CLEVBQUVDLEdBQXFCO0lBRTdFLElBQUc7UUFDQyxJQUFJQyxtQkFBbUJDLEtBQUtDLE1BQU07UUFDbEMsTUFBTUMsV0FBVyxNQUFNUCxzREFBTUEsQ0FDeEJRLElBQUksQ0FBQztZQUFFQyxZQUFhO2dCQUFFQyxNQUFPTjtZQUFpQjtRQUFDLEdBQUdPLEtBQUssQ0FBQztRQUU3RFIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047SUFDekIsRUFDQSxPQUFPTyxLQUFJO1FBQ1BYLElBQUlTLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUNEO0lBQ3pCO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvYXBpL2Jhbm5lci50cz84YzdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJDb25maWdcIjtcclxuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSBcIm5leHQvZGlzdC9jb21waWxlZC9AZWRnZS1ydW50aW1lL3ByaW1pdGl2ZXNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vbW9kZWxzL0Jhbm5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEgOiBOZXh0QXBpUmVxdWVzdCwgcmVzIDogTmV4dEFwaVJlc3BvbnNlICkge1xyXG4gICAgXHJcbiAgICB0cnl7XHJcbiAgICAgICAgbGV0IHJhbmRvbVBlcmNlbnRhZ2UgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgY29uc3QgUmVzcG9uc2UgPSBhd2FpdCBCYW5uZXJcclxuICAgICAgICAgICAgLmZpbmQoeyBwZXJjZW50YWdlIDogeyAkZ3RlIDogcmFuZG9tUGVyY2VudGFnZSB9fSkubGltaXQoMSlcclxuXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oUmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKXtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnIpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQmFubmVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInJhbmRvbVBlcmNlbnRhZ2UiLCJNYXRoIiwicmFuZG9tIiwiUmVzcG9uc2UiLCJmaW5kIiwicGVyY2VudGFnZSIsIiRndGUiLCJsaW1pdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/banner.ts\n");

/***/ }),

/***/ "(api)/./src/utils/dbConfig.ts":
/*!*******************************!*\
  !*** ./src/utils/dbConfig.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_connetMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/connetMongo */ \"(api)/./config/connetMongo.ts\");\n\nconst connect = async ()=>{\n    await (0,_config_connetMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUMsVUFBVTtJQUNaLE1BQU1ELCtEQUFXQTtBQUNyQjtBQUdBLGlFQUFlQyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy91dGlscy9kYkNvbmZpZy50cz9mY2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZXRNb25nbyBmcm9tIFwiLi4vLi4vY29uZmlnL2Nvbm5ldE1vbmdvXCI7XHJcblxyXG5jb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgY29ubmV0TW9uZ28oKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDsiXSwibmFtZXMiOlsiY29ubmV0TW9uZ28iLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/dbConfig.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/banner.ts"));
module.exports = __webpack_exports__;

})();