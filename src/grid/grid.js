/**
 * Created by dchoi1 on 8/2/17.
 */
angular.module('angularbasic') 
    .controller('GridCtrl', [
        '$scope',
        '__env',
        'MongoDBService', function ($scope,__env, MongoDBService) {


            $scope.connectToMongoDB = function(){
                console.log("start uuid service call");
                MongoDBService.connectToMongoDB(function(req,res) {
                    // console.log("Received MongoDB data to the Angular UI")
                    console.log(res);
                    $scope.mongoData = res;




                });
                // console.log(response);
                console.log("end uuid service call");
            };


            $scope.gridOptions = {};
            // $scope.gridOptions.columnDef = [
            //     { field: 'U'}
            // ]
            $scope.gridOptions.data = 'mongoData';


            console.log("CLIENT IS ON: " + __env.clientEnv);
}]);