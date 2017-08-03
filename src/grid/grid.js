/**
 * Created by dchoi1 on 8/2/17.
 */
angular.module('angularbasic') 
    .controller('GridCtrl', ['$scope', function ($scope) {
        
    $scope.gridOptions = {};
    $scope.gridOptions.data = [{
        "Job_number": {},
        "Client": {}
    }
    ];
}]);