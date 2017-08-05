/**
 * Created by dchoi1 on 8/1/17.
 */
var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var routes = require('./routes/routes');
var bodyParser = require('body-parser');
var server_config = require('./config/server_env.js');
var server = http.createServer(app);
var env = process.env.ZONE || 'LOCAL';

app.use(express.static(path.join(__dirname, '/src')));
//getting headers for uuid
server.on('request', function(request, response) {
    // console.log(request.headers);
    // console.dir(request);
    //console.log("LOGGED UUID2:" + request.headers.optumuuid + request.headers.userID);
});

console.log("we are here " + server_config);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', routes);
// app.use('/', express.static('/'));
app.use(express.static(path.join(__dirname, 'src')));
// app.use('/src', express.static(path.join(__dirname, '/src')));
switch(env) {
    case 'PROD': app.use('/client_env', express.static(path.join(__dirname, 'config/client_prod_env.js')));
    default: app.use('/client_env', express.static(path.join(__dirname, 'config/client_local_env.js')));
}
// app.use('/client_env', express.static(path.join(__dirname, 'config/client_prod_env.js')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/angular-ui-bootstrap/dist'));
app.use('/fonts', express.static(__dirname + '/fonts'));
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
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