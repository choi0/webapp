/**
 * Created by dchoi1 on 8/3/17.
 */
angular.module('angularbasic')
    .factory('MongoDBService', ['$http', function ($http) {
        var service = {};

        var data = {
            data: 'examp22le'
        }
        var headers = {
            'Content-Type': 'application/json'
        }
        service.queryDocuments = function(callback){
            console.log("ExampleService call start");
            $http.post('/api/mongodb/queryDocuments', data, headers).then(function (response) {
                // console.log("****");
                // console.log(response);
                callback(null, response);
                // console.log("****");
            }, function(error) {
                console.log(error);
            });
        }

        service.uploadDocument = function(document, callback){
            console.log("ExampleService call start");
            $http.post('/api/mongodb/uploadDocument', document, headers).then(function (response) {
                // console.log("****");
                // console.log(response);
                callback(null, response);
                // console.log("****");
            }, function(error) {
                console.log(error);
            });
        }

        return service;
    }]);