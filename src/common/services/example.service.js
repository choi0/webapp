/**
 * Created by dchoi1 on 8/1/17.
 */
angular.module('angularbasic')
    .factory('ExampleService', ['$http', function ($http) {
        var service = {};

        var data = {
            data: 'examp22le'
        }
        var headers = {
            'Content-Type': 'application/json'
        }
        service.getExample = function(){
            console.log("ExampleService call start");
            return $http.post('/api/example/getExample', data, headers).then(function (response) {
                console.log(response)
            }, function(error) {
                console.log(error)
            });
        }

        return service;
    }]);