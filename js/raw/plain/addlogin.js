console.dir(document.body)
var condition = navigator.onLine ? "online" : "offline";
var add = document.createElement("div");
add.innerHTML = "\n  <div id=\"l-w-w\">\n    <div class=\"container\" id=\"login-wrapper\">\n      <div id=\"login\">\n        <b>Login</b>\n        <form method=\"post\" id=\"logform\">\n          <div id=\"username-w\">\n            <input name=\"username\" autocomplete=\"text\" type=\"test\" id=\"username\" class=\"form-control\" placeholder=\"Enter username\" required>\n          </div>\n          <div id=\"password-w\">\n            <input autocomplete=\"current-password\" type=\"password\" name=\"password\" id=\"password\" min=\"6\" max=\"16\" class=\"form-control\" placeholder=\"Enter password\" required>\n          </div>\n          <div id=\"warn\" style=\"background:#FF7373;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);display:none;padding:5px 54px;margin:;\">to short</div>\n          <label>Remember me<input id=\"check\" type=\"checkbox\" name=\"remember\"></label>\n          <div id=\"button-loading-bar\" style=\"width:173px;display:none;background:rgb(194, 194, 194);height:5px;overflow-x:none;margin:auto\">\n            <div id=\"button-loading-bar-inner\" style=\"display:;background:rgb(255, 0, 0);height:5px;width:0px;\"></div>\n          </div>\n          <button id=\"login-btn\" class=\"normbtn\" type=\"submit\">submit</button>\n        </form>\n        <div id=\"register\">\n          <button class=\"diffbtn\" id=\"register-btn\">register</button>\n        </div>\n      </div>\n      <div id=\"regpage\">\n        <b>register</b>\n        <form id=\"regform\">\n          <div id=\"email-w-r\">\n            <input name=\"email\" autocomplete=\"email\" type=\"email\" id=\"email-r\" class=\"form-control\" placeholder=\"Enter email\">\n          </div>\n          <div id=\"warn3\" style=\"background:#FF7373;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);display:none;padding:5px 54px;margin:;\">to short</div>\n          <div id=\"username-w-r\">\n            <input name=\"username\" autocomplete=\"text\" type=\"test\" id=\"username-r\" class=\"form-control\" placeholder=\"Enter username\" required>\n          </div>\n          <div id = \"st\">\n            <select id = \"state\">\n              <option value=\"NAN\">please select your state</option>\n              <option value=\"AL\">Alabama</option>\n              <option value=\"AK\">Alaska</option>\n              <option value=\"AZ\">Arizona</option>\n              <option value=\"AR\">Arkansas</option>\n              <option value=\"CA\">California</option>\n              <option value=\"CO\">Colorado</option>\n              <option value=\"CT\">Connecticut</option>\n              <option value=\"DE\">Delaware</option>\n              <option value=\"DC\">District Of Columbia</option>\n              <option value=\"FL\">Florida</option>\n              <option value=\"GA\">Georgia</option>\n              <option value=\"HI\">Hawaii</option>\n              <option value=\"ID\">Idaho</option>\n              <option value=\"IL\">Illinois</option>\n              <option value=\"IN\">Indiana</option>\n              <option value=\"IA\">Iowa</option>\n              <option value=\"KS\">Kansas</option>\n              <option value=\"KY\">Kentucky</option>\n              <option value=\"LA\">Louisiana</option>\n              <option value=\"ME\">Maine</option>\n              <option value=\"MD\">Maryland</option>\n              <option value=\"MA\">Massachusetts</option>\n              <option value=\"MI\">Michigan</option>\n              <option value=\"MN\">Minnesota</option>\n              <option value=\"MS\">Mississippi</option>\n              <option value=\"MO\">Missouri</option>\n              <option value=\"MT\">Montana</option>\n              <option value=\"NE\">Nebraska</option>\n              <option value=\"NV\">Nevada</option>\n              <option value=\"NH\">New Hampshire</option>\n              <option value=\"NJ\">New Jersey</option>\n              <option value=\"NM\">New Mexico</option>\n              <option value=\"NY\">New York</option>\n              <option value=\"NC\">North Carolina</option>\n              <option value=\"ND\">North Dakota</option>\n              <option value=\"OH\">Ohio</option>\n              <option value=\"OK\">Oklahoma</option>\n              <option value=\"OR\">Oregon</option>\n              <option value=\"PA\">Pennsylvania</option>\n              <option value=\"RI\">Rhode Island</option>\n              <option value=\"SC\">South Carolina</option>\n              <option value=\"SD\">South Dakota</option>\n              <option value=\"TN\">Tennessee</option>\n              <option value=\"TX\">Texas</option>\n              <option value=\"UT\">Utah</option>\n              <option value=\"VT\">Vermont</option>\n              <option value=\"VA\">Virginia</option>\n              <option value=\"WA\">Washington</option>\n              <option value=\"WV\">West Virginia</option>\n              <option value=\"WI\">Wisconsin</option>\n              <option value=\"WY\">Wyoming</option>\n            </select>\n          </div>\n          <div id=\"password-w-r\">\n            <input autocomplete=\"current-password\" type=\"password\" name=\"password\" id=\"password-r\" minlength=\"6\" maxlength=\"16\" class=\"form-control\" placeholder=\"Enter password\" required>\n          </div>\n          <div id=\"warn2\" style=\"background:#FF7373;box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);display:none;padding:5px 54px;margin:;\">to short</div>\n          <label>Remember me<input id=\"check2\" type=\"checkbox\" name=\"remember\"></label>\n          <button id=\"regi\" class=\"normbtn\" type=\"submit\">submit</button>\n        </form>\n        <div id=\"back\">\n          <button style=\"padding:5px 70px;\" class=\"diffbtn\" id=\"backbtn\">back</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n";
var getCookie = function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
function hostReachable() {
  // Handle IE and more capable browsers
  /*var xhr = new ( window.ActiveXObject || XMLHttpRequest )( "Microsoft.XMLHTTP" );
  // Open new request as a HEAD to the root hostname with a random param to bust the cache
  xhr.open( "HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor((1 + Math.random()) * 0x10000), false );
  // Issue request and handle response
  try {
    xhr.send();
    return ( xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) );
  } catch (error) {
    return false;
  }*/
  /*return fetch("/?rand=" + Math.floor((1 + Math.random()) * 0x10000)).then(function(t){
    return t
  })*/
  return fetch("https://koalaknightmi-bible-quiz2-1.glitch.me/leaderboardfetch",
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    })
    .catch(error => console.warn(error));
}
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
var loggedin = false;
console.log(hostReachable())
if(getCookie("loggedin")==="true"){
  loggedin = true;
} else {
  if(condition === "online"){
    if(localsave("save-checked", "get")==="true"){
      loggedin = true;
    } else{
      document.body.appendChild(add);
    }
  } else{
    loggedin = true;
  }
}
/*if(condition === "online"){
  
}
if(condition === "online"&&JSON.parse(getCookie("loggedin"))!==true&&!"serviceWorker" in navigator&&!JSON.parse(localsave("userdata"))){
document.body.appendChild(add);
}*/
