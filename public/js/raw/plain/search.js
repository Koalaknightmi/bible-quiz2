"use strict";

var dreams = []; // define variables that reference elements on our page

var dreamsList = document.getElementById("results");
var resnum = document.getElementById("results-num");
var dsearch = document.getElementById("search"); // a helper function to call when our request for dreams is done

var gettextListener = function gettextListener() {
  dreamsList.innerHTML = "";
  dreams = this.responseText.split(" 1 ");
  dreams.shift();

  for (var i = 0; i < dreams.length; i++) {
    dreams[i] = dreams[i].split(/[0-9]+/);
  }
};

var checkarray = function checkarray(a, f) {
  console.log(a)
  var a2 = [];
  let v;
  for(var i = 0;i<a.length;i++){
    v = a[i]
      .replace(/[-\/\\^$*+?.()|[\]{}"';:,!“—”]|[0-9]|\n/g, " ")
      .trim()
      .replace(/\s\s\s/g, " ")
      .replace(/\s\s/g, " ")
      .replace(/\s\s/g, " ");
    if (v.toLowerCase().indexOf(f.toLowerCase()) !== -1) {
      a2.push(a[i])
    } else {
      a2.push("")
    }
  }
  return a2;
};

dsearch.addEventListener("keyup", function(event) {
  search(event.target.value);
});

var search = function search(s) {
  var a = [];
  var al = 0;

  for (var d = 0; d < dreams.length; d++) {
    a.push(checkarray(dreams[d], s));
  }

  var pattern = new RegExp("(" + s + ")", "gi");
  dreamsList.innerHTML = "";

  for (var i = 0; i < a.length; i++) {
    if (a[i].length > 0) {
      for (var j = 0; j < a[i].length; j++) {
        
        if(a[i][j]!==""){
          al++;
          if (i <= 13) {
            a[i][j] =
              "<div class = 'verse' id = 'Hebrews-" +
              (i + 1) +
              ":" +
              (j + 1) +
              "'><b>Hebrews " +
              (i + 1) +
              ":" +
              (j + 1) +
              "</b> " +
              a[i][j].replace(pattern, "<b style = 'color:red;'>$1</b>");
          } else if (i <= 18 && i > 12) {
            a[i][j] =
              "<div class = 'verse' id = '1Peter-" +
              (i + 1 - 13) +
              ":" +
              (j + 1) +
              "'><b>1Peter " +
              (i + 1 - 13) +
              ":" +
              (j + 1) +
              "</b> " +
              a[i][j].replace(pattern, "<b style = 'color:red;'>$1</b>");
          } else {
            a[i][j] =
              "<div class = 'verse' id = '2Peter-" +
              (i + 1 - 18) +
              ":" +
              (j + 1) +
              "'><b>2Peter " +
              (i + 1 - 18) +
              ":" +
              (j + 1) +
              "</b> " +
              a[i][j].replace(pattern, "<b style = 'color:red;'>$1</b>");
          }
        }

        var k = document.createElement("div");
        k.innerHTML = a[i][j];
        dreamsList.appendChild(k);
      }
    }
  }

  resnum.innerText = al + " results";
}; // request the dreams from our app's sqlite database

var hebrewsRequest = new XMLHttpRequest();
hebrewsRequest.onload = gettextListener;
hebrewsRequest.open("get", "/gettext");
hebrewsRequest.send();
