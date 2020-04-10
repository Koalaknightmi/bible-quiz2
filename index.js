var reqs = 0; //https://bit.ly/2L7uHDj
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.Server(app);
var p2p = require("socket.io-p2p-server").Server;
const io = socketio(server); // Attach socket.io to our server
const email = "NazareneBibleQuizOnline@bible-quiz-online.glitch.me";
const hbs = require("hbs");
//const webPush = require("web-push");
var bodyParser = require("body-parser");
var serveIndex = require("serve-index");
var serveStatic = require("serve-static");
var fs = require("fs");
const frameguard = require("frameguard");
const fileUpload = require("express-fileupload");
var glicko = require("glicko-two");
const f = require("./functions");
var Jimp = require("jimp");
const titles = [
  {
    title: "bibleSuperGrandMaster",
    requiredrt: 2700,
    lossrt: 2600,
    abr: "BSGM"
  },
  { title: "bibleGrandMaster", requiredrt: 2500, lossrt: 2400, abr: "BGM" },
  { title: "bibleMaster", requiredrt: 2200, lossrt: 2100, abr: "BM" },
  { title: "bibleExpert", requiredrt: 2000, lossrt: 1900, abr: "BE" }
];
var s_b = "b";
const questionsstarterlist = [
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "g",
  "a",
  "a",
  "a",
  "a",
  "v",
  "r",
  "q",
  "x",
  s_b
];
//const db = require("./database");
/*app.use(frameguard({
  action: 'SAMEORIGIN'
}))*/
app.use(express.json()); // for parsing application/json
app.use(
  express.urlencoded({
    extended: true
  })
); // for parsing application/x-www-form-urlencoded
app.use(fileUpload());
app.use(
  "/files",
  serveIndex("/", {
    icons: true
  })
);
app.use("/files", serveStatic("/"));
//app.post("/test", (req, res) => {
//console.log(req.body); // so when you run
/*
  fetch('/quote', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: { 'Content-Type': 'application/json' }, 👈 don't forget this! thx
        body: JSON.stringify(ch: "h1"
keysright: {i: 3, t: 7, p: 2, g: 1, s: 5, o: 1, a: 6, m: 2, v: 1, w: 3, n: 1}
keyswrong: {}
pass: "Z3NNZXR4US84T210bXFoRA=="
prompt: 0
right: 32
score: 25
user: "koalastrikermi"
versesdone: 1
wrong: 0), // body data type must match "Content-Type" header
    });
    that in the console when veiwing the page its sopposed to log the body but it ist working plz help
  */
//console.log('form body:', req.body, req.get('content-type'));
//res.end(); // 👈 don't forget this!
//});
/*const testFolder = __dirname+'/public/css';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log("\"/css/"+file+"\",");
  });
});*/

/*if (!process.env.VPU || !process.env.VPR) {
  console.log(
    "You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY " +
      "environment variables. You can use the following ones:"
  );
  console.log(webPush.generateVAPIDKeys());
  //return;
}*/
/*webPush.setVapidDetails(
  "https://serviceworke.rs/",
  process.env.VPU,
  process.env.VPR
);*/
const options = {
  TTL: 1 * 60 * 60 * 24
};
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(
    "bible-quiz-e1ef4-firebase-adminsdk-8xtsw-567ec07b71.json"
  ),
  databaseURL: "https://bible-quiz-e1ef4.firebaseio.com"
});
//var storageRef = admin.storage().bucket();
var db = admin.firestore();
var usersref = db.collection("users");
var subsref = db.collection("subs");
var tscoresref = db.collection("typequizzingscores");
var chatref = db.collection("chats");
let FieldValue = admin.firestore.FieldValue;
var usertimouts = {};
var payload = "hi there";
//var Sequelize = require('sequelize');
//const Op = Sequelize.Op;
var ip = "";
var log = console.log;
var chat = [];
var onlinepls = {};
var gamerooms = {};
var playersDATA = {};
var emailmsg = `<b>welcome to Nazarene Bible Quizing Online</b> <br>
We hope that you enjoy your experience with our site<br>
if you have ant question or concerns plz email <a href = "mailto:bible-quiz-develepers@googlegroups.com">bible-quiz-develepers@googlegroups.com</a>`;
var sendmail = f.sendmail;
var newD = function(c, n, data) {
  let docRef = db.collection(c).doc(n);
  data.createdAt = new Date().toISOString();
  data.updatedAt = FieldValue.serverTimestamp();
  docRef.set(data);
};
var newD2 = function(c, data, t) {
  data.createdAt = new Date().toISOString();
  data.updatedAt = FieldValue.serverTimestamp();
  let addDoc = db
    .collection(c)
    .add(data)
    .then(ref => {
      if (t) {
        t(ref);
      }
    });
};
var updateOne = function(c, n, data) {
  let dRef = db.collection(c).doc(n);
  data.updatedAt = FieldValue.serverTimestamp();
  dRef.update(data);
};
var onlineplayers = {};
var Admins = ["koalastrikermi"];
/*console.log(getuser("koalastrikermi").userName)
if(getuser("koalastrikermi")!==false){
  console.log("yay it worked!!!!!!")
  console.log(getuser("koalastrikermi"))
}*/
//sendmail("koalastrikermi@gmail.com")
/*var users2 = [
"Jaidenmcd@icloud.com",
"Koalaknightmi",
"MaddieJoy",
"Pink koala",
"River gal",
"koalastrikermi",
"koalastrikermi2",
"koalastrikermi7",
"maddie2005"
]
for(var i = 0;i<users2.length;i++){
updateOne("users", users2[i],
            ratings: {
              openOnline:{ rt: 1000, rd: 350, rv: 0.6 },
              teamsOnline:{ rt: 1000, rd: 350, rv: 0.6 }
            })*/
