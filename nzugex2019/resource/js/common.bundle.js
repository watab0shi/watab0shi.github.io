/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./src/css/style.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Righteous);\", \"\"]);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700);\", \"\"]);\n\n// Module\nexports.push([module.i, \"@-webkit-keyframes scroll-anim {\\n  0% {\\n    top: 0;\\n  }\\n  100% {\\n    top: 10px;\\n  }\\n}\\n\\n@keyframes scroll-anim {\\n  0% {\\n    top: 0;\\n  }\\n  100% {\\n    top: 10px;\\n  }\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  position: relative;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\n\\nhtml {\\n  height: 100%;\\n  font-size: 14px;\\n  font-family: 'Noto Sans JP', sans-serif;\\n}\\n\\nbody {\\n  margin: 0;\\n  height: 100%;\\n  background-color: #fff;\\n}\\n\\n#canvas-container-back,\\n#canvas-container-front {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n#canvas-container-back  canvas,\\n#canvas-container-front canvas {\\n  display: block;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n#canvas-container-front {\\n  pointer-events: none;\\n}\\n\\n\\n.main {\\n  display: block;\\n  position: relative;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  width: calc(100% - 50px);\\n  max-width: 1000px;\\n  margin: 100vh auto;\\n  padding: 120px 15px;\\n  border-radius: 10px;\\n}\\n\\n.hdg-title-en,\\n.hdg-title-jp,\\n.txt-date,\\n.txt-free,\\n.txt-location,\\n.opening {\\n  text-align: center;\\n  color: #fff;\\n  margin-bottom: 60px;\\n}\\n.hdg-title-en {\\n  font-family: 'Righteous', sans-serif;\\n}\\n.hdg-title-en .txt {\\n  display: block;\\n}\\n.hdg-title-en .txt-grad {\\n  font-size: 52px;\\n  letter-spacing: 0.05em;\\n}\\n.hdg-title-en .txt-nagoya {\\n  font-size: 24px;\\n  letter-spacing: 0.2em;\\n}\\n\\n.hdg-title-jp {\\n  font-size: 20px;\\n  letter-spacing: 0.025em;\\n}\\n.hdg-title-jp .txt-times {\\n  margin-right: 15px;\\n}\\n.hdg-title-jp .txt-small {\\n  font-size: 18px;\\n}\\n.hdg-title-jp .txt-small:last-child {\\n  margin-left: 10px;\\n}\\n\\n\\n.txt-date {\\n  font-size: 28px;\\n  font-weight: 700;\\n}\\n.txt-date .txt-day-of-week {\\n  font-size: 20px;\\n  margin: 0 10px;\\n}\\n.txt-date .txt-note {\\n  font-size: 16px;\\n  font-weight: 400;\\n  display: block;\\n}\\n\\n.txt-link {\\n  text-align: center;\\n  color: #fff;\\n  font-size: 14px;\\n  font-weight: 700;\\n}\\n.txt-link .txt-official {\\n  display: block;\\n}\\n.txt-link .link {\\n  display: inline-block;\\n  -webkit-transition: color .25s ease;\\n  transition: color .25s ease;\\n}\\n.txt-link .link,\\n.txt-link .link:link,\\n.txt-link .link:visited {\\n  color: #fff;\\n  text-decoration: none;\\n}\\n.txt-link .link:hover {\\n  color: #ff0;\\n}\\n\\n.txt-free {\\n  display: inline-block;\\n  position: relative;\\n  border: 1px solid #fff;\\n\\n  left: 50%;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n  font-size: 14px;\\n  padding: 2px 6px;\\n}\\n\\n.txt-location .txt-gallery {\\n  font-size: 20px;\\n  font-weight: 700;\\n}\\n.txt-location .txt-address {\\n  display: block;\\n}\\n\\n.txt-scroll {\\n  position: fixed;\\n  left: 50%;\\n  bottom: 50px;\\n  color: #000;\\n  font-family: 'Righteous', sans-serif;\\n  letter-spacing: 0.2em;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n  opacity: 1;\\n  -webkit-transition: opacity 0.5s ease;\\n  transition: opacity 0.5s ease;\\n}\\n.txt-scroll::after {\\n  content: '';\\n  position: absolute;\\n\\n  width: 20px;\\n  height: 20px;\\n  border-right: 1px solid #000;\\n  border-bottom: 1px solid #000;\\n  left: 50%;\\n  margin-top: 20px;\\n  -webkit-transform: translateX(-55%) rotateZ(45deg);\\n          transform: translateX(-55%) rotateZ(45deg);\\n\\n  -webkit-animation: scroll-anim 1s ease infinite;\\n\\n          animation: scroll-anim 1s ease infinite;\\n}\\n.txt-scroll.is-hidden {\\n  opacity: 0;\\n}\\n\\n.opening_hdg {\\n  font-size: 20px;\\n  font-weight: 400;\\n}\\n.opening_txt-date {\\n  font-size: 20px;\\n  font-weight: 700;\\n}\\n.opening_txt-date .txt-small {\\n  font-size: 16px;\\n  font-weight: 400;\\n  margin: 0 10px;\\n}\\n.opening_txt-location {\\n  font-size: 16px;\\n  font-weight: 400;\\n}\\n.opening_txt-location .txt-small {\\n  font-size: 14px;\\n  font-weight: 400;\\n}\\n\\n.only-sp {\\n  display: none;\\n}\\n\\n\\n/* SP */\\n@media screen and (max-width:767px) {\\n\\n.main {\\n  width: calc(100% - 15px);\\n  padding: 60px 10px;\\n}\\n\\n.hdg-title-en,\\n.hdg-title-jp,\\n.txt-date {\\n  margin-bottom: 30px;\\n}\\n\\n.hdg-title-en .txt-grad {\\n  font-size: 36px;\\n}\\n.hdg-title-en .txt-nagoya {\\n  font-size: 16px;\\n  letter-spacing: 0.025em;\\n}\\n\\n.hdg-title-jp {\\n  font-size: 14px;\\n}\\n.hdg-title-jp .txt-times {\\n  margin-right: 12px;\\n}\\n.hdg-title-jp .txt-small {\\n  font-size: 12px;\\n}\\n\\n.txt-date {\\n  font-size: 18px;\\n  font-weight: 700;\\n}\\n.txt-date .txt-day-of-week {\\n  font-size: 14px;\\n  margin: 0 5px;\\n}\\n.txt-date .txt-note {\\n  font-size: 12px;\\n}\\n\\n.txt-link {\\n  font-size: 12px;\\n}\\n\\n.txt-location .txt-gallery {\\n  font-size: 18px;\\n}\\n.txt-location .txt-address {\\n  font-size: 12px;\\n}\\n.txt-location .txt-access {\\n  display: block;\\n}\\n\\n.only-sp {\\n  display: block;\\n}\\n\\n}\\n\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2");

