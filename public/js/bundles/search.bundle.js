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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/raw/plain/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/raw/plain/search.js":
/*!***************************************!*\
  !*** ./public/js/raw/plain/search.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dreams = []; // define variables that reference elements on our page\n\nvar dreamsList = document.getElementById(\"results\");\nvar resnum = document.getElementById(\"results-num\");\nvar dsearch = document.getElementById(\"search\"); // a helper function to call when our request for dreams is done\n\nvar gettextListener = function gettextListener() {\n  dreamsList.innerHTML = \"\";\n  dreams = this.responseText.split(\" 1 \");\n  dreams.shift();\n\n  for (var i = 0; i < dreams.length; i++) {\n    dreams[i] = dreams[i].split(/[0-9]+/);\n  }\n};\n\nvar checkarray = function checkarray(a, f) {\n  console.log(a);\n  var a2 = [];\n  var v;\n\n  for (var i = 0; i < a.length; i++) {\n    v = a[i].replace(/[-\\/\\\\^$*+?.()|[\\]{}\"';:,!“—”]|[0-9]|\\n/g, \" \").trim().replace(/\\s\\s\\s/g, \" \").replace(/\\s\\s/g, \" \").replace(/\\s\\s/g, \" \");\n\n    if (v.toLowerCase().indexOf(f.toLowerCase()) !== -1) {\n      a2.push(a[i]);\n    } else {\n      a2.push(\"\");\n    }\n  }\n\n  return a2;\n};\n\ndsearch.addEventListener(\"keyup\", function (event) {\n  search(event.target.value);\n});\n\nvar search = function search(s) {\n  var a = [];\n  var al = 0;\n\n  for (var d = 0; d < dreams.length; d++) {\n    a.push(checkarray(dreams[d], s));\n  }\n\n  var pattern = new RegExp(\"(\" + s + \")\", \"gi\");\n  dreamsList.innerHTML = \"\";\n\n  for (var i = 0; i < a.length; i++) {\n    if (a[i].length > 0) {\n      for (var j = 0; j < a[i].length; j++) {\n        if (a[i][j] !== \"\") {\n          al++;\n\n          if (i <= 13) {\n            a[i][j] = \"<div class = 'verse' id = 'Hebrews-\" + (i + 1) + \":\" + (j + 1) + \"'><b>Hebrews \" + (i + 1) + \":\" + (j + 1) + \"</b> \" + a[i][j].replace(pattern, \"<b style = 'color:red;'>$1</b>\");\n          } else if (i <= 18 && i > 12) {\n            a[i][j] = \"<div class = 'verse' id = '1Peter-\" + (i + 1 - 13) + \":\" + (j + 1) + \"'><b>1Peter \" + (i + 1 - 13) + \":\" + (j + 1) + \"</b> \" + a[i][j].replace(pattern, \"<b style = 'color:red;'>$1</b>\");\n          } else {\n            a[i][j] = \"<div class = 'verse' id = '2Peter-\" + (i + 1 - 18) + \":\" + (j + 1) + \"'><b>2Peter \" + (i + 1 - 18) + \":\" + (j + 1) + \"</b> \" + a[i][j].replace(pattern, \"<b style = 'color:red;'>$1</b>\");\n          }\n        }\n\n        var k = document.createElement(\"div\");\n        k.innerHTML = a[i][j];\n        dreamsList.appendChild(k);\n      }\n    }\n  }\n\n  resnum.innerText = al + \" results\";\n}; // request the dreams from our app's sqlite database\n\n\nvar hebrewsRequest = new XMLHttpRequest();\nhebrewsRequest.onload = gettextListener;\nhebrewsRequest.open(\"get\", \"/gettext\");\nhebrewsRequest.send();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvcmF3L3BsYWluL3NlYXJjaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9yYXcvcGxhaW4vc2VhcmNoLmpzP2FlMDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkcmVhbXMgPSBbXTsgLy8gZGVmaW5lIHZhcmlhYmxlcyB0aGF0IHJlZmVyZW5jZSBlbGVtZW50cyBvbiBvdXIgcGFnZVxuXG52YXIgZHJlYW1zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKTtcbnZhciByZXNudW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3VsdHMtbnVtXCIpO1xudmFyIGRzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTsgLy8gYSBoZWxwZXIgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIG91ciByZXF1ZXN0IGZvciBkcmVhbXMgaXMgZG9uZVxuXG52YXIgZ2V0dGV4dExpc3RlbmVyID0gZnVuY3Rpb24gZ2V0dGV4dExpc3RlbmVyKCkge1xuICBkcmVhbXNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGRyZWFtcyA9IHRoaXMucmVzcG9uc2VUZXh0LnNwbGl0KFwiIDEgXCIpO1xuICBkcmVhbXMuc2hpZnQoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRyZWFtcy5sZW5ndGg7IGkrKykge1xuICAgIGRyZWFtc1tpXSA9IGRyZWFtc1tpXS5zcGxpdCgvWzAtOV0rLyk7XG4gIH1cbn07XG5cbnZhciBjaGVja2FycmF5ID0gZnVuY3Rpb24gY2hlY2thcnJheShhLCBmKSB7XG4gIGNvbnNvbGUubG9nKGEpXG4gIHZhciBhMiA9IFtdO1xuICBsZXQgdjtcbiAgZm9yKHZhciBpID0gMDtpPGEubGVuZ3RoO2krKyl7XG4gICAgdiA9IGFbaV1cbiAgICAgIC5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31cIic7Oiwh4oCc4oCU4oCdXXxbMC05XXxcXG4vZywgXCIgXCIpXG4gICAgICAudHJpbSgpXG4gICAgICAucmVwbGFjZSgvXFxzXFxzXFxzL2csIFwiIFwiKVxuICAgICAgLnJlcGxhY2UoL1xcc1xccy9nLCBcIiBcIilcbiAgICAgIC5yZXBsYWNlKC9cXHNcXHMvZywgXCIgXCIpO1xuICAgIGlmICh2LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmLnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgYTIucHVzaChhW2ldKVxuICAgIH0gZWxzZSB7XG4gICAgICBhMi5wdXNoKFwiXCIpXG4gICAgfVxuICB9XG4gIHJldHVybiBhMjtcbn07XG5cbmRzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHNlYXJjaChldmVudC50YXJnZXQudmFsdWUpO1xufSk7XG5cbnZhciBzZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2gocykge1xuICB2YXIgYSA9IFtdO1xuICB2YXIgYWwgPSAwO1xuXG4gIGZvciAodmFyIGQgPSAwOyBkIDwgZHJlYW1zLmxlbmd0aDsgZCsrKSB7XG4gICAgYS5wdXNoKGNoZWNrYXJyYXkoZHJlYW1zW2RdLCBzKSk7XG4gIH1cblxuICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoXCIoXCIgKyBzICsgXCIpXCIsIFwiZ2lcIik7XG4gIGRyZWFtc0xpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgXG4gICAgICAgIGlmKGFbaV1bal0hPT1cIlwiKXtcbiAgICAgICAgICBhbCsrO1xuICAgICAgICAgIGlmIChpIDw9IDEzKSB7XG4gICAgICAgICAgICBhW2ldW2pdID1cbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzID0gJ3ZlcnNlJyBpZCA9ICdIZWJyZXdzLVwiICtcbiAgICAgICAgICAgICAgKGkgKyAxKSArXG4gICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgKGogKyAxKSArXG4gICAgICAgICAgICAgIFwiJz48Yj5IZWJyZXdzIFwiICtcbiAgICAgICAgICAgICAgKGkgKyAxKSArXG4gICAgICAgICAgICAgIFwiOlwiICtcbiAgICAgICAgICAgICAgKGogKyAxKSArXG4gICAgICAgICAgICAgIFwiPC9iPiBcIiArXG4gICAgICAgICAgICAgIGFbaV1bal0ucmVwbGFjZShwYXR0ZXJuLCBcIjxiIHN0eWxlID0gJ2NvbG9yOnJlZDsnPiQxPC9iPlwiKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGkgPD0gMTggJiYgaSA+IDEyKSB7XG4gICAgICAgICAgICBhW2ldW2pdID1cbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzID0gJ3ZlcnNlJyBpZCA9ICcxUGV0ZXItXCIgK1xuICAgICAgICAgICAgICAoaSArIDEgLSAxMykgK1xuICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgIChqICsgMSkgK1xuICAgICAgICAgICAgICBcIic+PGI+MVBldGVyIFwiICtcbiAgICAgICAgICAgICAgKGkgKyAxIC0gMTMpICtcbiAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAoaiArIDEpICtcbiAgICAgICAgICAgICAgXCI8L2I+IFwiICtcbiAgICAgICAgICAgICAgYVtpXVtqXS5yZXBsYWNlKHBhdHRlcm4sIFwiPGIgc3R5bGUgPSAnY29sb3I6cmVkOyc+JDE8L2I+XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhW2ldW2pdID1cbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzID0gJ3ZlcnNlJyBpZCA9ICcyUGV0ZXItXCIgK1xuICAgICAgICAgICAgICAoaSArIDEgLSAxOCkgK1xuICAgICAgICAgICAgICBcIjpcIiArXG4gICAgICAgICAgICAgIChqICsgMSkgK1xuICAgICAgICAgICAgICBcIic+PGI+MlBldGVyIFwiICtcbiAgICAgICAgICAgICAgKGkgKyAxIC0gMTgpICtcbiAgICAgICAgICAgICAgXCI6XCIgK1xuICAgICAgICAgICAgICAoaiArIDEpICtcbiAgICAgICAgICAgICAgXCI8L2I+IFwiICtcbiAgICAgICAgICAgICAgYVtpXVtqXS5yZXBsYWNlKHBhdHRlcm4sIFwiPGIgc3R5bGUgPSAnY29sb3I6cmVkOyc+JDE8L2I+XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgay5pbm5lckhUTUwgPSBhW2ldW2pdO1xuICAgICAgICBkcmVhbXNMaXN0LmFwcGVuZENoaWxkKGspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc251bS5pbm5lclRleHQgPSBhbCArIFwiIHJlc3VsdHNcIjtcbn07IC8vIHJlcXVlc3QgdGhlIGRyZWFtcyBmcm9tIG91ciBhcHAncyBzcWxpdGUgZGF0YWJhc2VcblxudmFyIGhlYnJld3NSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5oZWJyZXdzUmVxdWVzdC5vbmxvYWQgPSBnZXR0ZXh0TGlzdGVuZXI7XG5oZWJyZXdzUmVxdWVzdC5vcGVuKFwiZ2V0XCIsIFwiL2dldHRleHRcIik7XG5oZWJyZXdzUmVxdWVzdC5zZW5kKCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBV0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/js/raw/plain/search.js\n");

/***/ })

/******/ });