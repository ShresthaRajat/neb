const express = require("express");
var os = require("os");
var pjson = require('./package.json');


var hostname = os.hostname();
const app = express();
const port = 3000;

console.log(hostname);
app.get("/", (req, res) => {
  res.send(`Hello World! ver ${pjson.version} hosted in: ${hostname}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
