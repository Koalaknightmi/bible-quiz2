"use strict";
var responsiveVoice = window.responsiveVoice;
import log from "./log";
var random = function random(a, b) {
  return Math.floor(Math.random() * b) + a;
};
var keys = {
  "65": "a",
  "66": "b",
  "67": "c",
  "68": "d",
  "69": "e",
  "70": "f",
  "71": "g",
  "72": "h",
  "73": "i",
  "74": "j",
  "75": "k",
  "76": "l",
  "77": "m",
  "78": "n",
  "79": "o",
  "80": "p",
  "81": "q",
  "82": "r",
  "83": "s",
  "84": "t",
  "85": "u",
  "86": "v",
  "87": "w",
  "88": "x",
  "89": "y",
  "90": "z"
};
var versedata = [];
var curverses = [];
var time = count;
var error = new Audio('https://cdn.glitch.com/eb5b036c-82b3-497e-9d05-ce2a5a9d85e1%2FComputer%20Error%20Alert-SoundBible.com-783113881.mp3?v=1560114745306');
var tex = "";
var te = "";
te = te.split(/[0-9]+\s/);
var socket = window.socket;
var quote = true;
var complete = true;
var key;
var started = false;
var prompt = complete ? 0 : 3;
var cur = prompt;
var verse = quote ? 0 : random(0, te.length - 1);
var score = 0;
var count = quote ? 0 : 300;
var chapter = 1;
var book = "hebrews";
var up = quote ? 1 : -1;
var domver = document.getElementById("verse");
var domref = document.getElementById("refrence");
var domscore = document.getElementById("score");
var dtimer = document.getElementById("timer");
var wordbox = document.getElementById("words");
var tq = document.getElementById("t-q");
domref.innerHTML = book + " " + chapter + ":" + (verse + 1);
domscore.innerHTML = "score: " + score;
dtimer.textContent = count;
var ch = "h1";
var c = 1;
var chset = document.getElementById("ch-select");
var qset = document.getElementById("ch-type");
var pset = document.getElementById("ch-prompt");
var sbtn = document.getElementById("type-start-btn");
var set = document.getElementById("settings");
var vchange = quote ? verse + 1 : random(0, te.length - 1);
console.log("verse now = " + (verse + 1));
var mylocalkey = "koalastrikermi-bbqo-";

