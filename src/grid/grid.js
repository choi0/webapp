/**
 * Created by dchoi1 on 8/2/17.
 */
angular.module('angularbasic') 
    .controller('GridCtrl', ['$scope', '__env', function ($scope,__env) {
        
    $scope.gridOptions = {};
    $scope.gridOptions.data = [{
        "Job_number": {},
        "Client": {}
    }
    ];
        console.log("CLIENT IS ON: " + __env.clientEnv);
}]);