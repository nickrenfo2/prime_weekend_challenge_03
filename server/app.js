var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var students = require('./public/assets/data/students.json');
var shoutouts = require('./public/assets/data/shoutouts.json');


app.use(express.static(path.join(__dirname,'./public')));
//app.use(express.static(path.join(__dirname,'./public')));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'./public/views/index.html'))
});

app.get('/students',function(req,res) {
    console.log('/students called');
    res.send(JSON.stringify(students));
});

app.get('/shoutouts',function(req,res) {
    res.send(JSON.stringify(shoutouts));
});

var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port: ', server.address().port);
});


app.use(bodyParser.json());
module.exports = app;