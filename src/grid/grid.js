/**
 * Created by dchoi1 on 8/2/17.
 */
angular.module('angularbasic') 
    .controller('GridCtrl', [
        '$scope',
        '__env',
        '$http',
        '$timeout',
        '$interval',
        'MongoDBService', function ($scope,__env,  $http, $timeout, $interval, MongoDBService) {

            $scope.mongoData = [];
            console.log("start uuid service call");
            MongoDBService.queryDocuments(function(req,res) {
                // console.log("Received MongoDB data to the Angular UI")
                for(var i=0; i < res.data.length; i++) {
                    console.log(res);
                    var data = res.data[i];

                    //building the "conditions" string
                    var stringBuilder = [];
                    for (var j =0; data.conditions && j < data.conditions.length; j++) {
                        console.log(data.conditions[j]);

                        // for (x in data.conditions[j]) {
                        //     console.log(j + ": data=" + x);
                            stringBuilder.push(data.conditions[j]);
                        // }
                    }
                    // stringBuilder.join('  0   ');
                    console.log(stringBuilder);
                    stringBuilder.innerHTML = stringBuilder.join("</br>");
                    console.log(stringBuilder);
                    data.conditions = stringBuilder;
                    console.log("ARRAY VALUE FOR " + i);
                    console.dir(data);
                    // console.dir(data);
                    // data.conditions = data.conditions.split(',').join("<br />")
                    // console.dir(data);
                    $scope.mongoData.push(data);
                    // $scope.mongoData.push(res.data[i]);
                }
            });
            // console.log(response);
            console.log("end uuid service call");
            
            
            
            
            
            $scope.queryDocuments = function(){
                console.log("start uuid service call");
                MongoDBService.queryDocuments(function(req,res) {
                    // console.log("Received MongoDB data to the Angular UI")
                    console.log(res);
                    var data = res.data;
                    console.dir(data);
                    data.conditions = "poop";
                    console.dir(data);
                    $scope.mongoData.push(data);




                });
                // console.log(response);
                console.log("end uuid service call");
            };
            
            // $scope.gridOptions.data = 'mongoData';


            console.log("CLIENT IS ON: " + __env.clientEnv);
}]);