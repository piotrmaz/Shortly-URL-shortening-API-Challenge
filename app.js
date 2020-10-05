const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fetch = require('node-fetch');

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("shortening", {
    oldUrl: oldUrl,
    newUrl: newUrl
  });
});

let oldUrl = [];
let newUrl = [];
app.post("/", function(req, res) {
  let incoming = req.body.oldUrl;
  fetch("https://rel.ink/api/links/", {
      method: 'POST',
      body: JSON.stringify({
        url: incoming
      }),
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(json => {
      let newUrlLink = "https://rel.ink/" + json.hashid;
      let oldUrlLink = json.url;
      //console.log("nowy url = " + json.url);
      oldUrl.push(oldUrlLink);
      newUrl.push(newUrlLink);
      res.redirect("/");
    });
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