/***/ }),

/***/ "./src/Canvas/BoxMesh.js":
/*!*******************************!*\
  !*** ./src/Canvas/BoxMesh.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BoxMesh; });\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/materials/MeshBasicMaterial */ \"./node_modules/three/src/materials/MeshBasicMaterial.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_objects_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/objects/Group */ \"./node_modules/three/src/objects/Group.js\");\n/* harmony import */ var three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/math/Vector3 */ \"./node_modules/three/src/math/Vector3.js\");\n/* harmony import */ var three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/math/Math */ \"./node_modules/three/src/math/Math.js\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/Canvas/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/frag_shaded.glsl */ \"./src/Canvas/shaders/frag_shaded.glsl\");\n/* harmony import */ var _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_8__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\nvar createPlaneMesh = function createPlaneMesh(pos, rot, size, color, alpha, uniforms) {\n  var geo = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_0__[\"PlaneBufferGeometry\"](1, 1, 1, 1);\n  var mat = uniforms !== undefined ? new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_2__[\"ShaderMaterial\"]({\n    uniforms: uniforms,\n    vertexShader: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_7___default.a,\n    fragmentShader: _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_8___default.a\n  }) : new three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_1__[\"MeshBasicMaterial\"]({\n    color: color,\n    opacity: alpha,\n    transparent: true\n  });\n  var mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_3__[\"Mesh\"](geo, mat);\n  mesh.position.set(pos.x, pos.y, pos.z);\n  mesh.scale.set(size, size, size);\n  mesh.rotation.set(rot.x, rot.y, rot.z);\n  return mesh;\n};\n\nvar BoxMesh =\n/*#__PURE__*/\nfunction (_Group) {\n  _inherits(BoxMesh, _Group);\n\n  function BoxMesh(pos, size, color) {\n    var _this;\n\n    _classCallCheck(this, BoxMesh);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(BoxMesh).call(this));\n    _this.uniforms = {\n      'uTime': {\n        value: 0.0\n      },\n      'uColor': {\n        value: color\n      },\n      'uMaskType': {\n        value: three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randInt(0, 4)\n      }\n    };\n    var pi = Math.PI;\n    var hp = pi * .5;\n    var cz = color;\n    var plane_pz = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](.0, .0, .5), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](0, 0, 0), 1, cz, 1.);\n    var plane_mz = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](.0, .0, -.5), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](pi, 0, 0), 1, cz, 1.);\n    var cy = color.clone().multiplyScalar(.75);\n    var plane_py = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](.0, .5, 0), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](-hp, 0, 0), 1, cy, 1.);\n    var plane_my = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](.0, -.5, 0), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](hp, 0, 0), 1, cy, 1.);\n    var cx = color;\n    var plane_px = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](.5, 0, 0), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](0, hp, 0), 1, cx, 1., _this.uniforms);\n    var plane_mx = createPlaneMesh(new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](-.5, 0, 0), new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](0, -hp, 0), 1, cx, 1., _this.uniforms);\n\n    _this.add(plane_pz);\n\n    _this.add(plane_mz);\n\n    _this.add(plane_py);\n\n    _this.add(plane_my);\n\n    _this.add(plane_px);\n\n    _this.add(plane_mx);\n\n    _this.position.set(pos.x, pos.y, pos.z);\n\n    _this.scale.set(size, size, size);\n\n    var rotAxis = new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_5__[\"Vector3\"](three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(2), three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(2), three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(2)).normalize();\n    var angle = three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(2) * Math.PI;\n\n    _this.setRotationFromAxisAngle(rotAxis, angle);\n\n    _this.rotEaseX = (0.004 + three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(0.003)) * (three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(1) > 0 ? 1 : -1);\n    _this.rotEaseY = (0.004 + three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(0.003)) * (three_src_math_Math__WEBPACK_IMPORTED_MODULE_6__[\"_Math\"].randFloatSpread(1) > 0 ? 1 : -1);\n    return _this;\n  }\n\n  _createClass(BoxMesh, [{\n    key: \"update\",\n    value: function update(sec) {\n      this.uniforms['uTime'].value = sec;\n    }\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      this.rotation.x = y * (Math.PI * 300) * this.rotEaseX;\n      this.rotation.y = y * (Math.PI * 300) * this.rotEaseY;\n    }\n  }]);\n\n  return BoxMesh;\n}(three_src_objects_Group__WEBPACK_IMPORTED_MODULE_4__[\"Group\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/BoxMesh.js?");

