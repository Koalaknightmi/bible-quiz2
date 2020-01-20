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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/raw/plain/leaderboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/raw/plain/leaderboard.js":
/*!********************************************!*\
  !*** ./public/js/raw/plain/leaderboard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar chset = document.getElementById(\"ch-select\");\nvar lboards = document.getElementById(\"l-table-b\");\nvar typeselect = document.getElementById(\"type\"); //var search = document.getElementById(\"search\")\n\nvar type = \"q\";\nvar q = [],\n    qp = [],\n    c = [],\n    cp = [],\n    qv = [],\n    qpv = [],\n    cv = [],\n    cpv = [];\nvar ch = \"h1\";\n\nString.prototype.pad = function (l, s) {\n  return (l -= this.length) > 0 ? (s = new Array(Math.ceil(l / s.length) + 1).join(s)).substr(0, s.length) + this + s.substr(0, l - s.length) : this;\n};\n\nfunction totime(time) {\n  return Math.floor(time / 60) + \":\" + (time % 60).toFixed().pad(2, \"0\");\n}\n\nfunction fromtime(time) {\n  time = time.split(\":\");\n  time[0] = Number(time[0]) * 60;\n  return time[0] + Number(time[1]);\n}\n\nvar filllb = function filllb(a, ch) {\n  console.log(a, ch);\n  var cha = [];\n  lboards.innerHTML = \"\";\n\n  for (var i = 0; i < a.length; i++) {\n    if (a[i].ch === ch) {\n      cha.push(a[i]);\n      console.log(a[i]);\n    }\n  }\n\n  console.log(cha);\n\n  for (var id = 0; id < a.length; id++) {\n    var lplace = document.createElement(\"tr\");\n    lplace.id = \"place\";\n    lplace.className = \"l-tr\";\n    console.log(cha[id].profileIMG);\n    lplace.innerHTML = \"<td>\" + (id + 1) + \"</td><td><img width = '25' height = '25' src = '\" + cha[id].profileIMG + \"' alt = '\" + cha[id].userName + \"'s' profile image'/></td><td><a class = 'profilelink' style = 'color:\" + cha[id].nameCOl + \"' href = '/user/\" + cha[id].userName + \"'>\" + cha[id].userName + \"</a></td><td>\" + cha[id].score + \"</td>\";\n    lboards.appendChild(lplace);\n  }\n};\n\nvar checkarray = function checkarray(a, f) {\n  return a.filter(function (word) {\n    if (word.userName.toLowerCase().indexOf(f.toLowerCase()) !== -1) {\n      return true;\n    } else {\n      return false;\n    }\n  });\n};\n\nvar search = function search(f) {\n  if (type === \"q\") {\n    filllb(checkarray(q, f), ch);\n  } else if (type === \"qp\") {\n    filllb(checkarray(qp, f), ch);\n  } else if (type === \"c\") {\n    filllb(checkarray(c, f), ch);\n  } else if (type === \"cp\") {\n    filllb(checkarray(cp, f), ch);\n  }\n\n  if (type === \"qv\") {\n    filllb(checkarray(qv, f), ch);\n  } else if (type === \"qpv\") {\n    filllb(checkarray(qpv, f), ch);\n  } else if (type === \"cv\") {\n    filllb(checkarray(cv, f), ch);\n  } else if (type === \"cpv\") {\n    filllb(checkarray(cpv, f), ch);\n  }\n};\n\nfetch('/leaderboardfetch').then(function (response) {\n  return response.json();\n}).then(function (data) {\n  //console.table(data);\n  for (var i = 0; i < data.length; i++) {\n    if (data[i].type === \"completed-true\") {\n      cp.push(data[i]);\n    } else if (data[i].type === \"completed-false\") {\n      c.push(data[i]);\n    } else if (data[i].type === \"quoted-false\") {\n      data[i].score = totime(data[i].score);\n      q.push(data[i]);\n    } else if (data[i].type === \"quoted-true\") {\n      data[i].score = totime(data[i].score);\n      qp.push(data[i]);\n    } else if (data[i].type === \"completed-true-v\") {\n      cpv.push(data[i]);\n    } else if (data[i].type === \"completed-false-v\") {\n      cv.push(data[i]);\n    } else if (data[i].type === \"quoted-false-v\") {\n      data[i].score = totime(data[i].score);\n      qv.push(data[i]);\n    } else if (data[i].type === \"quoted-true-v\") {\n      data[i].score = totime(data[i].score);\n      qpv.push(data[i]);\n    }\n  }\n\n  q.sort(function (a, b) {\n    return fromtime(a.score) - fromtime(b.score);\n  });\n  qp.sort(function (a, b) {\n    return fromtime(a.score) - fromtime(b.score);\n  });\n  c.sort(function (a, b) {\n    return b.score - a.score;\n  });\n  cp.sort(function (a, b) {\n    return b.score - a.score;\n  });\n  qv.sort(function (a, b) {\n    return fromtime(a.score) - fromtime(b.score);\n  });\n  qpv.sort(function (a, b) {\n    return fromtime(a.score) - fromtime(b.score);\n  });\n  cv.sort(function (a, b) {\n    return b.score - a.score;\n  });\n  cpv.sort(function (a, b) {\n    return b.score - a.score;\n  });\n\n  if (type === \"q\") {\n    filllb(q, ch);\n  } else if (type === \"qp\") {\n    filllb(qp, ch);\n  } else if (type === \"c\") {\n    filllb(c, ch);\n  } else if (type === \"cp\") {\n    filllb(cp, ch);\n  }\n\n  if (type === \"qv\") {\n    filllb(qv, ch);\n  } else if (type === \"qpv\") {\n    filllb(qpv, ch);\n  } else if (type === \"cv\") {\n    filllb(cv, ch);\n  } else if (type === \"cpv\") {\n    filllb(cpv, ch);\n  }\n})[\"catch\"](function (e) {\n  console.log(e);\n});\ntypeselect.addEventListener('input', function (e) {\n  type = e.target.value;\n\n  if (type === \"q\") {\n    filllb(q, ch);\n  } else if (type === \"qp\") {\n    filllb(qp, ch);\n  } else if (type === \"c\") {\n    filllb(c, ch);\n  } else if (type === \"cp\") {\n    filllb(cp, ch);\n  }\n\n  if (type === \"qv\") {\n    filllb(qv, ch);\n  } else if (type === \"qpv\") {\n    filllb(qpv, ch);\n  } else if (type === \"cv\") {\n    filllb(cv, ch);\n  } else if (type === \"cpv\") {\n    filllb(cpv, ch);\n  }\n});\nchset.addEventListener('input', function (e) {\n  //console.log(e.target.value)\n  //console.log(\"changed\")\n\n  /**/\n  ch = e.target.value;\n\n  if (type === \"q\") {\n    filllb(q, ch);\n  } else if (type === \"qp\") {\n    filllb(qp, ch);\n  } else if (type === \"c\") {\n    filllb(c, ch);\n  } else if (type === \"cp\") {\n    filllb(cp, ch);\n  }\n\n  if (type === \"qv\") {\n    filllb(q, ch);\n  } else if (type === \"qpv\") {\n    filllb(qp, ch);\n  } else if (type === \"cv\") {\n    filllb(c, ch);\n  } else if (type === \"cpv\") {\n    filllb(cp, ch);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvcmF3L3BsYWluL2xlYWRlcmJvYXJkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3Jhdy9wbGFpbi9sZWFkZXJib2FyZC5qcz84ZjcyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2hzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoLXNlbGVjdFwiKTtcbnZhciBsYm9hcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsLXRhYmxlLWJcIik7XG52YXIgdHlwZXNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHlwZVwiKTtcbi8vdmFyIHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpXG52YXIgdHlwZSA9IFwicVwiO1xudmFyIHEgPSBbXSxcbiAgICBxcCA9IFtdLFxuICAgIGMgPSBbXSxcbiAgICBjcCA9IFtdLFxuICAgIHF2ID0gW10sXG4gICAgcXB2ID0gW10sXG4gICAgY3YgPSBbXSxcbiAgICBjcHYgPSBbXTtcbnZhciBjaCA9IFwiaDFcIjtcblN0cmluZy5wcm90b3R5cGUucGFkID0gZnVuY3Rpb24gKGwsIHMpIHtcbiAgcmV0dXJuIChsIC09IHRoaXMubGVuZ3RoKSA+IDAgPyAocyA9IG5ldyBBcnJheShNYXRoLmNlaWwobCAvIHMubGVuZ3RoKSArIDEpLmpvaW4ocykpLnN1YnN0cigwLCBzLmxlbmd0aCkgKyB0aGlzICsgcy5zdWJzdHIoMCwgbCAtIHMubGVuZ3RoKSA6IHRoaXM7XG59O1xuXG5mdW5jdGlvbiB0b3RpbWUodGltZSkge1xuICByZXR1cm4gTWF0aC5mbG9vcih0aW1lIC8gNjApICsgXCI6XCIgKyAodGltZSAlIDYwKS50b0ZpeGVkKCkucGFkKDIsIFwiMFwiKTtcbn1cbmZ1bmN0aW9uIGZyb210aW1lKHRpbWUpIHtcbiAgdGltZSA9IHRpbWUuc3BsaXQoXCI6XCIpO1xuICB0aW1lWzBdID0gTnVtYmVyKHRpbWVbMF0pICogNjA7XG4gIHJldHVybiB0aW1lWzBdICsgTnVtYmVyKHRpbWVbMV0pO1xufVxudmFyIGZpbGxsYiA9IGZ1bmN0aW9uIGZpbGxsYihhLCBjaCkge1xuICBjb25zb2xlLmxvZyhhLCBjaCk7XG4gIHZhciBjaGEgPSBbXTtcbiAgbGJvYXJkcy5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXS5jaCA9PT0gY2gpIHtcbiAgICAgIGNoYS5wdXNoKGFbaV0pO1xuICAgICAgY29uc29sZS5sb2coYVtpXSk7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGNoYSk7XG4gIGZvciAodmFyIGlkID0gMDsgaWQgPCBhLmxlbmd0aDsgaWQrKykge1xuICAgIHZhciBscGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgbHBsYWNlLmlkID0gXCJwbGFjZVwiO1xuICAgIGxwbGFjZS5jbGFzc05hbWUgPSBcImwtdHJcIjtcbiAgICBjb25zb2xlLmxvZyhjaGFbaWRdLnByb2ZpbGVJTUcpO1xuICAgIGxwbGFjZS5pbm5lckhUTUwgPSBcIjx0ZD5cIiArIChpZCArIDEpICsgXCI8L3RkPjx0ZD48aW1nIHdpZHRoID0gJzI1JyBoZWlnaHQgPSAnMjUnIHNyYyA9ICdcIiArIGNoYVtpZF0ucHJvZmlsZUlNRyArIFwiJyBhbHQgPSAnXCIgKyBjaGFbaWRdLnVzZXJOYW1lICsgXCIncycgcHJvZmlsZSBpbWFnZScvPjwvdGQ+PHRkPjxhIGNsYXNzID0gJ3Byb2ZpbGVsaW5rJyBzdHlsZSA9ICdjb2xvcjpcIiArIGNoYVtpZF0ubmFtZUNPbCArIFwiJyBocmVmID0gJy91c2VyL1wiICsgY2hhW2lkXS51c2VyTmFtZSArIFwiJz5cIiArIGNoYVtpZF0udXNlck5hbWUgKyBcIjwvYT48L3RkPjx0ZD5cIiArIGNoYVtpZF0uc2NvcmUgKyBcIjwvdGQ+XCI7XG4gICAgbGJvYXJkcy5hcHBlbmRDaGlsZChscGxhY2UpO1xuICB9XG59O1xudmFyIGNoZWNrYXJyYXkgPSBmdW5jdGlvbiBjaGVja2FycmF5KGEsIGYpIHtcbiAgcmV0dXJuIGEuZmlsdGVyKGZ1bmN0aW9uICh3b3JkKSB7XG4gICAgaWYgKHdvcmQudXNlck5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKGYudG9Mb3dlckNhc2UoKSkgIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIHNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaChmKSB7XG4gIGlmICh0eXBlID09PSBcInFcIikge1xuICAgIGZpbGxsYihjaGVja2FycmF5KHEsIGYpLCBjaCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxcFwiKSB7XG4gICAgZmlsbGxiKGNoZWNrYXJyYXkocXAsIGYpLCBjaCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICBmaWxsbGIoY2hlY2thcnJheShjLCBmKSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3BcIikge1xuICAgIGZpbGxsYihjaGVja2FycmF5KGNwLCBmKSwgY2gpO1xuICB9XG4gIGlmICh0eXBlID09PSBcInF2XCIpIHtcbiAgICBmaWxsbGIoY2hlY2thcnJheShxdiwgZiksIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInFwdlwiKSB7XG4gICAgZmlsbGxiKGNoZWNrYXJyYXkocXB2LCBmKSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3ZcIikge1xuICAgIGZpbGxsYihjaGVja2FycmF5KGN2LCBmKSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY3B2XCIpIHtcbiAgICBmaWxsbGIoY2hlY2thcnJheShjcHYsIGYpLCBjaCk7XG4gIH1cbn07XG5cbmZldGNoKCcvbGVhZGVyYm9hcmRmZXRjaCcpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gIC8vY29uc29sZS50YWJsZShkYXRhKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRhdGFbaV0udHlwZSA9PT0gXCJjb21wbGV0ZWQtdHJ1ZVwiKSB7XG4gICAgICBjcC5wdXNoKGRhdGFbaV0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlID09PSBcImNvbXBsZXRlZC1mYWxzZVwiKSB7XG4gICAgICBjLnB1c2goZGF0YVtpXSk7XG4gICAgfSBlbHNlIGlmIChkYXRhW2ldLnR5cGUgPT09IFwicXVvdGVkLWZhbHNlXCIpIHtcbiAgICAgIGRhdGFbaV0uc2NvcmUgPSB0b3RpbWUoZGF0YVtpXS5zY29yZSk7XG4gICAgICBxLnB1c2goZGF0YVtpXSk7XG4gICAgfSBlbHNlIGlmIChkYXRhW2ldLnR5cGUgPT09IFwicXVvdGVkLXRydWVcIikge1xuICAgICAgZGF0YVtpXS5zY29yZSA9IHRvdGltZShkYXRhW2ldLnNjb3JlKTtcbiAgICAgIHFwLnB1c2goZGF0YVtpXSk7XG4gICAgfSBlbHNlIGlmIChkYXRhW2ldLnR5cGUgPT09IFwiY29tcGxldGVkLXRydWUtdlwiKSB7XG4gICAgICBjcHYucHVzaChkYXRhW2ldKTtcbiAgICB9IGVsc2UgaWYgKGRhdGFbaV0udHlwZSA9PT0gXCJjb21wbGV0ZWQtZmFsc2UtdlwiKSB7XG4gICAgICBjdi5wdXNoKGRhdGFbaV0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlID09PSBcInF1b3RlZC1mYWxzZS12XCIpIHtcbiAgICAgIGRhdGFbaV0uc2NvcmUgPSB0b3RpbWUoZGF0YVtpXS5zY29yZSk7XG4gICAgICBxdi5wdXNoKGRhdGFbaV0pO1xuICAgIH0gZWxzZSBpZiAoZGF0YVtpXS50eXBlID09PSBcInF1b3RlZC10cnVlLXZcIikge1xuICAgICAgZGF0YVtpXS5zY29yZSA9IHRvdGltZShkYXRhW2ldLnNjb3JlKTtcbiAgICAgIHFwdi5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmcm9tdGltZShhLnNjb3JlKSAtIGZyb210aW1lKGIuc2NvcmUpO1xuICB9KTtcbiAgcXAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmcm9tdGltZShhLnNjb3JlKSAtIGZyb210aW1lKGIuc2NvcmUpO1xuICB9KTtcbiAgYy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlO1xuICB9KTtcbiAgY3Auc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnNjb3JlIC0gYS5zY29yZTtcbiAgfSk7XG4gIHF2LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnJvbXRpbWUoYS5zY29yZSkgLSBmcm9tdGltZShiLnNjb3JlKTtcbiAgfSk7XG4gIHFwdi5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZyb210aW1lKGEuc2NvcmUpIC0gZnJvbXRpbWUoYi5zY29yZSk7XG4gIH0pO1xuICBjdi5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlO1xuICB9KTtcbiAgY3B2LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5zY29yZSAtIGEuc2NvcmU7XG4gIH0pO1xuICBpZiAodHlwZSA9PT0gXCJxXCIpIHtcbiAgICBmaWxsbGIocSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicXBcIikge1xuICAgIGZpbGxsYihxcCwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgZmlsbGxiKGMsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwXCIpIHtcbiAgICBmaWxsbGIoY3AsIGNoKTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJxdlwiKSB7XG4gICAgZmlsbGxiKHF2LCBjaCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxcHZcIikge1xuICAgIGZpbGxsYihxcHYsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImN2XCIpIHtcbiAgICBmaWxsbGIoY3YsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwdlwiKSB7XG4gICAgZmlsbGxiKGNwdiwgY2gpO1xuICB9XG59KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICBjb25zb2xlLmxvZyhlKTtcbn0pO1xuXG50eXBlc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgdHlwZSA9IGUudGFyZ2V0LnZhbHVlO1xuICBpZiAodHlwZSA9PT0gXCJxXCIpIHtcbiAgICBmaWxsbGIocSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicXBcIikge1xuICAgIGZpbGxsYihxcCwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgZmlsbGxiKGMsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwXCIpIHtcbiAgICBmaWxsbGIoY3AsIGNoKTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJxdlwiKSB7XG4gICAgZmlsbGxiKHF2LCBjaCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJxcHZcIikge1xuICAgIGZpbGxsYihxcHYsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImN2XCIpIHtcbiAgICBmaWxsbGIoY3YsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwdlwiKSB7XG4gICAgZmlsbGxiKGNwdiwgY2gpO1xuICB9XG59KTtcbmNoc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcbiAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcbiAgLy9jb25zb2xlLmxvZyhcImNoYW5nZWRcIilcbiAgLyoqL1xuICBjaCA9IGUudGFyZ2V0LnZhbHVlO1xuICBpZiAodHlwZSA9PT0gXCJxXCIpIHtcbiAgICBmaWxsbGIocSwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicXBcIikge1xuICAgIGZpbGxsYihxcCwgY2gpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY1wiKSB7XG4gICAgZmlsbGxiKGMsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwXCIpIHtcbiAgICBmaWxsbGIoY3AsIGNoKTtcbiAgfVxuICBpZiAodHlwZSA9PT0gXCJxdlwiKSB7XG4gICAgZmlsbGxiKHEsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInFwdlwiKSB7XG4gICAgZmlsbGxiKHFwLCBjaCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjdlwiKSB7XG4gICAgZmlsbGxiKGMsIGNoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImNwdlwiKSB7XG4gICAgZmlsbGxiKGNwLCBjaCk7XG4gIH1cbn0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/js/raw/plain/leaderboard.js\n");

/***/ })

/******/ });