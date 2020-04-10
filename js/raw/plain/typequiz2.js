console.log("typequiz 2.0")
var versesdone2 = [];
var verses = [];
var curverses = [];
var chapter = {};
var errors = 0;
var right = 0;
var versesdone = 0;
var keysright = {};
var keyswrong = {};
var log = window.log;
var localsave = window.localsave;
var error = new Audio(
  "https://cdn.glitch.com/7942a189-4df2-4068-8077-3c39a76c0db1%2FComputer%20Error%20Alert.mp3?v=1580768453999"
);
var endverse = new Audio("https://cdn.glitch.com/7942a189-4df2-4068-8077-3c39a76c0db1%2FUI_Quirky27.mp3?v=1585075175931")
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
var time;
var quote = true;
var complete = true;
var started = false;
var prompt = complete ? 0 : 3;
var v;
var score = 0;
var count = quote ? 0 : 300;
var chapter = 1;
var book = "hebrews";
var up = quote ? 1 : -1;
var domver = document.getElementById("verse");
var domref = document.getElementById("refrence");
var domscore = document.getElementById("score");
var dtimer = document.getElementById("timer");
var tq = document.getElementById("t-q");
var wordbox = document.getElementById("words");
var str;
var ch = "h1";
var chset = document.getElementById("ch-select");
var qset = document.getElementById("ch-type");
var pset = document.getElementById("ch-prompt");
var sbtn = document.getElementById("type-start-btn");
var set = document.getElementById("settings");
var c = 0;
var v = 1;
var w = prompt;
var vchange;
var verse;
function postData(url, data, then) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
    cache: "default" // body data type must match "Content-Type" header
  })
    .then(response => {
      then(response);
    })
    .catch(function(error) {
      console.log("no internet doing default", error, data);
      location.reload();
    });
}
function fillbox(ver, startpl) {
  wordbox.innerHTML = "";
  let bverse = [];
  console.log(startpl + 1,ver[startpl + 1],ver)
  if(!complete){
    startpl++;
  }
  for (var i = startpl; i < ver.length; i++) {
    bverse.push(ver[i]);
  }
  bverse.sort();
  for (var i = 0; i < bverse.length; i++) {
    var newListItem = document.createElement("span");
    newListItem.innerHTML = bverse[i];
    newListItem.className = "wordbox-word";
    newListItem.addEventListener("click", function(e) {
      if (verse[w] === this.innerHTML) {
        score += 10;
        domver.innerHTML = "";
        domscore.innerHTML = "score: " + score;
        for (var i = 0; i < w + 1; i++) {
          domver.innerHTML += verse[i] + " ";
        }
        fillbox(verse, w);
        w++;
        if (
          keysright[this.innerHTML.substr(0, 1).toLowerCase()] === undefined
        ) {
          keysright[this.innerHTML.substr(0, 1).toLowerCase()] = 0;
        }
        keysright[this.innerHTML.substr(0, 1).toLowerCase()] += 1;
        right++;
        if (w >= verse.length) {
          endverse.play();
          v = vchange;
          //console.log(v);
          //console.log(vchange);
          vchange = quote ? v + 1 : random(1, str[c].length);
          w = prompt;
          verse = str[c][v - 1].split(/\s/g);
          //console.log(verse);
          //console.log(w);
          domref.innerHTML = book + " " + chapter + ":" + v;
          domver.innerHTML = "";
          domscore.innerHTML = "score: " + score;
          versesdone++;
          domver.innerHTML = verse
            .slice(0, prompt)
            .toString()
            .replace(/,/g, " ");
          console.log(
            verse
              .slice(0, prompt)
              .toString()
              .replace(/,/g, " "),
            w
          );
          fillbox(verse, w - 1);
        }
      } else {
        if (
          keyswrong[this.innerHTML.substr(0, 1).toLowerCase()] === undefined
        ) {
          keyswrong[this.innerHTML.substr(0, 1).toLowerCase()] = 0;
        }
        keyswrong[this.innerHTML.substr(0, 1).toLowerCase()] += 1;
        errors++;
        console.log("wrong");
        score -= 5;
        domscore.innerHTML = "score: " + score;
        error.play();
      }
    });
    wordbox.appendChild(newListItem);
  }
}
chset.addEventListener("input", function(e) {
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
});
qset.addEventListener("input", function(e) {
  if (e.target.value === "c") {
    quote = false;
  } else {
    quote = true;
  }
});
pset.addEventListener("input", function(e) {
  if (e.target.value === "y") {
    complete = false;
  } else {
    complete = true;
  }
});
sbtn.addEventListener("click", function(e) {
  if (chset.value !== "" && qset.value !== "" && pset.value !== "") {
    ch = chset.value;
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
    c = c - 1;
    prompt = complete ? 0 : 3;
    w = prompt;
    v = quote ? 1 : random(1, str[c].length);
    vchange = quote ? v + 1 : random(1, str[c].length);
    count = quote ? 0 : 300;
    time = count;
    dtimer.textContent =
      Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
    up = quote ? 1 : -1;
    started = true;
    domref.innerHTML = book + " " + chapter + ":" + v;
    domver.innerHTML = "";
    domscore.innerHTML = "score: " + score;
    tq.style.display = "block";
    set.style.display = "none";
    verse = str[c][v - 1].split(/\s/g);
    domver.innerHTML = verse
      .slice(0, prompt)
      .toString()
      .replace(/,/g, " ");
    fillbox(verse, w - 1);
  }
});