/*db.collection("users")
  .get()
  .then(function(querySnapshot) {
  //console.log(querySnapshot.docs)
    querySnapshot.forEach(function(doc) {
     console.log(doc.data());
      updateOne("users", doc.id,{
        online:false
      });
      });
    });
  //});
//}
*/
/*db.collection("users")
  .get()
  .then(function(querySnapshot) {
  //console.log(querySnapshot.docs)
    querySnapshot.forEach(function(doc) {
     //console.log(doc.data());
      updateOne("users", doc.id,{
            studying: {
              today:0,
              week:[],
              month:{},
              season:[], 
              seasonbest:0,
              weekbest:0
            },
        teams:[]
      }
      );
    });});*/
//var chatrooms = {};
var gop2p = function(socket, room) {
  p2p(socket, null, room);
};
/*var push = (push = (opt, to, webPush) => {
  if (to === "") {
    let query = subsref.get().then(subs => {
      subs.forEach(sub => {
        //console.log(sub.data().sub);
        return webPush.sendNotification(sub.data().sub, opt).catch(err => {
          if (err.statusCode === 410) {
            console.log("Subscription is no longer valid: ", err);
            subsref.doc(sub.id).delete();
          } else {
            console.log(err);
          }
        });
      });
    });
  } else {
    let query = subsref
      .where("userName", "==", to)
      .get()
      .then(subs => {
        if (subs.empty) {
          console.log("No matching documents.5");
          return;
        }
        subs.forEach(sub => {
          //console.log(sub.data().sub);
          return webPush.sendNotification(sub.data().sub, opt).catch(err => {
            if (err.statusCode === 410) {
              console.log("Subscription is no longer valid: ", err);
              subsref.doc(sub.id).delete();
            } else {
              console.log(err);
            }
          });
        });
      });
  }
});*/
var timeSince = f.timeSince;
var totime = f.totime;
var asort = f.asort;
//made by porter on khan academy https://www.Khanacademy.org/profile/battleboy21
String.prototype.pad = f.pad;
/*hbs.registerHelper('filter', function (context, options) {
  var a = context.sort(function (a, b) {
    return b.score - a.score;
  });
  return options.fn(this) + "<td>" + a[0].score + "</td>"
});*/
function Player(id, username, col, r) {
  this.user = username;
  this.id = id;
  this.pcol = col;
  this.prank = r;
  this.score = 0;
  this.x = 31;
  this.y = 15;
  this.z = 0;
  this.rx = 0;
  this.ry = 0;
  this.rz = 0;
  this.entity = null;
}
var getquestionset = function(n) {
  let a = [];
  for (var i = 0; i < n; i++) {
    a.push(i);
  }
  return a;
};
function match(type, id, creator, col, t, n1, n2, qd,n) {
  this.type = type;
  this.id = id;
  this.creator = creator;
  this.quizmaster = creator;
  this.team1 = {
    players: {},
    errors: 0,
    timeouts: 2,
    playersnum: 0,
    avg: 0,
    name: n1
  };
  this.team2 = {
    players: {},
    errors: 0,
    timeouts: 2,
    playersnum: 0,
    avg: 0,
    name: n2
  };
  this.scoresheet = {
    cq: 1,
    q: 20,
    t: t,
    team1: [],
    team2: [],
    team1bonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    team2bonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    team1score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    team2score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    team1sc: 0,
    team2sc: 0,
    team1bsc: 0,
    team2bsc: 0
  };
  this.playerNum = 0;
  this.creatorcol = col;
  this.qcol = "";
  this.questions = getquestionset(20);
  this.qsdone = 0;
  this.hidden = false;
  this.jumped = false;
  this.ratingavg = 0;
  this.playersnum = 0;
  this.qmdata = qd;
  this.jt = "";
  this.jumper = {};
  this.name = n;
}
function checktitlereq(user, rt) {
  titles.sort(function(a, b) {
    return a.requiredrt - b.requiredrt;
  });
  titles.forEach(function(t) {
    //console.log(t);
    if (rt >= t.requiredrt) {
      updateOne("users", user, { titled: true, title: t.title, tabr: t.abr });
      console.log(t.title);
    }
  });
}
function checktitleloss(user, rt) {
  titles.sort(function(a, b) {
    return b - a;
  });
  titles.forEach(function(t, i, a) {
    console.log(t);
    if (rt <= t.lossrt && t.title === "bibleExpert") {
      updateOne("users", user, { titled: false, title: "", tabr: "" });
    } else if (rt <= t.lossrt) {
      updateOne("users", user, {
        titled: true,
        title: a[i + 1].title,
        tabr: a[i + 1].abr
      });
    }
  });
}
var gamerooms = {};
hbs.registerPartials(__dirname + "/veiws/partials");
app.set("view engine", "hbs");
app.set("views", __dirname + "/veiws/");
app.use((req, res, next) => {
  reqs++;
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  var host = req.headers.host;
  var origin = req.headers.origin;
  //console.log(reqs, req.get("User-Agent"));
  if (req.get("User-Agent") === "FreshpingBot/1.0 (+https://freshping.io/)") {
    console.log("yay " + new Date().getHours());
    if (new Date().getHours() === 4 && new Date().getMinutes() > 54) {
      usersref.get().then(function(querySnapshot) {
        //console.log(querySnapshot.docs)
        querySnapshot.forEach(function(doc) {
          console.log(doc.data());
          if (doc.id === "koalastrikermi") {
            updateOne("users", "koalastrikermi", {
              test: doc.data().test + 1
            });
          }
        });
      });
    }
  }
  next();
});
app.use(express.static("public"));
app.get("/", function(request, response) {
  ip = request.headers["x-forwarded-for"];
  //console.log(request)
  response.sendFile(__dirname + "/public/html/index.html");
});
app.get("/gettext/:s", function(request, res) {
  let s = request.params.s;
  fs.readFile(s+".txt", function(err, data) {
    res.writeHead(200, {
      "Content-Type": "text"
    });
    res.write(data);
    res.end();
  });
});
app.get("/leaderboardfetch", function(request, res) {
  db.collection("typequizzingscores")
    .get()
    .then(scores => {
      let data = [];
      scores.forEach(doc => {
        let dta = doc.data();

        dta.profileIMG = "/images/users/" + encodeURI(dta.userName) + ".png";
        data.push(dta);
      });
      res.writeHead(200, {
        "Content-Type": "json"
      });
      //console.log(data)
      res.write(JSON.stringify(data));
      res.end();
    });
});
app.post("/postquote", (req, res) => {
  console.log(req.body);
  var data = req.body;
  let match = false;
  let query = usersref
    .where("userName", "==", data.user)
    .get()
    .then(users => {
      if (users.empty) {
        console.log("No matching documents.");
        //socket.emit("login failed");
        return;
      }
      users.forEach(user => {
        console.log(user.data().userName);
        if (user.data().password === data.pass) {
          match = true;
        }
        console.log(match);
        if (match) {
          if (data.prompt === 0) {
            prompt = false;
          } else {
            prompt = true;
          }
          newD2("typequizzingscores", {
            ch: data.ch,
            userName: data.user,
            score: data.score,
            type: "quoted-" + prompt,
            profileIMG: user.data().profileIMG,
            nameCOl: user.data().nameCOl,
            right: data.right,
            wrong: data.wrong,
            keyswrong: data.keyswrong,
            keysright: data.keysright,
            versesdone: data.versesdone,
            versesdone2: data.versesdone2
          });
        }
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end();
      });
    });
});
app.post("/vpostquote", (req, res) => {
  console.log(req.body);
  var data = req.body;
  let match = false;
  let query = usersref
    .where("userName", "==", data.user)
    .get()
    .then(users => {
      if (users.empty) {
        console.log("No matching documents.");
        //socket.emit("login failed");
        return;
      }
      users.forEach(user => {
        console.log(user.data().userName);
        if (user.data().password === data.pass) {
          match = true;
        }
        if (match) {
          if (data.prompt === 0) {
            prompt = false;
          } else {
            prompt = true;
          }
          newD2("typequizzingscores", {
            ch: data.ch,
            userName: data.user,
            score: data.score,
            type: "quoted-" + prompt + "-v",
            profileIMG: user.data().profileIMG,
            nameCOl: user.data().nameCOl
          });
        }
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end();
      });
    });
});
app.post("/postcomplete", (req, res) => {
  //console.log(req.body)
  var data = req.body;
  let query = usersref
    .where("userName", "==", data.user)
    .get()
    .then(users => {
      if (users.empty) {
        console.log("No matching documents.");
        //socket.emit("login failed");
        return;
      }
      users.forEach(user => {
        //console.log(user.data().userName,user.data().password.toString()===data.pass.toString())
        if (user.data().password === data.pass) {
          if (data.prompt === 0) {
            prompt = false;
          } else {
            prompt = true;
          }
          newD2(
            "typequizzingscores",
            {
              ch: data.ch,
              userName: data.user,
              score: data.score,
              type: "completed-" + prompt,
              profileIMG: user.data().profileIMG,
              nameCOl: user.data().nameCOl,
              right: data.right,
              wrong: data.wrong,
              keyswrong: data.keyswrong,
              keysright: data.keysright,
              versesdone: data.versesdone,
              versesdone2: data.versesdone2
            },
            function(t) {
              //log(t.collection("typequizzingscores").doc('lOAzzxeAPQWvBjoRmMWk'))
            }
          );
        }
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.write(JSON.stringify(data));
        res.end();
      });
    });
});
app.post("/vpostcomplete", (req, res) => {
  console.log(req.body);
  var data = req.body;
  let match = false;
  let query = usersref
    .where("userName", "==", data.user)
    .get()
    .then(users => {
      if (users.empty) {
        console.log("No matching documents.");
        //socket.emit("login failed");
        return;
      }
      users.forEach(user => {
        console.log(user.data().userName);
        if (user.data().password === data.pass) {
          match = true;
        }
        if (match) {
          if (data.prompt === 0) {
            prompt = false;
          } else {
            prompt = true;
          }
          newD2("typequizzingscores", {
            ch: data.ch,
            userName: data.user,
            score: data.score,
            type: "completed-" + prompt + "-v",
            profileIMG: user.data().profileIMG,
            nameCOl: user.data().nameCOl
          });
        }
        res.writeHead(200, {
          "Content-Type": "application/json"
        });
        res.end();
      });
    });
});
app.post("/setProfileImg", (req, res) => {
  //console.log(req,req.get('content-type'))
  let match = false;
  let query = usersref
    .where("userName", "==", req.body.user)
    .get()
    .then(users => {
      if (users.empty) {
        console.log("No matching documents.");
        //socket.emit("login failed");
        return;
      }
      users.forEach(user => {
        console.log(user.data().password === req.body.pass);
        if (user.data().password === req.body.pass) {
          match = true;
          console.log("matched");
        }
      });
      if (match) {
        let ncol = req.body.namecol;
        //console.log(req.body)
        if (req.body.ncolorchange === "true") {
          updateOne("users", req.body.user, {
            nameCOl: ncol
          });
          let tscoresquery = tscoresref
            .where("userName", "==", req.body.user)
            .get()
            .then(scores => {
              scores.forEach(user => {
                //console.log(user.id, ncol)
                updateOne("typequizzingscores", user.id, {
                  nameCOl: ncol
                });
              });
            });
        }
        if (req.files !== null) {
          let sampleFile = req.files.file;
          sampleFile.mv(
            __dirname + "/public/images/users/" + sampleFile.name,
            function(err) {
              if (err) return res.status(500); /*.send(err);*/

              Jimp.read(
                __dirname + "/public/images/users/" + sampleFile.name,
                (err, img) => {
                  if (err) throw err;

                  fs.unlink(
                    __dirname + "/public/images/users/" + sampleFile.name,
                    function(err) {
                      if (err) throw err;
                      console.log("File deleted!");
                    }
                  );
                  img.write(
                    __dirname + "/public/images/users/" + req.body.user + ".png"
                  ); // save
                }
              );
              //res.sendFile(__dirname + '/public/images/users/' + req.body.user + '.png');
            }
          );
        }
        res.writeHead(200, {
          "Content-Type": "text"
        });
        res.write("sucsess");
        res.end();
      }
    });
});
app.post("/createquestion", (req, res) => {
  console.log(req.body);
  let data = req.body;
  let type = data.type,
    ref = data.refrence,
    question = data.question,
    answer = data.answer,
    creator = data.creator;
  let addDoc = db
    .collection("questions")
    .doc(type)
    .collection("questions")
    .add({
      type: type,
      question: question,
      answer: answer,
      creator: creator,
      createdAt: new Date().toISOString(),
      refrence: ref
    })
    .then(ref => {
      res.writeHead(200, {
        "Content-Type": "text"
      });
      res.write("sucsess");
      res.end();
    });
});
app.get("/user/:user", function(request, res) {
  var userdata = {};
  var typequizzingscores = [];
  var friendsdata = [];
  var scoresdata = [];
  var username = request.params.user;

  let userquery = usersref
    .where("userName", "==", username)
    .get()
    .then(users => {
      console.log(username);
      //console.log(users)
      if (users.empty) {
        console.log("No matching documents.1");
        //socket.emit("login failed");
        //return;
      }
      users.forEach(user => {
        let dt = user.data();
        dt.email = "";
        //console.log(new Date(dt.lastLogin))
        dt.lastLogin = timeSince(new Date(dt.lastLogin));
        dt.state = dt.state.toUpperCase();
        dt.profileIMG = "/images/users/" + encodeURI(dt.profileIMG) + ".png";
        userdata = dt;
      });
      //console.log(userdata)
      if (userdata.friends.length > 0) {
        for (var i = 0; i < userdata.friends.length; i++) {
          log(userdata.friends[i]);
          let friendquery = usersref
            .where("userName", "==", userdata.friends[i])
            .get()
            .then(users => {
              //console.log(users.empty)
              //console.log(users)
              if (users.empty) {
                console.log("No matching documents.2");
                //socket.emit("login failed");
                return;
              }
              users.forEach(user => {
                let dta = user.data();
                dta.state = dta.state.toUpperCase();
                dta.profileIMG =
                  "/images/users/" + encodeURI(dta.profileIMG) + ".png";
                friendsdata.push(dta);
              });
              //log(friendsdata)
            });
        }
        var ts = {};
        var cts = [];
        var qts = [];
        var cpts = [];
        var qpts = [];
        let tscoresquery = tscoresref
          .where("userName", "==", username)
          .get()
          .then(scores => {
            if (scores.empty) {
              console.log("No matching documents.3");
              // socket.emit("login failed");
              // return;
              res.render("user", {
                userdata: userdata,
                scoresdata: {},
                friendsdata: friendsdata,
                ts: {}
              });
            } else {
              //console.log(scores.empty)
              scores.forEach(score => {
                let scdt = score.data();
                //log(scdt.type)
                scdt.time = scdt.createdAt;
                scdt.createdAt = timeSince(new Date(scdt.createdAt));
                if (scdt.type.indexOf("quote") !== -1) {
                  scdt.score = totime(scdt.score);
                }
                if (scdt.type === "quoted-true") {
                  scdt.type = "quoted with prompt";
                  qpts.push(scdt);
                } else if (scdt.type === "quoted-false") {
                  scdt.type = "quoted without prompt";
                  qts.push(scdt);
                } else if (scdt.type === "completed-false") {
                  scdt.type = "completed without prompt";
                  cts.push(scdt);
                } else {
                  scdt.type = "completed with prompt";
                  cpts.push(scdt);
                }
                typequizzingscores.push(scdt);
                //console.log()
                //friendsdata.push(score.data())
              });
              cts = asort(cts, "hl", "score");
              cpts = asort(cpts, "hl", "score");
              qpts = asort(qpts, "lh", "score");
              qts = asort(qts, "lh", "score");
              ts = {
                c: cts,
                cp: cpts,
                q: qts,
                qp: qpts
              };
              //console.log(typequizzingscores)
              typequizzingscores = typequizzingscores.sort(function(a, b) {
                //console.log(a, b);
                if (a.time._seconds === undefined) {
                  a = new Date(a.time).getTime();
                } else {
                  a = a.time._seconds;
                }
                if (b.time._seconds === undefined) {
                  b = new Date(b.time).getTime();
                } else {
                  b = b.time._seconds;
                }

                return b - a;
              });
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            }
          });
      } else {
        var ts = {};
        var cts = [];
        var qts = [];
        var cpts = [];
        var qpts = [];
        let tscoresquery = tscoresref
          .where("userName", "==", username)
          .get()
          .then(scores => {
            if (scores.empty) {
              console.log("No matching documents.");
              //socket.emit("login failed");
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            } else {
              //console.log(scores.empty)
              scores.forEach(score => {
                let scdt = score.data();
                //log(scdt.type)
                scdt.time = scdt.createdAt;
                scdt.createdAt = timeSince(new Date(scdt.createdAt));
                if (scdt.type.indexOf("quote") !== -1) {
                  scdt.score = totime(scdt.score);
                }
                if (scdt.type === "quoted-true") {
                  scdt.type = "quoted with prompt";
                  qpts.push(scdt);
                } else if (scdt.type === "quoted-false") {
                  scdt.type = "quoted without prompt";
                  qts.push(scdt);
                } else if (scdt.type === "completed-false") {
                  scdt.type = "completed without prompt";
                  cts.push(scdt);
                } else {
                  scdt.type = "completed with prompt";
                  cpts.push(scdt);
                }
                typequizzingscores.push(scdt);
                //console.log()
                //friendsdata.push(score.data())
              });
              cts = asort(cts, "hl", "score");
              cpts = asort(cpts, "hl", "score");
              qpts = asort(qpts, "lh", "score");
              qts = asort(qts, "lh", "score");
              ts = {
                c: cts,
                cp: cpts,
                q: qts,
                qp: qpts
              };
              //console.log(typequizzingscores)
              typequizzingscores = typequizzingscores.sort(function(a, b) {
                //console.log(a, b);
                if (a.time._seconds === undefined) {
                  a = new Date(a.time).getTime();
                } else {
                  a = a.time._seconds;
                }
                if (b.time._seconds === undefined) {
                  b = new Date(b.time).getTime();
                } else {
                  b = b.time._seconds;
                }

                return b - a;
              });
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            }
          });
      }
    });
  /**/
});
app.get("/team/:team", function(request, res) {
  var userdata = {};
  var typequizzingscores = [];
  var friendsdata = [];
  var scoresdata = [];
  var username = request.params.team;

  let userquery = usersref
    .where("userName", "==", username)
    .get()
    .then(users => {
      console.log(username);
      //console.log(users)
      if (users.empty) {
        console.log("No matching documents.1");
        //socket.emit("login failed");
        //return;
      }
      users.forEach(user => {
        let dt = user.data();
        dt.email = "";
        //console.log(new Date(dt.lastLogin))
        dt.lastLogin = timeSince(new Date(dt.lastLogin));
        dt.state = dt.state.toUpperCase();
        dt.profileIMG = "/images/users/" + encodeURI(dt.profileIMG) + ".png";
        userdata = dt;
      });
      //console.log(userdata)
      if (userdata.friends.length > 0) {
        for (var i = 0; i < userdata.friends.length; i++) {
          log(userdata.friends[i]);
          let friendquery = usersref
            .where("userName", "==", userdata.friends[i])
            .get()
            .then(users => {
              //console.log(users.empty)
              //console.log(users)
              if (users.empty) {
                console.log("No matching documents.2");
                //socket.emit("login failed");
                return;
              }
              users.forEach(user => {
                let dta = user.data();
                dta.state = dta.state.toUpperCase();
                dta.profileIMG =
                  "/images/users/" + encodeURI(dta.profileIMG) + ".png";
                friendsdata.push(dta);
              });
              //log(friendsdata)
            });
        }
        var ts = {};
        var cts = [];
        var qts = [];
        var cpts = [];
        var qpts = [];
        let tscoresquery = tscoresref
          .where("userName", "==", username)
          .get()
          .then(scores => {
            if (scores.empty) {
              console.log("No matching documents.3");
              // socket.emit("login failed");
              // return;
              res.render("user", {
                userdata: userdata,
                scoresdata: {},
                friendsdata: friendsdata,
                ts: {}
              });
            } else {
              //console.log(scores.empty)
              scores.forEach(score => {
                let scdt = score.data();
                //log(scdt.type)
                scdt.time = scdt.createdAt;
                scdt.createdAt = timeSince(new Date(scdt.createdAt));
                if (scdt.type.indexOf("quote") !== -1) {
                  scdt.score = totime(scdt.score);
                }
                if (scdt.type === "quoted-true") {
                  scdt.type = "quoted with prompt";
                  qpts.push(scdt);
                } else if (scdt.type === "quoted-false") {
                  scdt.type = "quoted without prompt";
                  qts.push(scdt);
                } else if (scdt.type === "completed-false") {
                  scdt.type = "completed without prompt";
                  cts.push(scdt);
                } else {
                  scdt.type = "completed with prompt";
                  cpts.push(scdt);
                }
                typequizzingscores.push(scdt);
                //console.log()
                //friendsdata.push(score.data())
              });
              cts = asort(cts, "hl", "score");
              cpts = asort(cpts, "hl", "score");
              qpts = asort(qpts, "lh", "score");
              qts = asort(qts, "lh", "score");
              ts = {
                c: cts,
                cp: cpts,
                q: qts,
                qp: qpts
              };
              //console.log(typequizzingscores)
              typequizzingscores = typequizzingscores.sort(function(a, b) {
                //console.log(a, b);
                if (a.time._seconds === undefined) {
                  a = new Date(a.time).getTime();
                } else {
                  a = a.time._seconds;
                }
                if (b.time._seconds === undefined) {
                  b = new Date(b.time).getTime();
                } else {
                  b = b.time._seconds;
                }

                return b - a;
              });
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            }
          });
      } else {
        var ts = {};
        var cts = [];
        var qts = [];
        var cpts = [];
        var qpts = [];
        let tscoresquery = tscoresref
          .where("userName", "==", username)
          .get()
          .then(scores => {
            if (scores.empty) {
              console.log("No matching documents.");
              //socket.emit("login failed");
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            } else {
              //console.log(scores.empty)
              scores.forEach(score => {
                let scdt = score.data();
                //log(scdt.type)
                scdt.time = scdt.createdAt;
                scdt.createdAt = timeSince(new Date(scdt.createdAt));
                if (scdt.type.indexOf("quote") !== -1) {
                  scdt.score = totime(scdt.score);
                }
                if (scdt.type === "quoted-true") {
                  scdt.type = "quoted with prompt";
                  qpts.push(scdt);
                } else if (scdt.type === "quoted-false") {
                  scdt.type = "quoted without prompt";
                  qts.push(scdt);
                } else if (scdt.type === "completed-false") {
                  scdt.type = "completed without prompt";
                  cts.push(scdt);
                } else {
                  scdt.type = "completed with prompt";
                  cpts.push(scdt);
                }
                typequizzingscores.push(scdt);
                //console.log()
                //friendsdata.push(score.data())
              });
              cts = asort(cts, "hl", "score");
              cpts = asort(cpts, "hl", "score");
              qpts = asort(qpts, "lh", "score");
              qts = asort(qts, "lh", "score");
              ts = {
                c: cts,
                cp: cpts,
                q: qts,
                qp: qpts
              };
              //console.log(typequizzingscores)
              typequizzingscores = typequizzingscores.sort(function(a, b) {
                //console.log(a, b);
                if (a.time._seconds === undefined) {
                  a = new Date(a.time).getTime();
                } else {
                  a = a.time._seconds;
                }
                if (b.time._seconds === undefined) {
                  b = new Date(b.time).getTime();
                } else {
                  b = b.time._seconds;
                }

                return b - a;
              });
              res.render("user", {
                userdata: userdata,
                scoresdata: typequizzingscores,
                friendsdata: friendsdata,
                ts: ts
              });
            }
          });
      }
    });
  /**/
});

