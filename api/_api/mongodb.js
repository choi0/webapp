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
var user = encodeURIComponent(config.db_user);
var password = encodeURIComponent(config.db_pass);
var authMechanism = 'SCRAM-SHA-1&authSource=admin';
var url = f('mongodb://%s:%s@' + config.db_url + '?authMechanism=%s', user, password, authMechanism);
// var url = 'mongodb://localhost:27017';
console.log(url);
module.exports = {
    queryDocuments: function (body, callback) {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("projects").find({}).toArray(function(err,result) {
                if (err) throw err;
                // console.log(result);
                db.close;
                callback(null, result);
            })
        })
    },
    uploadDocument: function (body, callback) {
        console.log("ANSDOFOAJSDFJ: "+body);
        console.dir(body);
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            db.collection("projects").insertOne(body, function (err, result) {
                if (err) throw err;
                // console.log(result);
                db.close;
                callback(null, result);
                
            })
        })
    },

    getExample: function (body, callback) {
        console.log("API getExample started " +body);
        callback(null, "API getExample finished");
    }
}