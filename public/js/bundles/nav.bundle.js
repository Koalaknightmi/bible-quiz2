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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/raw/plain/nav.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/raw/plain/nav.js":
/*!************************************!*\
  !*** ./public/js/raw/plain/nav.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navbtn = document.querySelector(\"#navbtn\");\nvar ddnav = document.querySelector(\"#sdown-nav\");\nvar appto = document.querySelector(\"#normal-nav\");\nvar htmls = [{\n  path: \"index\",\n  name: \"home\"\n}, {\n  path: \"leaderboard\",\n  name: \"leaderboard\"\n}, {\n  path: \"scripture-portion\",\n  name: \"scripture portion\"\n}, {\n  path: \"typequizzing\",\n  name: \"type quizzing\"\n}, {\n  path: \"voicequizzing\",\n  name: \"voice quizzing\"\n}, {\n  path: \"onlinequizzing\",\n  name: \"online quizzing\"\n}, {\n  path: \"search\",\n  name: \"search\"\n}, {\n  path: \"settings\",\n  name: \"settings\"\n},\n/*{path:\"chat\",name:\"chat\"},*/\n{\n  path: \"createquestion\",\n  name: \"Create Questions\"\n}];\nvar navopen = false;\ndocument.body.addEventListener(\"click\", function (e) {\n  if (navopen) {\n    if (e.target.className !== \"d-nav-a\") {\n      ddnav.style.display = \"none\";\n      navopen = false;\n    } else if (e.target.id === \"navbtn\" || e.target.className === \"material-icons md-24\") {\n      ddnav.style.display = \"none\";\n      navopen = false;\n    }\n  } else if (e.target.id === \"navbtn\" || e.target.className === \"material-icons md-24\") {\n    ddnav.style.display = \"block\";\n    navopen = true;\n  }\n});\n/*navbtn.addEventListener('click', (e) => {\n  /*if(!navopen){\n    \n  }\n  else{\n    ddnav.style.display = \"none\"\n    navopen = false;\n  }*/\n\n/*\n})*/\n\nif (window.parent.document.URL.split(\"/\")[4] === undefined) {\n  var current = \"index\";\n} else {\n  var current = window.parent.document.URL.split(\"/\")[4].split(\".\")[0];\n}\n\nconsole.log(current);\n\nfor (var i = 0; i < htmls.length; i++) {\n  if (htmls[i].path !== current) {\n    if (\"SpeechRecognition\" in window || \"webkitSpeechRecognition\" in window) {\n      var lplace = document.createElement(\"a\");\n      lplace.href = '/html/' + htmls[i].path + '.html';\n      lplace.innerHTML = htmls[i].name;\n      appto.appendChild(lplace);\n      var lplace2 = document.createElement(\"a\");\n      lplace2.href = '/html/' + htmls[i].path + '.html';\n      lplace2.innerHTML = htmls[i].name;\n      lplace2.className = \"d-nav-a\";\n      ddnav.appendChild(lplace2);\n    } else {\n      if (htmls[i].path !== \"voicequizzing\") {\n        var lplace = document.createElement(\"a\");\n        lplace.href = '/html/' + htmls[i].path + '.html';\n        lplace.innerHTML = htmls[i].name;\n        appto.appendChild(lplace);\n        var lplace2 = document.createElement(\"a\");\n        lplace2.href = '/html/' + htmls[i].path + '.html';\n        lplace2.innerHTML = htmls[i].name;\n        lplace2.className = \"d-nav-a\";\n        ddnav.appendChild(lplace2);\n      }\n    }\n  }\n}\n\nfunction toggleFullScreen() {\n  if (!document.fullscreenElement) {\n    document.documentElement.requestFullscreen();\n  } else {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    }\n  }\n}\n\ndocument.addEventListener(\"keypress\", function (e) {\n  if (e.keyCode === 13) {//toggleFullScreen();\n  }\n}, false);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvcmF3L3BsYWluL25hdi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9yYXcvcGxhaW4vbmF2LmpzPzlmZDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG5hdmJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2YnRuXCIpO1xudmFyIGRkbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZG93bi1uYXZcIik7XG52YXIgYXBwdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vcm1hbC1uYXZcIilcbnZhciBodG1scyA9IFtcbiAge3BhdGg6XCJpbmRleFwiLG5hbWU6XCJob21lXCJ9LFxuICB7cGF0aDpcImxlYWRlcmJvYXJkXCIsbmFtZTpcImxlYWRlcmJvYXJkXCJ9LFxuICB7cGF0aDpcInNjcmlwdHVyZS1wb3J0aW9uXCIsbmFtZTpcInNjcmlwdHVyZSBwb3J0aW9uXCJ9LFxuICB7cGF0aDpcInR5cGVxdWl6emluZ1wiLG5hbWU6XCJ0eXBlIHF1aXp6aW5nXCJ9LFxuICB7cGF0aDpcInZvaWNlcXVpenppbmdcIixuYW1lOlwidm9pY2UgcXVpenppbmdcIn0sXG4gIHtwYXRoOlwib25saW5lcXVpenppbmdcIixuYW1lOlwib25saW5lIHF1aXp6aW5nXCJ9LFxuICB7cGF0aDpcInNlYXJjaFwiLG5hbWU6XCJzZWFyY2hcIn0sXG4gIHtwYXRoOlwic2V0dGluZ3NcIixuYW1lOlwic2V0dGluZ3NcIn0sXG4gIC8qe3BhdGg6XCJjaGF0XCIsbmFtZTpcImNoYXRcIn0sKi9cbiAge3BhdGg6XCJjcmVhdGVxdWVzdGlvblwiLG5hbWU6XCJDcmVhdGUgUXVlc3Rpb25zXCJ9LFxuXVxudmFyIG5hdm9wZW4gPSBmYWxzZTtcblxuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGUpe1xuICBpZihuYXZvcGVuKXtcbiAgICBpZihlLnRhcmdldC5jbGFzc05hbWUhPT1cImQtbmF2LWFcIil7XG4gICAgICBkZG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIG5hdm9wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkPT09XCJuYXZidG5cInx8ZS50YXJnZXQuY2xhc3NOYW1lPT09XCJtYXRlcmlhbC1pY29ucyBtZC0yNFwiKSB7XG4gICAgICBkZG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICAgIG5hdm9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQ9PT1cIm5hdmJ0blwifHxlLnRhcmdldC5jbGFzc05hbWU9PT1cIm1hdGVyaWFsLWljb25zIG1kLTI0XCIpe1xuICAgIGRkbmF2LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICBuYXZvcGVuID0gdHJ1ZTtcbiAgfVxufSlcbi8qbmF2YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLyppZighbmF2b3Blbil7XG4gICAgXG4gIH1cbiAgZWxzZXtcbiAgICBkZG5hdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICBuYXZvcGVuID0gZmFsc2U7XG4gIH0qLy8qXG59KSovXG5pZih3aW5kb3cucGFyZW50LmRvY3VtZW50LlVSTC5zcGxpdChcIi9cIilbNF09PT11bmRlZmluZWQpe1xuICB2YXIgY3VycmVudCA9IFwiaW5kZXhcIjtcbn1cbmVsc2V7XG4gIHZhciBjdXJyZW50ID0gd2luZG93LnBhcmVudC5kb2N1bWVudC5VUkwuc3BsaXQoXCIvXCIpWzRdLnNwbGl0KFwiLlwiKVswXTtcbn1cblxuY29uc29sZS5sb2coY3VycmVudClcblxuZm9yKHZhciBpID0gMDtpPGh0bWxzLmxlbmd0aDtpKyspe1xuICBpZihodG1sc1tpXS5wYXRoIT09Y3VycmVudCl7XG4gICAgaWYoXCJTcGVlY2hSZWNvZ25pdGlvblwiIGluIHdpbmRvdyB8fCBcIndlYmtpdFNwZWVjaFJlY29nbml0aW9uXCIgaW4gd2luZG93ICl7XG4gICAgICB2YXIgbHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBscGxhY2UuaHJlZiA9ICcvaHRtbC8nK2h0bWxzW2ldLnBhdGgrJy5odG1sJ1xuICAgICAgbHBsYWNlLmlubmVySFRNTCA9IGh0bWxzW2ldLm5hbWVcbiAgICAgIGFwcHRvLmFwcGVuZENoaWxkKGxwbGFjZSk7XG4gICAgICB2YXIgbHBsYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbHBsYWNlMi5ocmVmID0gJy9odG1sLycraHRtbHNbaV0ucGF0aCsnLmh0bWwnO1xuICAgICAgbHBsYWNlMi5pbm5lckhUTUwgPSBodG1sc1tpXS5uYW1lO1xuICAgICAgbHBsYWNlMi5jbGFzc05hbWUgPSBcImQtbmF2LWFcIjtcbiAgICAgIGRkbmF2LmFwcGVuZENoaWxkKGxwbGFjZTIpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgaWYoaHRtbHNbaV0ucGF0aCE9PVwidm9pY2VxdWl6emluZ1wiKXtcbiAgICAgICAgdmFyIGxwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBscGxhY2UuaHJlZiA9ICcvaHRtbC8nK2h0bWxzW2ldLnBhdGgrJy5odG1sJ1xuICAgICAgICBscGxhY2UuaW5uZXJIVE1MID0gaHRtbHNbaV0ubmFtZVxuICAgICAgICBhcHB0by5hcHBlbmRDaGlsZChscGxhY2UpO1xuICAgICAgICB2YXIgbHBsYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBscGxhY2UyLmhyZWYgPSAnL2h0bWwvJytodG1sc1tpXS5wYXRoKycuaHRtbCc7XG4gICAgICAgIGxwbGFjZTIuaW5uZXJIVE1MID0gaHRtbHNbaV0ubmFtZTtcbiAgICAgICAgbHBsYWNlMi5jbGFzc05hbWUgPSBcImQtbmF2LWFcIjtcbiAgICAgICAgZGRuYXYuYXBwZW5kQ2hpbGQobHBsYWNlMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB0b2dnbGVGdWxsU2NyZWVuKCkge1xuICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7IFxuICAgIH1cbiAgfVxufVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAvL3RvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgfVxufSwgZmFsc2UpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/raw/plain/nav.js\n");

/***/ })

/******/ });