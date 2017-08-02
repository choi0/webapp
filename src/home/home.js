/**
 * Created by dchoi1 on 8/1/17.
 */
angular.module('angularbasic')
    .controller('HomeCtrl',
        ['$scope', '$http', '$location', 'ExampleService',
            function($scope, $http, $location, ExampleService){

        // ['$scope', '$http', '$location', 'ExampleService',
        //     function($scope, $http, $location, ExampleService){


                // $scope.text = "Default";
                $scope.text = $scope.myInput;
                $scope.downloadReadyMessage = "No Download Waiting";
                $scope.targetFile = "";
                $scope.downloadAlert = "";

                $scope.getExample = function(){
                    console.log("start uuid service call");
                    ExampleService.getExample();
                    console.log("end uuid service call");
                }

            }]);