document.addEventListener("keydown", function(e) {
  if (started) {
    e.preventDefault();
    var key = keys[e.keyCode];
    //console.log(verse);
    if (verse[w].substr(0, 1).toLowerCase() === key && key !== undefined) {
      score += 10;
      domver.innerHTML = "";
      domscore.innerHTML = "score: " + score;
      for (var i = 0; i < w + 1; i++) {
        domver.innerHTML += verse[i] + " ";
      }
      fillbox(verse, w);
      w++;
      if (keysright[key] === undefined) {
        keysright[key] = 0;
      }
      keysright[key] += 1;
      right++;
      if (w >= verse.length) {
        endverse.play();
        versesdone2.push(book + " " + chapter + ":" + v);
        v = vchange;
        //console.log(v);
        //console.log(vchange);
        vchange = quote ? v + 1 : random(1, str[c].length);
        w = prompt;
        if (v < str[c].length + 1) {
          verse = str[c][v - 1].split(/\s/g);
          //console.log(verse);
          //console.log(w);
          domref.innerHTML = book + " " + chapter + ":" + v;
          domver.innerHTML = "";
          domscore.innerHTML = "score: " + score;
          versesdone++;
          domver.innerHTML = verse
            .slice(0, prompt)
            .toString()
            .replace(/,/g, " ");
          console.log(
            verse
              .slice(0, prompt)
              .toString()
              .replace(/,/g, " ")
          );
          if (prompt > 2) {
            fillbox(verse, w - 1);
          } else {
            fillbox(verse, w);
          }
        }
      }
    } else {
      if (keyswrong[key] === undefined) {
        keyswrong[key] = 0;
      }
      keyswrong[key] += 1;
      errors++;
      console.log("wrong");
      score -= 5;
      domscore.innerHTML = "score: " + score;
      error.play();
    }
  }
  if (e.keyCode === 13&&!started) {
    if (chset.value !== "" && qset.value !== "" && pset.value !== "") {
      ch = chset.value;
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
      c = c - 1;
      prompt = complete ? 0 : 3;
      w = prompt;
      v = quote ? 1 : random(1, str[c].length);
      vchange = quote ? v + 1 : random(1, str[c].length);
      count = quote ? 0 : 300;
      time = count;
      dtimer.textContent =
        Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      up = quote ? 1 : -1;
      started = true;
      domref.innerHTML = book + " " + chapter + ":" + v;
      domver.innerHTML = "";
      domscore.innerHTML = "score: " + score;
      tq.style.display = "block";
      set.style.display = "none";
      verse = str[c][v - 1].split(/\s/g);
      domver.innerHTML = verse
        .slice(0, prompt)
        .toString()
        .replace(/,/g, " ");
      fillbox(verse, w - 1);
    }
  }
});

var gettextListener = function gettextListener() {
  str = this.responseText;
  str = str.split(" 1 ");
  str.shift();
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].split(/[0-9]+\s/);
    for (var j = 0; j < str[i].length; j++) {
      str[i][j] = str[i][j]
        .replace(/[^a-zA-z\0’)-]|’(?!s)/g, " ")
        .trim()
        .replace(/\s\s\s/g, " ")
        .replace(/\s\s/g, " ")
        .replace(/\s\s/g, " "); //cleans
    }
  }
  console.log(str);
  v = quote ? 1 : random(1, str[c].length);
  console.log(v);
};

var countIt = function countIt() {
  //console.log(parseFloat(time))
  if (started) {
    if (quote) {
      if (v < str[c].length + 1) {
        time = time + up;
        dtimer.textContent =
          Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      } else {
        window.clearInterval(timer);
        postData(
          "/postquote",
          JSON.stringify({
            ch: ch,
            score: time,
            prompt: prompt,
            user: JSON.parse(localsave("userdata", "get")).name,
            pass: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          }),
          function(data) {
            console.log(JSON.stringify(data));
            location.reload();
          }
        );
      }
    } else {
      if (time > 0) {
        time = time + up;
        dtimer.textContent =
          Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : "00");
      } else {
        console.log(
          JSON.stringify({
            ch: ch,
            score: score,
            prompt: prompt,
            name: JSON.parse(localsave("userdata", "get")).name,
            pw: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          })
        );
        window.clearInterval(timer);
        console.log(JSON.parse(localsave("userdata", "get")));
        postData(
          "/postcomplete",
          JSON.stringify({
            ch: ch,
            score: score,
            prompt: prompt,
            user: JSON.parse(localsave("userdata", "get")).name,
            pass: JSON.parse(localsave("userdata", "get")).pass,
            right: right,
            wrong: errors,
            keyswrong: keyswrong,
            keysright: keysright,
            versesdone: versesdone,
            versesdone2: versesdone2
          }),
          function(data) {
            console.log(JSON.stringify(data));
            location.reload();
          }
        );
      }
    }
  }
};

var timer = window.setInterval(countIt, 1000);

var hebrewsRequest = new XMLHttpRequest();
hebrewsRequest.onload = gettextListener;
hebrewsRequest.open("get", "/gettext/"+localStorage.playerseason);
hebrewsRequest.send();