/***/ }),

/***/ "./src/Canvas/Canvas.js":
/*!******************************!*\
  !*** ./src/Canvas/Canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(canvasIdBase, isFront, scene) {\n    _classCallCheck(this, Canvas);\n\n    this.isFront = isFront; // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_2__[\"Vector2\"](0, 0); // ウィンドウサイズ\n\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true,\n      antialias: true\n    });\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n\n    this.renderer.setClearColor(0xffffff, 0); // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(canvasIdBase + (this.isFront ? '-front' : '-back'));\n    container.appendChild(this.renderer.domElement);\n    var fov = 90;\n    var fovRad = fov / 2 * (Math.PI / 180);\n    var dist = this.h / 2 / Math.tan(fovRad);\n    var near = this.isFront ? 1 : dist;\n    var far = this.isFront ? dist + 1 : dist * 15;\n    this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](fov, this.w / this.h, near, far);\n    this.camera.position.z = dist;\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render(scene) {\n      // 画面に表示\n      this.renderer.render(scene, this.camera);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x - this.w / 2; // 原点を中心に持ってくる\n\n      this.mouse.y = -y + this.h / 2; // 軸を反転して原点を中心に持ってくる\n    }\n  }, {\n    key: \"resetCamera\",\n    value: function resetCamera() {\n      var fov = 90;\n      var fovRad = fov / 2 * (Math.PI / 180);\n      var dist = this.h / 2 / Math.tan(fovRad);\n      var near = this.isFront ? 1 : dist;\n      var far = this.isFront ? dist + 1 : dist * 10;\n      this.camera.position.z = dist;\n      this.camera.aspect = this.w / this.h;\n      this.camera.updateProjectionMatrix();\n    }\n  }, {\n    key: \"resized\",\n    value: function resized(w, h) {\n      this.w = w;\n      this.h = h;\n      this.renderer.setSize(w, h);\n      this.resetCamera();\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/Canvas.js?");

/***/ }),

