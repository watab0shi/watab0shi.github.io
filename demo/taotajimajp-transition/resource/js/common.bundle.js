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

/***/ "./src/Page/Canvas/index.js":
/*!**********************************!*\
  !*** ./src/Page/Canvas/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/loaders/TextureLoader */ \"./node_modules/three/src/loaders/TextureLoader.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/shader.vert */ \"./src/Page/Canvas/shaders/shader.vert\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/shader.frag */ \"./src/Page/Canvas/shaders/shader.frag\");\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(_ref) {\n    var w = _ref.w,\n        h = _ref.h,\n        dpr = _ref.dpr,\n        eContainer = _ref.eContainer,\n        imageUrls = _ref.imageUrls;\n\n    _classCallCheck(this, Canvas);\n\n    this.w = w;\n    this.h = h;\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h);\n    this.renderer.setPixelRatio(dpr);\n    eContainer.appendChild(this.renderer.domElement);\n    this.camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__[\"OrthographicCamera\"](-1, 1, 1, -1, 0, -1);\n    var geo = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__[\"PlaneGeometry\"](2, 2, 1, 1);\n    var loader = new three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_4__[\"TextureLoader\"]();\n    this.textures = imageUrls.map(function (url) {\n      return loader.load(url);\n    }); // urlからテクスチャ読み込み\n\n    this.uniforms = {\n      uTime: {\n        value: 0.0\n      },\n      uFixAspect: {\n        value: this.h / this.w\n      },\n      uProgress: {\n        value: 0.0\n      },\n      uAccel: {\n        value: new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0.5, 2.0)\n      },\n      uTex0: {\n        value: this.textures[0]\n      },\n      uTex1: {\n        value: this.textures[1]\n      }\n    };\n    var mat = new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_5__[\"ShaderMaterial\"]({\n      uniforms: this.uniforms,\n      vertexShader: _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8___default.a,\n      fragmentShader: _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9___default.a\n    });\n    var mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat);\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"]();\n    this.scene.add(mesh);\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"isValidTextureIndex\",\n    value: function isValidTextureIndex(index) {\n      var isValid = index >= 0 && index < this.textures.length;\n      if (!isValid) console.log(\"\".concat(index, \" is not valid texture index!\"));\n      return isValid;\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var sec = performance.now() / 1000;\n      this.uniforms.uTime.value = sec;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(w, h) {\n      this.w = w;\n      this.h = h;\n      this.renderer.setSize(this.w, this.h);\n      this.uniforms.uFixAspect.value = this.h / this.w;\n      this.camera.updateProjectionMatrix();\n    }\n  }, {\n    key: \"textureIndex0\",\n    set: function set(index) {\n      if (this.isValidTextureIndex(index)) {\n        this.uniforms.uTex0.value = this.textures[index];\n      }\n    }\n  }, {\n    key: \"textureIndex1\",\n    set: function set(index) {\n      if (this.isValidTextureIndex(index)) {\n        this.uniforms.uTex1.value = this.textures[index];\n      }\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/Page/Canvas/index.js?");

/***/ }),

