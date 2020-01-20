var navbtn = document.querySelector("#navbtn");
var ddnav = document.querySelector("#sdown-nav");
var appto = document.querySelector("#normal-nav")
var htmls = [
  {path:"index",name:"home"},
  {path:"leaderboard",name:"leaderboard"},
  {path:"scripture-portion",name:"scripture portion"},
  {path:"typequizzing",name:"type quizzing"},
  {path:"voicequizzing",name:"voice quizzing"},
  {path:"onlinequizzing",name:"online quizzing"},
  {path:"search",name:"search"},
  {path:"settings",name:"settings"},
  /*{path:"chat",name:"chat"},*/
  {path:"createquestion",name:"Create Questions"},
]
var navopen = false;


document.body.addEventListener("click",function(e){
  if(navopen){
    if(e.target.className!=="d-nav-a"){
      ddnav.style.display = "none"
      navopen = false;
    } else if (e.target.id==="navbtn"||e.target.className==="material-icons md-24") {
      ddnav.style.display = "none"
      navopen = false;
    }
  } else if (e.target.id==="navbtn"||e.target.className==="material-icons md-24"){
    ddnav.style.display = "block"
    navopen = true;
  }
})
/*navbtn.addEventListener('click', (e) => {
  /*if(!navopen){
    
  }
  else{
    ddnav.style.display = "none"
    navopen = false;
  }*//*
})*/
if(window.parent.document.URL.split("/")[4]===undefined){
  var current = "index";
}
else{
  var current = window.parent.document.URL.split("/")[4].split(".")[0];
}

console.log(current)

for(var i = 0;i<htmls.length;i++){
  if(htmls[i].path!==current){
    if("SpeechRecognition" in window || "webkitSpeechRecognition" in window ){
      var lplace = document.createElement("a");
      lplace.href = '/html/'+htmls[i].path+'.html'
      lplace.innerHTML = htmls[i].name
      appto.appendChild(lplace);
      var lplace2 = document.createElement("a");
      lplace2.href = '/html/'+htmls[i].path+'.html';
      lplace2.innerHTML = htmls[i].name;
      lplace2.className = "d-nav-a";
      ddnav.appendChild(lplace2);
    }
    else{
      if(htmls[i].path!=="voicequizzing"){
        var lplace = document.createElement("a");
        lplace.href = '/html/'+htmls[i].path+'.html'
        lplace.innerHTML = htmls[i].name
        appto.appendChild(lplace);
        var lplace2 = document.createElement("a");
        lplace2.href = '/html/'+htmls[i].path+'.html';
        lplace2.innerHTML = htmls[i].name;
        lplace2.className = "d-nav-a";
        ddnav.appendChild(lplace2);
      }
    }
  }
}
function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}
document.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    //toggleFullScreen();
  }
}, false);