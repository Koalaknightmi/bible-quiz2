function pm(data, then) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/postinchat");
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
  });
}
function getchat(ct, then) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "/getchat/"+ct);
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
  });
}
export{
  getchat,
  pm
}