const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 6999;

// LOCAL DEV
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9k13cv2",
  database: "amazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Server is connected on mysql");
});

app.get('/articles', function (req, res) {
  connection.query("SELECT * FROM articles", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

app.listen(port, function () {
  console.log('Server is up');
})

// localhost:6999/