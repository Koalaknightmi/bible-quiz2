const img = document.querySelector("#file");
const success = document.querySelector("#sucsess");
let ncolorchange = false;
const ncolor = document.getElementById("m-m-c");
  console.dir(document)
  ncolor.addEventListener("change", function(e) {
  ncolorchange = true;
  console.log("changed");
})
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

const uploadF = document.querySelector("#settings")
.addEventListener("submit", function(e) {
  console.log(img.files)
  e.preventDefault();
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/setProfileImg");
    var formData = new FormData();
    formData.append("user", JSON.parse(localsave("userdata", "get")).name);
    formData.append("pass", JSON.parse(localsave("userdata", "get")).pass);
    formData.append("ncolorchange", ncolorchange);
    formData.append("namecol", ncolor.value);
    formData.append("file", img.files[0]);
    //console.log(formData.values())
    //xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send(formData);
  }).then((successMessage) => {
    console.log();
    success.innerHTML = "success";
    success.style.background = "green"
  })
  .catch(error => {
    console.log(error)
  });
});