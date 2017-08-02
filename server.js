/**
 * Created by dchoi1 on 8/1/17.
 */
var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var server = http.createServer(app);


app.use(express.static(path.join(__dirname, '/src')));
//getting headers for uuid
server.on('request', function(request, response) {
    // console.log(request.headers);
    // console.dir(request);
    //console.log("LOGGED UUID2:" + request.headers.optumuuid + request.headers.userID);
});


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', routes);
// app.use('/', express.static('/'));
app.use(express.static(path.join(__dirname, 'src')));
// app.use('/src', express.static(path.join(__dirname, '/src')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/api', express.static(path.join(__dirname, 'api')));
// app.use('/api/ecg/downloadStream', express.static(path.join(__dirname, 'api/ecg.js')));
app.get('/', function (req, res) {
    res.sendFile(path.resolve('./src/index.html'));
});
app.get('*', function(req, res) {
    res.sendFile(path.resolve('./src/index.html'));
});





server.listen(8080, '0.0.0.0', 511, function () {
});
console.log("Running on port 8080");