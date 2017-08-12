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
            $scope.gridOptions = {
                data: 'mongoData',
                // rowHeight: 'auto',
                // rowTemplate: '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>',

                enableRowSelection: true,
                selectionRowHeaderWidth: 35,
                headerTemplate: 'grid/header_template.html',
                // rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid"'+
                // 'ui-grid-one-bind-id-grid="rowRenderIndex + \'-\' + col.uid + \'-cell\'"'+
                // 'class="ui-grid-cell"'+
                // 'ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"'+
                // 'role="{{col.isRowHeader ? \'rowheader\' : \'gridcell\'}}" ui-grid-cell> </div>',
                rowTemplate: 'grid/row_template.html',
                columnDefs: [
                    { field:'ID', name:'ID', width:50 },
                    { field:'job_number', name:'job_num1ber', width:125 },
                    { field:'project_title', name:'proj1ect_title', width:125 },
                    { field:'project_lead', name:'project_lead', width:125 },
                    { field:'client', name:'client', width:150 },
                    { field:'region', name:'region', width:150 },
                    { field:'countries', name:'countries', width:150 },
                    { field:'therapy', name:'therapy', width:150 },
                    // { field: 'conditions', name: 'conditions', cellTemplate:'<div ng-repeat="item in row.entity[col.field]">{{item}}</div>', width:150 },
                    //    <div ng-style="{ 'cursor': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>
                    { field: 'conditions', name: 'conditions', cellTemplate:'<div class="ui-grid-cell-contents" ng-repeat="item in row.entity[col.field]">{{item}}</div>', width:150 },
                    { field:'immunology', name:'immunology', width:150 },
                    { field:'number_of_PCPs', name:'number_of_PCPs', width:175 },
                    { field:'number_of_nurses', name:'number_of_nurses', width:175 },
                    { field:'total_nurse_time', name:'total_nurse_time', width:150 },
                    { field:'lost_cancelled', name:'lost_cancelled', width:150 },
                    { field:'year', name:'year', width:50 },
                    { field:'number_of_patients', name:'number_of_patients', width:200 },
                    { field:'total_patient_time', name:'total_patient_time', width:175 },
                    { field:'business_issue', name:'business_issue', width:150 }
                ],
                enableColumnResizing: true,
                enableGridMenu: true,
                enableSelectAll: true,
                exporterCsvFilename: 'myFile.csv',
                exporterMenuPdf: false,
                exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                exporterFieldCallback: function ( grid, row, col, value ) {
                    if ( col.name === 'conditions' ) {
                        value = value.join(", ");

                    }
                    return value;
                },

                onRegisterApi: function(gridApi){
                    $scope.gridApi = gridApi;
                }
            };

            $scope.state = {};
            $scope.restoreState = function() {
                $scope.gridApi.saveState.restore( $scope, $scope.state );
            };

            
            
            
            
            
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