var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

// view engine setup
app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendfile('./app/index.html');
});

app.get('/version', function(req, res) {

    setTimeout(function() {
        res.send({version: '0.0.1'});
    }, 5000)
});

server.listen(3000);