/**
 * Created by dchoi1 on 8/3/17.
 */
var http = require('http'),
    MongoClient = require('mongodb')
    f = require('util').format
var config = require('../../config/server_env.js')
    // config = require('/server_env.js')

// var routes = require('./routes/routes');

console.log("AHHHH" + config + "end");
console.dir(config);
var user = encodeURIComponent('admin');
var password = encodeURIComponent('sdLdn104xFk7HFQQ');
var authMechanism = 'SCRAM-SHA-1&authSource=admin';
var url = f('mongodb://%s:%s@' + config.db_url + '?authMechanism=%s', user, password, authMechanism);
// var url = 'mongodb://localhost:27017';
console.log(url);
module.exports = {
    connectToMongoDB: function () {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("projects").findOne({}, function(err,result) {
                if (err) throw err;
                console.log(result);
                db.close;
            })
        })
    },

    getExample: function (body, callback) {
        console.log("API getExample started " +body);
        callback(null, "API getExample finished");
    }
}