/***/ "./src/Canvas/CanvasGroup.js":
/*!***********************************!*\
  !*** ./src/Canvas/CanvasGroup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CanvasGroup; });\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var _MeshGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshGroup */ \"./src/Canvas/MeshGroup.js\");\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas/Canvas.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar CanvasGroup =\n/*#__PURE__*/\nfunction () {\n  function CanvasGroup() {\n    _classCallCheck(this, CanvasGroup);\n\n    var isSP = window.innerWidth < 768;\n    this.meshes = new _MeshGroup__WEBPACK_IMPORTED_MODULE_1__[\"default\"](isSP);\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    this.scene.add(this.meshes);\n    this.canvasB = new _Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('canvas-container', false);\n    this.canvasF = new _Canvas__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('canvas-container', true);\n    this.render();\n  }\n\n  _createClass(CanvasGroup, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000;\n      this.meshes.update(sec);\n      this.canvasB.render(this.scene);\n      this.canvasF.render(this.scene);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.canvasB.mouseMoved(x, y);\n      this.canvasF.mouseMoved(x, y);\n    }\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      this.meshes.scrolled(y);\n    }\n  }, {\n    key: \"resized\",\n    value: function resized(w, h) {\n      this.canvasB.resized(w, h);\n      this.canvasF.resized(w, h);\n    }\n  }]);\n\n  return CanvasGroup;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/CanvasGroup.js?");

/***/ }),

