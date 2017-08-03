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
        service.connectToMongoDB = function(){
            console.log("ExampleService call start");
            return $http.post('/api/mongodb/connectToMongoDB', data, headers).then(function (response) {
                console.log(response)
            }, function(error) {
                console.log(error)
            });
        }

        return service;
    }]);