io.sockets.on("connection", function(socket) {
  /*socket.on('message', function (data) {
    User.findOne({
      where: {
        userName: data.user
      }
    }).then(user => {
      data.col = user.dataValues.nameCOl;
    });
    data.timesince = (new Date().toISOString())
    chat.unshift(data);
    console.log(chat);
    io.emit("message",chat);
  });*/
  socket.on("vapidPublicKey", data => {
    socket.emit("vpk", process.env.VPU);
  }); // listen to the event
  socket.on("register", function(data, sub) {
    console.log(sub);
    let used = false;
    let query = usersref.get().then(users => {
      users.forEach(user => {
        console.log(user);
        if (user.id === data.name) {
          used = true;
        }
      });
      if (!used) {
        if (Admins.indexOf(data.name) > -1) {
          Jimp.read(
            __dirname + "/public/images/avatar generic.png",
            (err, img) => {
              if (err) throw err;

              img.write(
                __dirname + "/public/images/users/" + data.name + ".png"
              ); // save
            }
          );
          newD("users", data.name, {
            id: 1,
            userName: data.name,
            email: data.email,
            password: data.pass,
            lastLogin: new Date().toISOString(),
            isAdmin: true,
            visitNum: 0,
            nameCOl: "blue",
            ratings: {
              openOnline: { rt: 1000, rd: 350, rv: 0.6 },
              teamsOnline: { rt: 1000, rd: 350, rv: 0.6 }
            },
            gamesPlayed: 0,
            online: true,
            tournaments: "",
            friends: [],
            monthScore: 0,
            allTimeScore: 0,
            profileIMG: data.name,
            state: data.state,
            ipAD: ip,
            banned: false
          });
          newD2("subs", {
            userName: data.name,
            sub: sub
          });
          //console.log('user ' + data.name + ' registered');
          socket.emit("registered", data.name);
          //var id = socket.id;
          sendmail(data.email);
          /*db.collection("users").get().then(users => {
            io.emit("leaderboard", users);
            //console.log(users);
          })*/
        } else {
          Jimp.read(
            __dirname + "/public/images/avatar generic.png",
            (err, img) => {
              if (err) throw err;

              img.write(
                __dirname + "/public/images/users/" + data.name + ".png"
              ); // save
            }
          );
          newD("users", data.name, {
            id: 1,
            userName: data.name,
            email: data.email,
            password: data.pass,
            lastLogin: new Date().toISOString(),
            isAdmin: false,
            visitNum: 0,
            nameCOl: "blue",
            ratings: {
              openOnline: { rt: 1000, rd: 350, rv: 0.6 },
              teamsOnline: { rt: 1000, rd: 350, rv: 0.6 }
            },
            gamesPlayed: 0,
            online: true,
            tournaments: "",
            friends: [],
            monthScore: 0,
            allTimeScore: 0,
            profileIMG: data.name,
            state: data.state,
            ipAD: ip,
            banned: false
          });
          newD2("subs", {
            userName: data.name,
            sub: sub
          });
          //console.log('user ' + data.name + ' registered');
          socket.emit("registered", data.name);
          var id = socket.id;
          sendmail(data.email);
          /*var id = socket.id;
          var newplayer = {
            id: id,
            user: data.user
          };
          onlineplayers[id] = newplayer;
          onlinepls[socket.id] = {
            user: data.user
          };*/
          /*chat.unshift({
            col: "black",
            user: 'bot',
            message: data.user + ' is online now',
            timesince: new Date().toISOString()
          });*/
          //io.emit("message", chat);
          /*db.collection("users").get().then(users => {
            io.emit("leaderboard", users);
            //console.log(users);
          })*/
        }
      } else {
        socket.emit("already used", data.name);
        console.log(data.name + " username already used");
      }
    });
  });
  socket.on("login attempt", function(data) {
    //console.log("login attempt" + JSON.stringify(data));
    let match = false;
    let query = usersref
      .where("userName", "==", data.user)
      .get()
      .then(users => {
        if (users.empty) {
          console.log("No matching documents.");
          socket.emit("login failed");
          return;
        }
        users.forEach(user => {
          //console.log(user.data().userName)
          if (user.data().password === data.pass) {
            match = true;
          }
        });
        if (match) {
          updateOne("users", data.user, {
            visitNum: FieldValue.increment(1),
            lastLogin: new Date().toISOString(),
            online: true
          });
          if (data.sub) {
            newD2("subs", {
              userName: data.user,
              sub: data.sub
            });
          }
          //push(payload, "",webPush)
          socket.emit("logged in", data.user);
        } else {
          socket.emit("login failed");
        }
      });
    /*User.findOne({
      where: {
        userName: data.user
      }
    }).then(users => {
      if (users === null) {
        socket.emit("login failed");
        //console.log("login failed " + data.user + " is not regestered");
      }
      else if (users.dataValues.password === data.pass) {
        //console.log(users);
        //console.log(users.dataValues.password);
        User.update({
          lastLogin: new Date(),
          visitNum: users.visitNum + 1,
          online: true
        }, {
          where: {
            userName: data.user
          }
        });
        subs.create({
          userName: data.name,
          sub: data.sub
        })
        
        //console.log("logged in:"+users.password+" = "+data.pass);
        var id = socket.id;
        var newplayer = {
          id: id,
          user: data.user
        };
        onlineplayers[id] = newplayer;
        console.log("player initalized " + data.user);
        io.emit("in game players", {
          id: id,
          onlineplayers: onlineplayers
        });
        //console.log(onlineplayers);
        /*User.findAll().then(users => {
          for (var i in users) {
            //console.log(users[i].dataValues.id, users[i].dataValues.userName);
          }
          //socket.emit("leaderboard", users);
          socket.emit("logged in", data.user);
          onlinepls[socket.id] = {
            user: data.user
          };
          chat.unshift({
            col: "black",
            user: 'bot',
            message: data.user + ' is online now',
            timesince: new Date().toISOString()
          });
          io.emit("message", chat);
        })
      }
      else {
        socket.emit("login failed");
        //console.log("login failed " + users.password + "!==" + data.pass);
      }
    })
    /*socket.on("player moved", function (data) {
      if(!onlineplayers[data.id]) return;
      onlineplayers[data.id].x = data.x;
      onlineplayers[data.id].z = data.z;
      onlineplayers[data.id].y = data.y;
      //console.log(onlineplayers);
      socket.broadcast.emit("ingame players moved", data);
    });
  });*/
    /*socket.on("quoted", (data) => {
      //console.log(data)
      User.findOne({
        where: {
          userName: data.user
        }
      }).then(user => {
        if (user === null) {
          socket.emit("login failed");
          //console.log("login failed " + data.user + " is not regestered");
        }
        else if (user.dataValues.password === data.pass) {
      if (data.prompt === 0) {
        prompt = false;
      }
      else {
        prompt = true;
      }
      
        typequizzingscores.create({
          ch: data.ch,
          userName: data.user,
          score: data.score,
          type: "quoted-" + prompt,
          profileIMG: user.dataValues.profileIMG,
          nameCOL: user.dataValues.nameCOl
        });
        
        }
        else {
          socket.emit("login failed");
        }  
      })
    })
    socket.on("completed", (data) => {
      User.findOne({
        where: {
          userName: data.user
        }
      }).then(user => {
        if (user === null) {
          socket.emit("login failed");
          //console.log("login failed " + data.user + " is not regestered");
        }
        else if (user.dataValues.password === data.pass) {
      if (data.prompt === 0) {
        prompt = false;
      }
      else {
        prompt = true;
      }
        typequizzingscores.create({
          ch: data.ch,
          userName: data.user,
          score: data.score,
          type: "completed-" + prompt,
          profileIMG: user.dataValues.profileIMG,
          nameCOL: user.dataValues.nameCOl
        });
        }
        else {
          socket.emit("login failed");
        }  
      })*/
  });
  socket.on("idle", user => {
    //console.log(user + " left")
    usertimouts[user] = setTimeout(function() {
      updateOne("users", user, {
        online: false
      });
    }, 2000 * 60 * 4.9);
  });
  socket.on("active", user => {
    //console.log(user + " came back")
    clearTimeout(usertimouts[user]);
  });
  /*socket.on('getleaderboard', function (fn) {
    typequizzingscores.findAll().then(scores => {
      console.log(scores); 
      fn(scores);
    })
  });*/
  socket.on("disconnect", function() {
    if (!onlineplayers[socket.id]) return;
    updateOne("users", onlineplayers[socket.id].userName, {
      online: false
    });
    /*
    User.update({
      online: false
    }, {
        where: {
          userName: onlineplayers[socket.id].user
        }
      });delete onlineplayers[socket.id];
    // Update clients with the new player killed 
    socket.broadcast.emit('leave', socket.id);
    if (!onlinepls) return;
    if (onlinepls[socket.id] !== undefined) {
      var l = onlinepls[socket.id].user;
      chat.unshift({
        col: "black",
        user: 'bot',
        message: l + ' is offline now',
        timesince: new Date().toISOString()
      });
    }
    delete onlinepls[socket.id];

    io.emit("message", chat);*/
  });
});
var rtsum = function(a) {
  var a2 = 0;
  for (var i in a) {
    a2 += a[i].ratingdt.rating;
  }
  return a2;
};
var Oquizzing = io.of("/Oquizzing").on("connection", function(socket) {
  //let pdata = playersDATA[socket.id];
  //console.log(pdata);
  let r;
  socket.emit("getusername");
  Oquizzing.emit("playtime", gamerooms);
  //console.log(gamerooms);
  setInterval(() => {
    //console.log(gamerooms.koalastrikermi2.playerdata);
    socket.emit("playtime", gamerooms);
  }, 5000);
  socket.on("userdata", function(data) {
    let pdata = playersDATA[socket.id];
    console.log(pdata);
    console.log("got username");
    let query = usersref
      .doc(data.user)
      .get()
      .then(user => {
        //console.log(user.data().userName)
        if (user.data().password === data.pass) {
          playersDATA[socket.id] = user.data();
          playersDATA[socket.id].rooms = { gameroom: {} };
          //console.log(playersDATA[socket.id])
        }
      });
  });
  socket.on("create match", function(data) {
    let t = questionsstarterlist.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    let pdata = playersDATA[socket.id];
    let m = new match(
      data.type,
      pdata.userName,
      pdata.userName,
      pdata.nameCOl,
      t,
      "team1",
      "team2",
      pdata,
      data.name
    );
    gamerooms[pdata.userName] = m;
    playersDATA[socket.id].rooms.gameroom.name = pdata.userName;
    playersDATA[socket.id].quizmaster = true;
    socket.join(pdata.userName, function() {
      r = Object.keys(socket.rooms);
      console.log(r);
    });
    p2p(socket, null, pdata.userName);
    socket.emit(
      "Omatch joined",
      {
        u: gamerooms[pdata.userName],
        id: socket.id
      },
      true
    );
  });
  socket.on("join match", function(key) {
    let pdata = playersDATA[socket.id];
    let player = new glicko.Player({
      defaultRating: 1000,
      rating: pdata.ratings.openOnline.rt,
      ratingDeviation: pdata.ratings.openOnline.rd,
      tau: 0.5,
      volatility: pdata.ratings.openOnline.rv
    });
    let ndata = {
      user: pdata.userName,
      state: pdata.state,
      ratingdt: player,
      pcol: pdata.nameCOl,
      score: 0,
      id: socket.id,
      titled: pdata.titled,
      tabr: pdata.tabr,
      jumped:false,
      active:true,
      correct:0
    };
    playersDATA[socket.id].rooms.gameroom.name = key;
    if (gamerooms[key].team1.playersnum <= gamerooms[key].team2.playersnum) {
      playersDATA[socket.id].rooms.gameroom.team = 1;
      gamerooms[key].team1.players[socket.id] = ndata;
      gamerooms[key].team1.playersnum += 1;
      if (gamerooms[key].team1.playersnum === 1) {
        gamerooms[key].team1.avg = pdata.ratings.openOnline.rt;
        gamerooms[key].scoresheet.team1.push({
          score: 0,
          errors: 0,
          c: "c",
          f: [false, false, false],
          name: pdata.userName,
          q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          col: pdata.nameCOl,
          titled: pdata.titled,
          tabr: pdata.tabr,
          jumped:false,
          active:true,
          correct:0
        });
      } else {
        gamerooms[key].team1.avg =
          rtsum(gamerooms[key].team1.players) / gamerooms[key].team1.playersnum;
        gamerooms[key].scoresheet.team1.push({
          score: 0,
          errors: 0,
          c: "",
          f: [false, false, false],
          name: pdata.userName,
          q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          col: pdata.nameCOl,
          titled: pdata.titled,
          tabr: pdata.tabr,
          jumped:false,
          active:true,
          correct:0
        });
      }
    } else {
      playersDATA[socket.id].rooms.gameroom.team = 2;
      gamerooms[key].team2.players[socket.id] = ndata;
      gamerooms[key].team2.playersnum += 1;
      if (gamerooms[key].team2.playersnum === 1) {
        gamerooms[key].team2.avg = pdata.ratings.openOnline.rt;
        gamerooms[key].scoresheet.team2.push({
          score: 0,
          errors: 0,
          c: "c",
          f: [false, false, false],
          name: pdata.userName,
          q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          col: pdata.nameCOl,
          titled: pdata.titled,
          tabr: pdata.tabr,
          jumped:false,
          active:true,
          correct:0
        });
      } else {
        gamerooms[key].team2.avg =
          rtsum(gamerooms[key].team2.players) / gamerooms[key].team2.playersnum;
        gamerooms[key].scoresheet.team2.push({
          score: 0,
          errors: 0,
          c: "",
          f: [false, false, false],
          name: pdata.userName,
          q: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          col: pdata.nameCOl,
          titled: pdata.titled,
          tabr: pdata.tabr,
          jumped:false,
          active:true,
          correct:0
        });
      }
    }
    gamerooms[key].playerNum++;
    gamerooms[key].ratingavg = Math.round(
      (rtsum(gamerooms[key].team1.players) +
        rtsum(gamerooms[key].team2.players)) /
        gamerooms[key].playerNum
    );

    Oquizzing.emit("playtime", gamerooms);
    socket.join(key, function() {
      r = Object.keys(socket.rooms);
      console.log(r);
      socket.emit("Omatch joined", { u: gamerooms[key], id: socket.id }, false);
    });
    p2p(socket, null, key);
    socket.to(key).emit("player joined", { u: gamerooms[key], id: socket.id });
  });
  socket.on("start match", function(data, n) {
    gamerooms[n].hidden = true;
    p2p(socket, null, n);
    socket.to(n).emit("match begun", data);
    socket.broadcast.emit("match state change");
  });
  socket.on("jumped", function(jt) {
    let gamedata = gamerooms[playersDATA[socket.id].rooms.gameroom.name];
    if (gamedata.jumped) {
      if (
        Date(
          gamerooms[playersDATA[socket.id].rooms.gameroom.name].jt
        ).getTime() > Date(jt.getTime())
      ) {
        gamerooms[playersDATA[socket.id].rooms.gameroom.name].jumped = true;
        gamerooms[playersDATA[socket.id].rooms.gameroom.name].jt = jt;
        gamerooms[playersDATA[socket.id].rooms.gameroom.name].jumper =
          playersDATA[socket.id];
        socket
          .to(playersDATA[socket.id].rooms.gameroom.name)
          .emit("someone jumped", gamerooms[playersDATA[socket.id]]);
      } else {
        socket.emit("sry to slow");
      }
    } else {
      gamerooms[playersDATA[socket.id].rooms.gameroom.name].jumped = true;
      gamerooms[playersDATA[socket.id].rooms.gameroom.name].jt = jt;
      gamerooms[playersDATA[socket.id].rooms.gameroom.name].jumper =
        playersDATA[socket.id];
      socket
        .to(playersDATA[socket.id].rooms.gameroom.name)
        .emit("someone jumped", gamerooms[playersDATA[socket.id]]);
    }
  });
  socket.on("correct",function(quizzer){
    
  })
  socket.on("incorrect",function(quizzer){
    
  })
  socket.on("timout",function(quizzer){
    
  })
  socket.on("challenge",function(quizzer){
    
  })
  socket.on("appeal",function(quizzer){
    
  })
  socket.on("foul",function(quizzer){
    
  })
  socket.on("end match", function(data) {});
  socket.on("disconnecting", function() {
    r = Object.keys(socket.rooms);
  });
  socket.on("disconnect", function() {
    let pdata = playersDATA[socket.id];
    socket.broadcast.emit("leave", socket.id);
    console.log(pdata);
    if (pdata !== undefined) {
      if (pdata.rooms !== undefined) {
        if (gamerooms[pdata.rooms.gameroom.name] !== undefined) {
          gamerooms[pdata.rooms.gameroom.name].playerNum -= 1;
          if (pdata.rooms.gameroom.team === 1) {
            gamerooms[pdata.rooms.gameroom.name].team1.playersnum -= 1;
            delete gamerooms[pdata.rooms.gameroom.name].team1.players[
              socket.id
            ];
          } else {
            gamerooms[pdata.rooms.gameroom.name].team2.playersnum -= 1;
            delete gamerooms[pdata.rooms.gameroom.name].team2.players[
              socket.id
            ];
          }
          gamerooms[pdata.rooms.gameroom.name].ratingavg = Math.round(
            (rtsum(gamerooms[pdata.rooms.gameroom.name].team1.players) +
              rtsum(gamerooms[pdata.rooms.gameroom.name].team2.players)) /
              gamerooms[pdata.rooms.gameroom.name].playerNum
          );
          if (
            gamerooms[pdata.rooms.gameroom.name].playerNum === 0 ||
            pdata.userName === pdata.rooms.gameroom.name
          ) {
            delete gamerooms[pdata.rooms.gameroom.name];
            socket.to(pdata.rooms.gameroom.name).emit("match end");
            socket.broadcast.emit("match state change");
          } else {
            socket
              .to(pdata.rooms.gameroom.name)
              .emit("update", gamerooms[pdata.rooms.gameroom.name]);
          }
        }
      }
      delete playersDATA[socket.id];
    }
  });
});
setInterval(() => {
  //tp.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
server.listen(3000, () => console.log("server started"));