/***/ "./src/Canvas/MeshGroup.js":
/*!*********************************!*\
  !*** ./src/Canvas/MeshGroup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MeshGroup; });\n/* harmony import */ var _BoxMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxMesh */ \"./src/Canvas/BoxMesh.js\");\n/* harmony import */ var _RegPolygonLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegPolygonLine */ \"./src/Canvas/RegPolygonLine.js\");\n/* harmony import */ var _RegPolygonMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegPolygonMesh */ \"./src/Canvas/RegPolygonMesh.js\");\n/* harmony import */ var three_src_objects_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/objects/Group */ \"./node_modules/three/src/objects/Group.js\");\n/* harmony import */ var three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/math/Vector3 */ \"./node_modules/three/src/math/Vector3.js\");\n/* harmony import */ var three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/math/Math */ \"./node_modules/three/src/math/Math.js\");\n/* harmony import */ var three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/math/Color */ \"./node_modules/three/src/math/Color.js\");\n/* harmony import */ var three_src_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/constants */ \"./node_modules/three/src/constants.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar palette = [0xff0000, 0x00ff00, 0x0000ff, 0xff00ff, 0xffff00, 0x00ffff];\n\nvar MeshGroup =\n/*#__PURE__*/\nfunction (_Group) {\n  _inherits(MeshGroup, _Group);\n\n  function MeshGroup(isSP) {\n    var _this;\n\n    _classCallCheck(this, MeshGroup);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MeshGroup).call(this));\n    _this.boxes = [];\n    _this.polyLines = [];\n    _this.polyMeshes = [];\n    var r = isSP ? window.innerHeight : window.innerWidth;\n    var numBoxes = isSP ? 20 : 50;\n\n    for (var i = 0; i < numBoxes; ++i) {\n      var bPos = new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_4__[\"Vector3\"](three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r * 3));\n      var bSiz = three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloat(80, 150) * (isSP ? 0.5 : 1);\n      var bCol = new three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__[\"Color\"](palette[three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randInt(0, palette.length - 1)]);\n\n      _this.boxes.push(new _BoxMesh__WEBPACK_IMPORTED_MODULE_0__[\"default\"](bPos, bSiz, bCol));\n\n      var plPos = new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_4__[\"Vector3\"](three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r * 3));\n      var plSiz = three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloat(40, 80) * (isSP ? 0.5 : 1);\n      var plCol = new three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__[\"Color\"](palette[three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randInt(0, palette.length - 1)]);\n\n      var plAgl = three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randInt(3, 9);\n\n      _this.polyLines.push(new _RegPolygonLine__WEBPACK_IMPORTED_MODULE_1__[\"default\"](plPos, plSiz, plCol, plAgl));\n\n      var pmPos = new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_4__[\"Vector3\"](three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r), three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloatSpread(r * 3));\n      var pmSiz = three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randFloat(40, 80) * (isSP ? 0.5 : 1);\n      var pmCol = new three_src_math_Color__WEBPACK_IMPORTED_MODULE_6__[\"Color\"](palette[three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randInt(0, palette.length - 1)]);\n\n      var pmAgl = three_src_math_Math__WEBPACK_IMPORTED_MODULE_5__[\"_Math\"].randInt(3, 9);\n\n      _this.polyMeshes.push(new _RegPolygonMesh__WEBPACK_IMPORTED_MODULE_2__[\"default\"](pmPos, pmSiz, pmCol, pmAgl));\n    }\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = _this.boxes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var b = _step.value;\n\n        _this.add(b);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = _this.polyLines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var pl = _step2.value;\n\n        _this.add(pl);\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n          _iterator2.return();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = _this.polyMeshes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var pm = _step3.value;\n\n        _this.add(pm);\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n          _iterator3.return();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n\n    _this.position.z = -2000;\n    _this.smoothY = 1.0;\n    _this.scrollY = 0;\n    return _this;\n  }\n\n  _createClass(MeshGroup, [{\n    key: \"update\",\n    value: function update(sec) {\n      this.smoothY += (this.scrollY - this.smoothY) * 0.05;\n      var s = this.smoothY * 4200;\n      this.position.z = -2000 + s;\n      var _iteratorNormalCompletion4 = true;\n      var _didIteratorError4 = false;\n      var _iteratorError4 = undefined;\n\n      try {\n        for (var _iterator4 = this.boxes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n          var b = _step4.value;\n          b.scrolled(this.smoothY);\n          b.update(sec);\n        }\n      } catch (err) {\n        _didIteratorError4 = true;\n        _iteratorError4 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n            _iterator4.return();\n          }\n        } finally {\n          if (_didIteratorError4) {\n            throw _iteratorError4;\n          }\n        }\n      }\n\n      var _iteratorNormalCompletion5 = true;\n      var _didIteratorError5 = false;\n      var _iteratorError5 = undefined;\n\n      try {\n        for (var _iterator5 = this.polyMeshes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n          var pm = _step5.value;\n          pm.update(sec);\n        }\n      } catch (err) {\n        _didIteratorError5 = true;\n        _iteratorError5 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {\n            _iterator5.return();\n          }\n        } finally {\n          if (_didIteratorError5) {\n            throw _iteratorError5;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      // for(const b of this.boxes) {\n      //  b.scrolled(y);\n      // }\n      this.scrollY = y;\n    }\n  }]);\n\n  return MeshGroup;\n}(three_src_objects_Group__WEBPACK_IMPORTED_MODULE_3__[\"Group\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/MeshGroup.js?");

