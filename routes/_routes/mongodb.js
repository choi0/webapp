/**
 * Created by dchoi1 on 8/3/17.
 */
var API = require('../../api/api');

module.exports = function (router) {
    // var data = {
    //     data: "example"
    // }
    router.post('/api/mongodb/queryDocuments', function (request, response) {
        API.mongodb.queryDocuments(request.body, function (req, res) {
            // console.log("router response:")
            response.send(res);
        });
    });
    router.post('/api/mongodb/uploadDocument', function (request, response) {
        API.mongodb.uploadDocument(request.body, function (req, res) {
            // console.log("router response:")
            response.send(res);
        });
    });

}