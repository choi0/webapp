/**
 * Created by dchoi1 on 8/3/17.
 */
var API = require('../../api/api');

module.exports = function (router) {
    var data = {
        data: "example"
    }
    router.post('/api/mongodb/connectToMongoDB', function (request, response) {
        API.mongodb.connectToMongoDB(request.body, function (req, res) {
            console.log("router response:")
            response.json(res);
        });
    });

}