/***/ }),

/***/ "./src/Canvas/RegPolygonLine.js":
/*!**************************************!*\
  !*** ./src/Canvas/RegPolygonLine.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegPolygonLine; });\n/* harmony import */ var three_src_core_Geometry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/core/Geometry */ \"./node_modules/three/src/core/Geometry.js\");\n/* harmony import */ var three_src_objects_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/objects/Line */ \"./node_modules/three/src/objects/Line.js\");\n/* harmony import */ var three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/math/Vector3 */ \"./node_modules/three/src/math/Vector3.js\");\n/* harmony import */ var three_src_math_Math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/math/Math */ \"./node_modules/three/src/math/Math.js\");\n/* harmony import */ var three_src_materials_LineBasicMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/materials/LineBasicMaterial */ \"./node_modules/three/src/materials/LineBasicMaterial.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar RegPolygonLine =\n/*#__PURE__*/\nfunction (_Line) {\n  _inherits(RegPolygonLine, _Line);\n\n  function RegPolygonLine(pos, radius, color, numAngles) {\n    var _this;\n\n    _classCallCheck(this, RegPolygonLine);\n\n    var nA = numAngles >= 9 ? 32 : numAngles;\n    var geo = new three_src_core_Geometry__WEBPACK_IMPORTED_MODULE_0__[\"Geometry\"]();\n    var mat = new three_src_materials_LineBasicMaterial__WEBPACK_IMPORTED_MODULE_4__[\"LineBasicMaterial\"]({\n      color: color\n    });\n    var a = Math.PI * 2 / nA;\n\n    for (var i = 0; i < nA + 1; ++i) {\n      var p = new three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_2__[\"Vector3\"](Math.cos(i * a), Math.sin(i * a), 0);\n      geo.vertices.push(p);\n    }\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegPolygonLine).call(this, geo, mat));\n\n    _this.position.set(pos.x, pos.y, pos.z);\n\n    _this.rotation.x = three_src_math_Math__WEBPACK_IMPORTED_MODULE_3__[\"_Math\"].randFloatSpread(Math.PI / 4);\n    _this.rotation.y = three_src_math_Math__WEBPACK_IMPORTED_MODULE_3__[\"_Math\"].randFloatSpread(Math.PI / 4);\n    _this.rotation.z = three_src_math_Math__WEBPACK_IMPORTED_MODULE_3__[\"_Math\"].randFloatSpread(Math.PI);\n\n    _this.scale.set(radius, radius, radius);\n\n    return _this;\n  }\n\n  return RegPolygonLine;\n}(three_src_objects_Line__WEBPACK_IMPORTED_MODULE_1__[\"Line\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/RegPolygonLine.js?");

/***/ }),