var localsave = function localsave(vare, gs, t) {
  if (gs === "set") {
    localStorage.setItem(mylocalkey + vare, t);
    //log("localstorage item " + mylocalkey + vare + " is now set to: " + localStorage.getItem(mylocalkey + vare));
  } else if (gs === "get") {
    //log("localstorage item " + mylocalkey + vare + " was returned as: " + localStorage.getItem(mylocalkey + vare));
    return localStorage.getItem(mylocalkey + vare);
  } else if (gs === "devare") {
    //log(mylocalkey + vare + "  was devared");
    localStorage.removeItem(mylocalkey + vare);
  }
};
var nextver = function nextver(v) {
  if (v < te.length) {
    console.log("verse = " + v);
    var text = curverses[v];
    text = text.replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1$2 ").split(/\s/g);
    //console.log(text);
    //console.log("verse="+vchange);
    if (text[text.length - 1] === "") {
      text.pop();
    }
    domver.innerHTML = "";
    score += 10;
    domscore.innerHTML = "score: " + score;
    //console.log("verse now = " + (verse + 1))
    domref.innerHTML = book + " " + chapter + ":" + (v);
    cur = prompt;
    console.log(!prompt)
    if(!prompt){
      responsiveVoice.speak(book + " " + chapter + ":" + (v), "UK English Male", { pitch: 1, volume: 0.5, rate: 1 });
    }
    else{
      for (var i = 0; i < cur; i++) {
        domver.innerHTML += curverses[v].replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1 $2").split(/\s/g)[i] + " ";
        responsiveVoice.speak(curverses[v].replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1 $2").split(/\s/g)[i], "US English Male", { pitch: 1, volume: 0.5, rate: 1 });
      }
    }
    wbox(text);
    /*console.log(text[cur] + "-word")
    var dword = document.getElementById(text[cur].replace(/[-\/\\^$*+?.,()|[\]{}]/g, '-') + "-word");
    dword.style.display = "none";*/
    curverses.splice(v,1);
  }
};
var wbox = function wbox(text) {
  wordbox.innerHTML = "";
  var wordboxtext = text.splice(cur, text.length).sort();
  for (var i = 0; i < wordboxtext.length; i++) {
    if (wordboxtext[i].replace(/[-\/\\^$*+?.,()|[\]{}]/g, '') === "") {
      continue;
    }
    var newListItem = document.createElement('span');
    newListItem.innerHTML = wordboxtext[i].replace(/[-\/\\^$*+?.,()|[\]{}]/g, '');
    newListItem.id = wordboxtext[i].replace(/[-\/\\^$*+?.,()|[\]{}]/g, '-').toLowerCase() + "-word";
    newListItem.className = "wordbox-word";
    newListItem.addEventListener('click', function (e) {
      //console.log(e.path["0"].childNodes["0"].data)
      var vchange = quote ? verse + 1 : random(1, curverses.length - 1);
      var text = curverses[verse];
      text = text.replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1$2 ").split(/\s/g);
      //console.log()
      if (text[text.length - 1] === "") {
        //console.log(text)
        text.pop();
        //console.log(text)
      }
      key = e.path["0"].childNodes["0"].data.toLowerCase();
      //console.log(te);
      e.preventDefault();
      //console.log([text,cur,verse])
      if (cur === text.length && text[cur].replace(/[-\/\\^$*+?.,()|[\]{}]/g, '').toLowerCase() === key && key !== undefined) {
        verse = vchange;
        responsiveVoice.speak(text[cur], "UK English Male", { pitch: 1, volume: 0.5, rate: 1 });
        nextver(verse);
      } else if (text[cur].toLowerCase().replace(/[-\/\\^$*+?.,()|[\]{}]/g, '') === key && key !== undefined) {
        console.log(text[cur] + "-word");
        var dword = document.getElementById(text[cur].toLowerCase().replace(/[-\/\\^$*+?.,()|[\]{}]/g, '-') + "-word");
        dword.style.display = "none";
        responsiveVoice.speak(text[cur], "UK English Male", { pitch: 1, volume: 0.5, rate: 1 });
        score += 10;
        domver.innerHTML = "";
        domscore.innerHTML = "score: " + score;
        for (var i = 0; i < cur + 1; i++) {
          domver.innerHTML += text[i] + " ";
        }
        //console.log(key);
        cur++;
        //console.log(cur,text.length)
        if (cur === text.length) {
          verse = vchange;
          nextver(verse);
        }
      } else {
        console.log("wrong");
        score -= 5;
        domscore.innerHTML = "score: " + score;
        error.play();
      }
    });
    //console.log(newListItem.id);
    wordbox.appendChild(newListItem);
  }
};

function postData(url, data, then) {
  // Default options are marked with *
    return fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
        cache: 'default' // body data type must match "Content-Type" header
    })
    .then(response => {
      then(response);
    })
    .catch(function (error) {
      console.log("no internet doing default", error, data);
      location.reload();
    }); // parses JSON response into native JavaScript objects 
  /*return new Promise(function (resolve, reject) {
    console.log("sending"+data)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      return resolve(xhr.responseText);
    };
    xhr.onerror = function () {
      return reject(xhr.statusText);
    };
    xhr.send(data);
  }).then(function (successMessage) {
    then(successMessage);
  }).catch(function (error) {
    console.log("no internet doing default", error, JSON.stringify(data));
    location.reload();
  });*/
}

sbtn.addEventListener('click', function (e) {
  //console.log(verse)
  curverses = te;
  prompt = complete ? 0 : 3;
  cur = prompt;
  verse = quote ? 0 : random(0, curverses.length - 1);
  count = quote ? 0 : 300;
  time = count;
  dtimer.textContent = Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : '00');
  up = quote ? 1 : -1;
  if (chset.value !== "" && qset.value !== "" && pset.value !== "") {
    started = true;
    domref.innerHTML = book + " " + chapter + ":" + (verse);
    domver.innerHTML = "";
    domscore.innerHTML = "score: " + score;
    for (var i = 0; i < cur; i++) {
      domver.innerHTML += te[verse-1].split(/\s/g)[i] + " ";
      responsiveVoice.speak(te[verse-1].split(/\s/g)[i], "UK English Male", { pitch: 1, volume: 0.5, rate: 1 });
    }
    tq.style.display = "block";
    set.style.display = "none";
    var text = te[verse-1].toLowerCase();
    text = text.replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1$2 ").split(/\s/g);
    //console.log()
    if (text[text.length - 1] === "") {
      text.pop();
    }
    for (var i = 0; i < text.length; i++) {
      if (text[i] === "") {
        text.splice(i - 1, i);
      }
    }
    if(complete){
      responsiveVoice.speak(book + " " + chapter + ":" + (verse + 1), "UK English Male", { pitch: 1, volume: 0.5, rate: 1 });
    }
    wbox(text);
  }
  curverses.splice(verse,1)
});

