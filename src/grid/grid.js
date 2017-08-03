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
        'uiGridConstants',
        'uiGridGroupingConstants',
        'MongoDBService', function ($scope,__env,  $http, $timeout, $interval, uiGridConstants, uiGridGroupingConstants, MongoDBService) {

            console.log("start uuid service call");
            MongoDBService.connectToMongoDB(function(req,res) {
                // console.log("Received MongoDB data to the Angular UI")
                console.log(res);
                $scope.mongoData.push(res.data);




            });
            // console.log(response);
            console.log("end uuid service call");
            $scope.mongoData = [];
            $scope.gridOptions = {
                data: 'mongoData',
                columnDefs: [
                    { name:'ID', width:50 },
                    { name:'job_number', width:100 },
                    { name:'project_title', width:100 },
                    { name:'project_lead', width:100 },
                    { name:'client', width:100 },
                    { name:'region', width:100 },
                    { name:'countries', width:100 },
                    { name:'therapy', width:100 },
                    // { name:'conditions', width:100 },
                    { name:'immunology', width:100 },
                    { name:'number_of_PCPs', width:100 },
                    { name:'number_of_nurses', width:100 },
                    { name:'total_nurse_time', width:100 },
                    { name:'lost_cancelled', width:100 },
                    { name:'year', width:100 },
                    { name:'number_of_patients', width:100 },
                    { name:'total_patient_time', width:100 },
                    { name:'business_issue', width:100 }
                ]
            };
            $scope.refreshData = function(){
                $scope.myData = [];

                var start = new Date();
                var sec = $interval(function () {

                    $scope.connectToMongoDB = function(){
                        console.log("start uuid service call");
                        MongoDBService.connectToMongoDB(function(req,res) {
                            // console.log("Received MongoDB data to the Angular UI")
                            console.log(res);
                            // $scope.mongoData = res;
            
            
                            $scope.myData.push(res);
            
            
            
                        });
                        // console.log(response);
                        console.log("end uuid service call");
                    };
                }, 200, 10);


                var timeout = $timeout(function() {
                    $interval.cancel(sec);
                    $scope.left = '';
                }, 2000);

                $scope.$on('$destroy', function(){
                    $timeout.cancel(timeout);
                    $interval.cancel(sec);
                });
            };
            
            
            
            
            
            $scope.connectToMongoDB = function(){
                console.log("start uuid service call");
                MongoDBService.connectToMongoDB(function(req,res) {
                    // console.log("Received MongoDB data to the Angular UI")
                    console.log(res);
                    $scope.mongoData.push(res.data);




                });
                // console.log(response);
                console.log("end uuid service call");
            };
            
            // $scope.gridOptions.data = 'mongoData';


            console.log("CLIENT IS ON: " + __env.clientEnv);
}]);