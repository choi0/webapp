/**
 * Created by dchoi1 on 8/1/17.
 */
var API = require('../../api/api');

module.exports = function (router) {
    var data = {
        data: "example"
    }
    router.post('/api/example/getExample', function (request, response) {
        console.log("TESTING DATA");
        console.dir(request.body);
        API.example.getExample(request.body, function (req, res) {
            console.log("router response:")
            response.json(res);
        });
    });

}