var gettextListener = function gettextListener() {
  let str = this.responseText;
  str = str.split(" 1 ");//splits to chapters
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].split(/[0-9]+\s/);//splits to verses
    for (var j = 0; j < str[i].length; j++) {
      str[i][j] = str[i][j].replace(/[‘`’]/g,"").replace(/[-\/\\^$*+?.()|[\]{}"';:,!“—”]|[0-9]|\n/g, " ").trim().replace(/\s\s\s/g, " ").replace(/\s\s/g, " ").replace(/\s\s/g, " ");//cleans
    }
  }
  tex = str
};

qset.addEventListener('input', function (e) {
  if (e.target.value === "c") {
    quote = false;
  } else {
    quote = true;
  }
});

pset.addEventListener('input', function (e) {
  if (e.target.value === "y") {
    complete = false;
  } else {
    complete = true;
  }
});

chset.addEventListener('input', function (e) {
  //console.log(e.target.value)
  //console.log("changed")
  ch = e.target.value;
  if (ch.indexOf("1p") !== -1) {
    c = 13 + parseFloat(ch.split("p")[1]);
    chapter = parseFloat(ch.split("p")[1]);
    book = "1peter";
    console.log(c);
  } else if (ch.indexOf("2p") !== -1) {
    c = 18 + parseFloat(ch.split("p")[1]);
    chapter = parseFloat(ch.split("p")[1]);
    book = "2peter";
    console.log(c);
  } else {
    c = ch.split("h")[1];
    chapter = c;
    book = "hebrews";
    console.log(c);
  }
  te = tex[c];
  //console.log(te);
  verse = quote ? 0 : random(0, te.length - 1);
  //console.log(verse);
  domref.innerHTML = book + " " + chapter + ":" + (verse + 1);
});

document.addEventListener("keydown", function (e) {
  if (started) {
    e.preventDefault();
    key = keys[e.keyCode];
    var vchange = quote ? verse + 1 : random(1, curverses.length - 1);
    var text = curverses[verse-1];
    console.log(text)
    text = text.replace(/([^abcdefghijklmnopqrstuvwxyz\s0-9])([^abcdefghijklmnopqrstuvwxyz\s0-9])/gi, "$1$2 ").split(/\s/g);
    //console.log()
    if (text[text.length - 1] === "") {
      text.pop();
    }
    if (cur === text.length && text[cur].substr(0, 1).toLowerCase() === key && key !== undefined) {
      verse = vchange;
      nextver(verse);
    } else if (text[cur].substr(0, 1).toLowerCase() === key && key !== undefined) {
      console.log(text[cur] + "-word")
      var dword = document.getElementById(text[cur].toLowerCase().replace(/[-\/\\^$*+?.,()|[\]{}]/g, '-') + "-word");
      dword.style.display = "none";
      if(cur!==text.length-1){
        //responsiveVoice.speak(text[cur], "US English Male", { pitch: 1, volume: 0.5, rate: 1 });
      }
      score += 10;
      domver.innerHTML = "";
      domscore.innerHTML = "score: " + score;
      for (var i = 0; i < cur + 1; i++) {
        domver.innerHTML += text[i] + " ";
      }
      //console.log(key);
      cur++;
      //console.log(cur,text.length)
      if (cur === text.length) {
        verse = vchange;
        nextver(verse);
      }
    } else {
      console.log("wrong");
      score -= 5;
      domscore.innerHTML = "score: " + score;
      error.play();
    }
  }
});

var countIt = function countIt() {
  //console.log(parseFloat(time))
  if (started) {
    if (quote) {
      if (verse < te.length) {
        time = time + up;
        dtimer.textContent = Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : '00');
      } else {
        window.clearInterval(timer);
        postData("/postquote", { ch: ch, score: time, prompt: prompt, user: JSON.parse(localsave("userdata", "get")).name, pass: JSON.parse(localsave("userdata", "get")).pass }, function (data) {
          console.log(JSON.stringify(data));
          location.reload();
        });
      }
    } else {
      if (time > 0) {
        time = time + up;
        dtimer.textContent = Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : '00');;
      } else {
        console.log(JSON.stringify({ ch: ch, score: score, prompt: prompt, name: JSON.parse(localsave("userdata", "get")).name, pass: JSON.parse(localsave("userdata", "get")).pass }));
        window.clearInterval(timer);
        console.log(JSON.parse(localsave("userdata", "get")));
        postData("/postcomplete", { ch: ch, score: score, prompt: prompt, user: JSON.parse(localsave("userdata", "get")).name, pass: JSON.parse(localsave("userdata", "get")).pass }, function (data) {
          console.log(JSON.stringify(data));
          location.reload();
        });
      }
    }
  }
};

var timer = window.setInterval(countIt, 1000);

var hebrewsRequest = new XMLHttpRequest();
hebrewsRequest.onload = gettextListener;
hebrewsRequest.open('get', '/gettext');
hebrewsRequest.send();