/***/ "./src/Page/Canvas/shaders/shader.frag":
/*!*********************************************!*\
  !*** ./src/Page/Canvas/shaders/shader.frag ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nvarying vec2      vUv;\\nvarying vec2      vUv1;\\n\\nuniform float     uTime;\\nuniform float     uProgress;\\nuniform vec2      uAccel;\\nuniform sampler2D uTex0;\\nuniform sampler2D uTex1;\\n\\nvec2 translateDirection = vec2( -.5, 1. );\\n\\nvec2 mirrored( vec2 v ) {\\n  vec2 m = mod( v, 2. );\\n  return mix( m, 2. - m, step( 1., m ) );\\n}\\n\\nfloat tri( float p ) {\\n  return mix( p, 1. - p, step( .5, p ) ) * 2.;\\n}\\n\\nvoid main() {\\n  vec2 uv = vUv;\\n\\n  float pct = fract( uProgress );\\n\\n  float delayValue = ( ( pct * 7. ) - ( uv.y * 2. ) + uv.x ) - 2.;\\n  delayValue = clamp( delayValue, 0., 1. );\\n\\n  vec2 translate = pct + delayValue * uAccel;\\n  vec2 translate0 = translateDirection * translate;\\n  vec2 translate1 = translateDirection * ( translate - 1. - uAccel );\\n\\n  vec2 w = sin( sin( uTime ) * vec2( 0., 0.3 ) + uv.yx * vec2( 0., 4. ) ) * vec2( 0., .5 );\\n  vec2 xy = w * ( tri( pct ) * .5 + tri( delayValue ) * .5 );\\n\\n  vec2 uv0 = vUv1 + translate0 + xy;\\n  vec2 uv1 = vUv1 + translate1 + xy;\\n\\n  vec3 color0 = texture2D( uTex0, mirrored( uv0 ) ).rgb;\\n  vec3 color1 = texture2D( uTex1, mirrored( uv1 ) ).rgb;\\n\\n  vec3 color = mix( color0, color1, delayValue );\\n\\n  // 確認用\\n  // color = color0;\\n  // color = color1;\\n  // color = vec3( delayValue );\\n  // color = vec3( translate0, 0. );\\n  // color = vec3( translate1, 0. );\\n  // color = vec3( w, 0. );\\n  // color = vec3( xy, 0. );\\n  // color = vec3( uv0, 0. );\\n  // color = vec3( uv1, 0. );\\n\\n  gl_FragColor = vec4( color, 1. );\\n}\\n\"\n\n//# sourceURL=webpack:///./src/Page/Canvas/shaders/shader.frag?");

/***/ }),

/***/ "./src/Page/Canvas/shaders/shader.vert":
/*!*********************************************!*\
  !*** ./src/Page/Canvas/shaders/shader.vert ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\nvarying vec2 vUv;\\nvarying vec2 vUv1;\\n\\nuniform float uFixAspect;\\n\\nvoid main() {\\n  vUv = uv;\\n\\n  // アスペクト補正（cover）\\n  vUv1 = uv - 0.5;\\n  vUv1.y *= uFixAspect;\\n  vUv1 += 0.5;\\n\\n  gl_Position = vec4( position, 1.0 );\\n}\\n\"\n\n//# sourceURL=webpack:///./src/Page/Canvas/shaders/shader.vert?");

/***/ }),

