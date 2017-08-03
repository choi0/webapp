/**
 * Created by dchoi1 on 8/2/17.
 */
angular.module('angularbasic') 
    .controller('GridCtrl', [   '$scope',
                                '__env',
                                'MongoDBService', function ($scope,__env, MongoDBService) {


        $scope.connectToMongoDB = function(){
            console.log("start uuid service call");
            MongoDBService.connectToMongoDB();
            console.log("end uuid service call");
        }    
        
        $scope.gridOptions = {};
        $scope.gridOptions.data = [{
            "Job_number": {},
            "Client": {}
        }
        ];
            console.log("CLIENT IS ON: " + __env.clientEnv);
}]);