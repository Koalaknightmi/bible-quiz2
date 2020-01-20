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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/raw/plain/Psettings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/raw/plain/Psettings.js":
/*!******************************************!*\
  !*** ./public/js/raw/plain/Psettings.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var img = document.querySelector(\"#file\");\nvar success = document.querySelector(\"#sucsess\");\nvar ncolorchange = false;\nvar ncolor = document.getElementById(\"m-m-c\");\nconsole.dir(document);\nncolor.addEventListener(\"change\", function (e) {\n  ncolorchange = true;\n  console.log(\"changed\");\n});\nvar mylocalkey = \"koalastrikermi-bbqo-\";\n\nvar localsave = function localsave(vare, gs, t) {\n  if (gs === \"set\") {\n    localStorage.setItem(mylocalkey + vare, t); //log(\"localstorage item \" + mylocalkey + vare + \" is now set to: \" + localStorage.getItem(mylocalkey + vare));\n  } else if (gs === \"get\") {\n    //log(\"localstorage item \" + mylocalkey + vare + \" was returned as: \" + localStorage.getItem(mylocalkey + vare));\n    return localStorage.getItem(mylocalkey + vare);\n  } else if (gs === \"devare\") {\n    //log(mylocalkey + vare + \"  was devared\");\n    localStorage.removeItem(mylocalkey + vare);\n  }\n};\n\nvar uploadF = document.querySelector(\"#settings\").addEventListener(\"submit\", function (e) {\n  console.log(img.files);\n  e.preventDefault();\n  new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(\"POST\", \"/setProfileImg\");\n    var formData = new FormData();\n    formData.append(\"user\", JSON.parse(localsave(\"userdata\", \"get\")).name);\n    formData.append(\"pass\", JSON.parse(localsave(\"userdata\", \"get\")).pass);\n    formData.append(\"ncolorchange\", ncolorchange);\n    formData.append(\"namecol\", ncolor.value);\n    formData.append(\"file\", img.files[0]); //console.log(formData.values())\n    //xhr.setRequestHeader(\"Content-Type\", \"multipart/form-data\");\n\n    xhr.onload = function () {\n      return resolve(xhr.responseText);\n    };\n\n    xhr.onerror = function () {\n      return reject(xhr.statusText);\n    };\n\n    xhr.send(formData);\n  }).then(function (successMessage) {\n    console.log();\n    success.innerHTML = \"success\";\n    success.style.background = \"green\";\n  })[\"catch\"](function (error) {\n    console.log(error);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvcmF3L3BsYWluL1BzZXR0aW5ncy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9yYXcvcGxhaW4vUHNldHRpbmdzLmpzPzY2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaWxlXCIpO1xuY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3Vjc2Vzc1wiKTtcbmxldCBuY29sb3JjaGFuZ2UgPSBmYWxzZTtcbmNvbnN0IG5jb2xvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibS1tLWNcIik7XG4gIGNvbnNvbGUuZGlyKGRvY3VtZW50KVxuICBuY29sb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihlKSB7XG4gIG5jb2xvcmNoYW5nZSA9IHRydWU7XG4gIGNvbnNvbGUubG9nKFwiY2hhbmdlZFwiKTtcbn0pXG52YXIgbXlsb2NhbGtleSA9IFwia29hbGFzdHJpa2VybWktYmJxby1cIjtcbnZhciBsb2NhbHNhdmUgPSBmdW5jdGlvbiBsb2NhbHNhdmUodmFyZSwgZ3MsIHQpIHtcbiAgICBpZiAoZ3MgPT09IFwic2V0XCIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obXlsb2NhbGtleSArIHZhcmUsIHQpO1xuICAgICAgICAvL2xvZyhcImxvY2Fsc3RvcmFnZSBpdGVtIFwiICsgbXlsb2NhbGtleSArIHZhcmUgKyBcIiBpcyBub3cgc2V0IHRvOiBcIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG15bG9jYWxrZXkgKyB2YXJlKSk7XG4gICAgfSBlbHNlIGlmIChncyA9PT0gXCJnZXRcIikge1xuICAgICAgICAvL2xvZyhcImxvY2Fsc3RvcmFnZSBpdGVtIFwiICsgbXlsb2NhbGtleSArIHZhcmUgKyBcIiB3YXMgcmV0dXJuZWQgYXM6IFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0obXlsb2NhbGtleSArIHZhcmUpKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKG15bG9jYWxrZXkgKyB2YXJlKTtcbiAgICB9IGVsc2UgaWYgKGdzID09PSBcImRldmFyZVwiKSB7XG4gICAgICAgIC8vbG9nKG15bG9jYWxrZXkgKyB2YXJlICsgXCIgIHdhcyBkZXZhcmVkXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShteWxvY2Fsa2V5ICsgdmFyZSk7XG4gICAgfVxufTtcblxuY29uc3QgdXBsb2FkRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dGluZ3NcIilcbi5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uKGUpIHtcbiAgY29uc29sZS5sb2coaW1nLmZpbGVzKVxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCIvc2V0UHJvZmlsZUltZ1wiKTtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ1c2VyXCIsIEpTT04ucGFyc2UobG9jYWxzYXZlKFwidXNlcmRhdGFcIiwgXCJnZXRcIikpLm5hbWUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInBhc3NcIiwgSlNPTi5wYXJzZShsb2NhbHNhdmUoXCJ1c2VyZGF0YVwiLCBcImdldFwiKSkucGFzcyk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwibmNvbG9yY2hhbmdlXCIsIG5jb2xvcmNoYW5nZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZWNvbFwiLCBuY29sb3IudmFsdWUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgaW1nLmZpbGVzWzBdKTtcbiAgICAvL2NvbnNvbGUubG9nKGZvcm1EYXRhLnZhbHVlcygpKVxuICAgIC8veGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIpO1xuICAgIHhoci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHhoci5yZXNwb25zZVRleHQpO1xuICAgIHhoci5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHhoci5zdGF0dXNUZXh0KTtcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG4gIH0pLnRoZW4oKHN1Y2Nlc3NNZXNzYWdlKSA9PiB7XG4gICAgY29uc29sZS5sb2coKTtcbiAgICBzdWNjZXNzLmlubmVySFRNTCA9IFwic3VjY2Vzc1wiO1xuICAgIHN1Y2Nlc3Muc3R5bGUuYmFja2dyb3VuZCA9IFwiZ3JlZW5cIlxuICB9KVxuICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9KTtcbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/raw/plain/Psettings.js\n");

/***/ })

/******/ });