/***/ "./src/Page/index.js":
/*!***************************!*\
  !*** ./src/Page/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Page/Canvas/index.js\");\n/* harmony import */ var _userAgent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userAgent */ \"./src/userAgent.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Page =\n/*#__PURE__*/\nfunction () {\n  function Page() {\n    var _this = this;\n\n    _classCallCheck(this, Page);\n\n    // デバッグ用\n    this.isDebug = true;\n\n    if (this.isDebug) {\n      this.debug = document.createElement('div');\n      this.debug.setAttribute('id', 'debug');\n      document.body.appendChild(this.debug);\n    }\n\n    this.w = window.innerWidth;\n    this.h = window.innerHeight;\n    var dpr = window.devicePixelRatio;\n    var imageUrls = ['./resource/img/img-cat-01.jpg', './resource/img/img-cat-02.jpg', './resource/img/img-cat-03.jpg', './resource/img/img-cat-04.jpg'];\n    this.numImages = imageUrls.length;\n    this.canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      w: this.w,\n      h: this.h,\n      dpr: dpr,\n      eContainer: document.getElementById('canvas-container'),\n      imageUrls: imageUrls\n    });\n    this.scrollSpeed = 0.0;\n    this.scrollPosition = 0.0;\n    this.scrollMinusOffset = 1;\n    this.deltaYMult = Object(_userAgent__WEBPACK_IMPORTED_MODULE_1__[\"isWindows\"])() && Object(_userAgent__WEBPACK_IMPORTED_MODULE_1__[\"isFirefox\"])() ? 40 : 1;\n    window.addEventListener('wheel', function (e) {\n      _this.wheel(e);\n    });\n    window.addEventListener('resize', function (e) {\n      _this.resize();\n    });\n    this.render();\n  }\n\n  _createClass(Page, [{\n    key: \"update\",\n    value: function update() {\n      this.scrollPosition += this.scrollSpeed;\n      this.scrollSpeed *= 0.7;\n      var target = Math.round(this.scrollPosition); // 四捨五入して、一番近い index を目標値に\n\n      if (Math.abs(target - this.scrollPosition) < 0.001) {\n        this.scrollPosition = target; // ある程度近づいたら、位置を固定\n      } else {\n        this.scrollPosition += (target - this.scrollPosition) * 0.03; // 遠いときは、一番近い index にゆっくり近づける\n      }\n\n      var size = this.numImages;\n      var currentIndex = Math.floor(this.scrollPosition) % size;\n      var nextIndex = (currentIndex + 1) % size; // this.scrollPositionがマイナスのときは、sizeから引いてマイナスならないように\n\n      if (this.scrollPosition < 0) {\n        currentIndex = (size * this.scrollMinusOffset - Math.abs(Math.floor(this.scrollPosition))) % size; // マイナスインデックスになったら、プラスになるように再計算\n\n        if (currentIndex < 0) {\n          ++this.scrollMinusOffset;\n          currentIndex = (size * this.scrollMinusOffset - Math.abs(Math.floor(this.scrollPosition))) % size;\n        }\n\n        nextIndex = (currentIndex + 1) % size;\n      } // デバッグ表示\n\n\n      if (this.isDebug) {\n        this.debug.innerHTML = \"\\npos: \".concat(this.scrollPosition.toFixed(3), \"<br>\\ntgt: \").concat(target, \"<br>\\ncur: \").concat(currentIndex, \"<br>\\nnxt: \").concat(nextIndex);\n      } // canvasを更新\n\n\n      this.canvas.update();\n      this.canvas.uniforms.uProgress.value = this.scrollPosition;\n      this.canvas.textureIndex0 = currentIndex;\n      this.canvas.textureIndex1 = nextIndex;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      requestAnimationFrame(function () {\n        _this2.render();\n      });\n      this.update();\n      this.canvas.render();\n    }\n  }, {\n    key: \"wheel\",\n    value: function wheel(e) {\n      var deltaY = e.wheelDelta !== NaN ? e.deltaY : -e.wheelDelta;\n      if (this.isWinFirefox) deltaY *= 40;\n      this.scrollSpeed += deltaY * 0.0002;\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      this.w = window.innerWidth;\n      this.h = window.innerHeight;\n      this.canvas.resize(this.w, this.h);\n    }\n  }]);\n\n  return Page;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/Page/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./src/Page/index.js\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var page = new _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/userAgent.js":
/*!**************************!*\
  !*** ./src/userAgent.js ***!
  \**************************/
/*! exports provided: isWindows, getBrowser, isIE, isEdge, isFirefox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWindows\", function() { return isWindows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBrowser\", function() { return getBrowser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIE\", function() { return isIE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEdge\", function() { return isEdge; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFirefox\", function() { return isFirefox; });\nvar ua = window.navigator.userAgent.toLowerCase();\nvar pf = window.navigator.platform.toLowerCase();\nvar isWindows = function isWindows() {\n  return pf.includes(\"win\");\n};\nvar getBrowser = function getBrowser() {\n  if (ua.includes(\"msie\") || ua.includes(\"trident\")) {\n    return \"ie\";\n  } else if (ua.includes(\"edge\")) {\n    return \"edge\";\n  } else if (ua.includes(\"chrome\")) {\n    return \"chrome\";\n  } else if (ua.includes(\"safari\")) {\n    return \"safari\";\n  } else if (ua.includes(\"firefox\")) {\n    return \"firefox\";\n  } else if (ua.includes(\"opera\")) {\n    return \"opera\";\n  } else {\n    return \"\";\n  }\n};\nvar isIE = function isIE() {\n  return getBrowser() === \"ie\";\n};\nvar isEdge = function isEdge() {\n  return getBrowser() === \"edge\";\n};\nvar isFirefox = function isFirefox() {\n  return getBrowser() === \"firefox\";\n};\n\n//# sourceURL=webpack:///./src/userAgent.js?");

/***/ })

/******/ });