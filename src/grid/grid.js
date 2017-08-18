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
            $scope.displayedMongoData = []
            // $scope.displayedMongoData = [].concat($scope.mongoData);
            console.log("start uuid service call");
            MongoDBService.queryDocuments(function(req,res) {
                // console.log("Received MongoDB data to the Angular UI")
                for(var i=0; i < res.data.length; i++) {
                    // console.log(res);
                    var data = res.data[i];

                    //building the "conditions" string
                    var stringBuilder = [];
                    for (var j =0; data.conditions && j < data.conditions.length; j++) {
                        // console.log(data.conditions[j]);

                        // for (x in data.conditions[j]) {
                        //     console.log(j + ": data=" + x);
                            stringBuilder.push(data.conditions[j]);
                        // }
                    }
                    data.showConditions = false;
                    // stringBuilder.join('  0   ');
                    // console.log(stringBuilder);
                    stringBuilder.innerHTML = stringBuilder.join("</br>");
                    // console.log(stringBuilder);
                    data.conditions = stringBuilder;
                    // console.log("ARRAY VALUE FOR " + i);
                    // console.dir(data);
                    // console.dir(data);
                    // data.conditions = data.conditions.split(',').join("<br />")
                    // console.dir(data);
                    // data._id = undefined;
                    $scope.mongoData.push(data);
                    $scope.displayedMongoData = [].concat($scope.mongoData);
                    // $scope.mongoData.push(res.data[i]);
                }
            });


            console.log("ami??");

            // $scope.clickMe = function() {
            //     $scope.displayedMongoData = $scope.mongoData;
            // }
            $scope.clickMe = function() {
                $scope.mongoData.push(
                    {
                        "ID": "2",
                        "job_number": "2",
                        "project_title": "project_title2",
                        "project_lead": "project_lead2",
                        "client": "client2",
                        "region": "2",
                        "countries": "countries2",
                        "therapy": "therapy2",
                        "conditions": ["cond3","cond4"],
                        "immunology": "3",
                        "number_of_PCPs": "2",
                        "number_of_nurses": "2",
                        "total_nurse_time": "2h",
                        "lost_cancelled": "lost/cancelled2",
                        "year": "2222",
                        "number_of_patients": "3",
                        "total_patient_time": "2",
                        "business_issue": "business_issue2"
                    })
            }

            $scope.conditionsClicked = function(index) {
                console.log(index + " project " + $scope.mongoData[index].project_title);
                $scope.mongoData[index].showConditions = !$scope.mongoData[index].showConditions;

            }
            // console.log(response);
            // console.log("end uuid service call");
            // $scope.gridOptions = {
            //     data: 'mongoData',
            //     // rowHeight: 'auto',
            //     // rowTemplate: '<div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>',
            //
            //     enableRowSelection: true,
            //     selectionRowHeaderWidth: 35,
            //     headerTemplate: 'grid/header_template.html',
            //     // rowTemplate: '<div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.uid"'+
            //     // 'ui-grid-one-bind-id-grid="rowRenderIndex + \'-\' + col.uid + \'-cell\'"'+
            //     // 'class="ui-grid-cell"'+
            //     // 'ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"'+
            //     // 'role="{{col.isRowHeader ? \'rowheader\' : \'gridcell\'}}" ui-grid-cell> </div>',
            //     rowTemplate: 'grid/row_template.html',
            //     columnDefs: [
            //         { field:'ID', name:'ID', width:50 },
            //         { field:'job_number', name:'job_num1ber', width:125 },
            //         { field:'project_title', name:'proj1ect_title', width:125 },
            //         { field:'project_lead', name:'project_lead', width:125 },
            //         { field:'client', name:'client', width:150 },
            //         { field:'region', name:'region', width:150 },
            //         { field:'countries', name:'countries', width:150 },
            //         { field:'therapy', name:'therapy', width:150 },
            //         // { field: 'conditions', name: 'conditions', cellTemplate:'<div ng-repeat="item in row.entity[col.field]">{{item}}</div>', width:150 },
            //         //    <div ng-style="{ 'cursor': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div>
            //         { field: 'conditions', name: 'conditions', cellTemplate:'<div class="ui-grid-cell-contents" ng-repeat="item in row.entity[col.field]">{{item}}</div>', width:150 },
            //         { field:'immunology', name:'immunology', width:150 },
            //         { field:'number_of_PCPs', name:'number_of_PCPs', width:175 },
            //         { field:'number_of_nurses', name:'number_of_nurses', width:175 },
            //         { field:'total_nurse_time', name:'total_nurse_time', width:150 },
            //         { field:'lost_cancelled', name:'lost_cancelled', width:150 },
            //         { field:'year', name:'year', width:50 },
            //         { field:'number_of_patients', name:'number_of_patients', width:200 },
            //         { field:'total_patient_time', name:'total_patient_time', width:175 },
            //         { field:'business_issue', name:'business_issue', width:150 }
            //     ],
            //     enableColumnResizing: true,
            //     enableGridMenu: true,
            //     enableSelectAll: true,
            //     exporterCsvFilename: 'myFile.csv',
            //     exporterMenuPdf: false,
            //     exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
            //     exporterFieldCallback: function ( grid, row, col, value ) {
            //         if ( col.name === 'conditions' ) {
            //             value = value.join(", ");
            //
            //         }
            //         return value;
            //     },
            //
            //     onRegisterApi: function(gridApi){
            //         $scope.gridApi = gridApi;
            //     }
            // };
            //
            // $scope.state = {};
            // $scope.restoreState = function() {
            //     $scope.gridApi.saveState.restore( $scope, $scope.state );
            // };

            
            
            
            
            
            $scope.queryDocuments = function(){
                console.log("start uuid service call");

                MongoDBService.queryDocuments(function(req,res) {
                    // console.log("Received MongoDB data to the Angular UI")
                    for(var i=0; i < res.data.length; i++) {
                        var data = res.data[i];

                        //building the "conditions" string
                        var stringBuilder = [];
                        for (var j =0; data.conditions && j < data.conditions.length; j++) {
                            stringBuilder.push(data.conditions[j]);
                        }
                        stringBuilder.innerHTML = stringBuilder.join("</br>");
                        data.conditions = stringBuilder;
                        $scope.mongoData.push(data);
                    }
                });
                // console.log(response);
                console.log("end uuid service call");
            };
            
            // $scope.gridOptions.data = 'mongoData';
            console.log("CLIENT IS ON: " + __env.clientEnv);

            $scope.downloadCSV = function () {
                console.log( $scope.filteredCollection)
                console.log( $scope.filteredCollection[0])
                var csv = [];

                //push headers
                // if($scope.filteredCollection[0]) {
                //     var objKeys = [];
                //     var currObjKey;
                //     for (currObjKey in $scope.filteredCollection[0]) {
                //         if ($scope.filteredCollection[0].hasOwnProperty(currObjKey)) {
                //             // if (currObjKey != "_id" && currObjKey != "showConditions") {
                //                 objKeys.push(currObjKey);
                //             // }
                //         }
                //     }
                //     csv.push(objKeys);
                // }
                var headers = {id: "id", Job_Number: "Job Number", Project_Title: "Project Title", Project_Lead: "Project Lead", Client: "Client", Region: "Region", Countries: "Countries", Therapy: "Therapy", Conditions: "Conditions", Immunology: "Immunology", Number_Of_PCPs: "Number Of PCPs", Number_Of_Nurses: "Number Of Nurses", Total_Nurse_Time: "Total Nurse Time", Lost_Cancelled: "Lost/Cancelled", Year: "Year", Number_Of_Patients: "Number Of Patients", Total_Patient_Time: "Total Patient Time", Business_Issue: "Business Issue"};
                console.log(headers)
                csv.push(headers);
                //push data
                for (var i = 0; i < $scope.filteredCollection.length; i++) {
                    row = $scope.filteredCollection[i];
                    console.log("row: "+row);
                    delete row._id;
                    delete row.showConditions;
                    row.conditions = row.conditions.join(", ");
                    csv.push(row);
                }
                return csv;
            }

}]).directive('stFilteredCollection', function () {
    return {
        restrict: 'A',
        require: '^stTable',
        scope: {
            stFilteredCollection: '='
        },
        controller: 'stTableController',
        link: function (scope, element, attr, ctrl) {

            scope.$watch(function () {
                return ctrl.getFilteredCollection();
            }, function (newValue, oldValue) {
                scope.stFilteredCollection = ctrl.getFilteredCollection();
            });
        }
    };
});