/***/ "./src/Canvas/RegPolygonMesh.js":
/*!**************************************!*\
  !*** ./src/Canvas/RegPolygonMesh.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RegPolygonMesh; });\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\n/* harmony import */ var three_src_math_Vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/math/Vector3 */ \"./node_modules/three/src/math/Vector3.js\");\n/* harmony import */ var three_src_math_Math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/math/Math */ \"./node_modules/three/src/math/Math.js\");\n/* harmony import */ var three_src_extras_core_Shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/extras/core/Shape */ \"./node_modules/three/src/extras/core/Shape.js\");\n/* harmony import */ var three_src_geometries_ShapeGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/ShapeGeometry */ \"./node_modules/three/src/geometries/ShapeGeometry.js\");\n/* harmony import */ var three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshBasicMaterial */ \"./node_modules/three/src/materials/MeshBasicMaterial.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/vert.glsl */ \"./src/Canvas/shaders/vert.glsl\");\n/* harmony import */ var _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/frag_shaded.glsl */ \"./src/Canvas/shaders/frag_shaded.glsl\");\n/* harmony import */ var _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_9__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar RegPolygonMesh =\n/*#__PURE__*/\nfunction (_Mesh) {\n  _inherits(RegPolygonMesh, _Mesh);\n\n  function RegPolygonMesh(pos, radius, color, numAngles) {\n    var _this;\n\n    _classCallCheck(this, RegPolygonMesh);\n\n    var sMat = new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_6__[\"ShaderMaterial\"]({\n      uniforms: {\n        'uTime': {\n          value: 0.0\n        },\n        'uColor': {\n          value: color\n        },\n        'uMaskType': {\n          value: three_src_math_Math__WEBPACK_IMPORTED_MODULE_2__[\"_Math\"].randInt(0, 4)\n        }\n      },\n      vertexShader: _shaders_vert_glsl__WEBPACK_IMPORTED_MODULE_8___default.a,\n      fragmentShader: _shaders_frag_shaded_glsl__WEBPACK_IMPORTED_MODULE_9___default.a\n    });\n    var nA = numAngles >= 9 ? 32 : numAngles;\n    var s = new three_src_extras_core_Shape__WEBPACK_IMPORTED_MODULE_3__[\"Shape\"]();\n    var a = Math.PI * 2 / nA;\n\n    for (var i = 0; i < nA + 1; ++i) {\n      var x = Math.cos(i * a);\n      var y = Math.sin(i * a);\n      if (i == 0) s.moveTo(x, y);else s.lineTo(x, y);\n    }\n\n    var geo = new three_src_geometries_ShapeGeometry__WEBPACK_IMPORTED_MODULE_4__[\"ShapeBufferGeometry\"](s);\n    var mat = new three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshBasicMaterial\"]({\n      color: color\n    });\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegPolygonMesh).call(this, geo, sMat));\n\n    _this.position.set(pos.x, pos.y, pos.z);\n\n    _this.rotation.x = three_src_math_Math__WEBPACK_IMPORTED_MODULE_2__[\"_Math\"].randFloatSpread(Math.PI / 4);\n    _this.rotation.y = three_src_math_Math__WEBPACK_IMPORTED_MODULE_2__[\"_Math\"].randFloatSpread(Math.PI / 4);\n    _this.rotation.z = three_src_math_Math__WEBPACK_IMPORTED_MODULE_2__[\"_Math\"].randFloatSpread(Math.PI);\n\n    _this.scale.set(radius, radius, radius);\n\n    return _this;\n  }\n\n  _createClass(RegPolygonMesh, [{\n    key: \"update\",\n    value: function update(sec) {\n      this.material.uniforms['uTime'].value = sec;\n    }\n  }]);\n\n  return RegPolygonMesh;\n}(three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_7__[\"Mesh\"]);\n\n\n;\n\n//# sourceURL=webpack:///./src/Canvas/RegPolygonMesh.js?");

/***/ }),

/***/ "./src/Canvas/shaders/frag_shaded.glsl":
/*!*********************************************!*\
  !*** ./src/Canvas/shaders/frag_shaded.glsl ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"uniform float uTime;\\nuniform vec3  uColor;\\nuniform float uMaskType;\\nvarying vec2  vUv;\\n\\nconst float PI = 3.141592653589793238462643383279;\\n\\n// line\\nfloat mask00( vec2 _pos, float _time, float _rad, float _w )\\n{\\n  float scl  = 4.0;\\n  float spd  = _time * 0.2;\\n  vec2  nrm  = vec2( cos( _rad ), sin( _rad ) );\\n  float dist = dot( nrm, _pos );\\n  return step( mod( dist * scl + spd, 0.5 ), 0.5 * _w );\\n}\\n\\n// diamond\\nfloat mask01( vec2 _pos, float _time, float _rad, float _w )\\n{\\n  float m1 = mask00( _pos, _time,  _rad, _w );\\n  float m2 = mask00( _pos, _time, -_rad, _w);\\n  return m1 * m2;\\n}\\n\\n// check\\nfloat mask02( vec2 _pos, float _time )\\n{\\n  float scl = 2.0;\\n  float spd = _time * 0.2;\\n  float mx  = step( mod( _pos.x * scl + spd, 0.5 ), 0.25 );\\n  float my  = step( mod( _pos.y * scl + spd, 0.5 ), 0.25 );\\n  return ( mx == my ) ? 1.0 : 0.0;\\n}\\n\\nvoid main( void )\\n{\\n  vec2  pos  = vUv;\\n  float mask = mask00( pos, uTime, PI * 0.25, 0.5 );\\n\\n  if( uMaskType == 1.0 ) mask = max( mask00( pos, uTime + 0.15, 0.0, 0.7 ) - mask00( pos, uTime, 0.0, 0.2 ), 0.0 );\\n  if( uMaskType == 2.0 ) mask = mask00( pos, uTime, 0.0, 0.5 );\\n  if( uMaskType == 3.0 ) mask = mask01( pos, uTime, PI * 0.111111, 0.5 );\\n  if( uMaskType == 4.0 ) mask = mask02( pos, uTime );\\n\\n  vec3  col    = uColor;\\n  gl_FragColor = vec4( col * mask, mask );\\n  // gl_FragColor = vec4( pos.x, pos.y, 0.0, 1.0 );\\n}\"\n\n//# sourceURL=webpack:///./src/Canvas/shaders/frag_shaded.glsl?");

/***/ }),

/***/ "./src/Canvas/shaders/vert.glsl":
/*!**************************************!*\
  !*** ./src/Canvas/shaders/vert.glsl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\n\\nvoid main()\\n{\\n\\tvUv = uv;\\n\\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\\n\\tgl_Position = projectionMatrix * mvPosition;\\n}\"\n\n//# sourceURL=webpack:///./src/Canvas/shaders/vert.glsl?");

/***/ }),

/***/ "./src/Page.js":
/*!*********************!*\
  !*** ./src/Page.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _Canvas_CanvasGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas/CanvasGroup */ \"./src/Canvas/CanvasGroup.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page = function Page() {\n  _classCallCheck(this, Page);\n\n  var eTransparents = document.querySelectorAll('.is-transparent');\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = eTransparents[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var e = _step.value;\n      e.classList.remove('is-transparent');\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var canvasGroup = new _Canvas_CanvasGroup__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  window.addEventListener('mousemove', function (e) {\n    canvasGroup.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('scroll', function (e) {\n    var sy = window.scrollY;\n    var eScroll = document.querySelector('.txt-scroll');\n    if (sy <= 0) eScroll.classList.remove('is-hidden');else eScroll.classList.add('is-hidden');\n    var eMain = document.querySelector('.main');\n    var rect = eMain.getBoundingClientRect();\n    var offsetY = window.innerHeight;\n    var y = offsetY - rect.y;\n    var maxY = window.innerHeight + rect.height;\n    var yPct = y / maxY;\n    canvasGroup.scrolled(yPct);\n  });\n  window.addEventListener('resize', function (e) {\n    var w = window.innerWidth;\n    var h = window.innerHeight;\n    canvasGroup.resized(w, h); // const eDebug = document.querySelector('.debug');\n    // eDebug.innerHTML = `${ w } x ${ h } , ${ window.outerHeight }`;\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/Page.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../node_modules/postcss-loader/src??ref--6-2!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ \"./src/Page.js\");\n\n // ドキュメントを読み込んだらページごとの処理を実行\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  new _Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });