angular.module('angularbasic')
    .controller('GridModalCtrl',function ($uibModal, $log, $document) {
    var $ctrl = this;
    $ctrl.items = ['item1', 'item2', 'item3'];

    $ctrl.animationsEnabled = true;

    $ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.grid-modal-button ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/gridModal/gridModal.html',
            controller: 'GridModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            windowClass: 'my-grid-modal',
            backdrop: 'static',
            // keyboard: false,
            appendTo: parentElem,
            resolve: {
                items: function () {
                    return $ctrl.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
    };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('angularbasic').controller('GridModalInstanceCtrl',  function ($uibModalInstance, $scope, items, MongoDBService) {
    var $ctrl = this;
        $ctrl.items = ['item1', 'item2', 'item3'];
    $ctrl.selected = {
        item: $ctrl.items[0]
    };
    $scope.poop = "testpoop";

    //autocomplete values
    // $scope.businessIssues = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


    // $ctrl.conditions  = [{hi: 'aosjdfo'}];
    $scope.inputConditions  = [{condition: ''}];

    $scope.addCondition = function () {
        $scope.inputConditions.push({condition: ''});
    }
    $scope.removeCondition = function (index) {
        $scope.inputConditions.splice(index,1);
    }

    $ctrl.submit = function () {
        uploadDocument();
        // $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.testResponse = "blaaank";

    var errorMessages = [];
    var emptyFieldCheck = function () {
        errorMessages = [];
        console.log("ASDIFHAISDHF:"+$scope.inputID+":asf");
        if (!$scope.inputID) { errorMessages.push("Missing 'id' field");};
        if (!$scope.inputJobNumber) { errorMessages.push("Missing 'Job Number' field"); };
        if (!$scope.inputProjectTitle) { errorMessages.push("Missing 'Project Title' field"); };
        if (!$scope.inputProjectLead) { errorMessages.push("Missing 'Project Lead' field"); };
        if (!$scope.inputClient) { errorMessages.push("Missing 'Client' field"); };
        if (!$scope.inputRegion) { errorMessages.push("Missing 'Region' field"); };
        if (!$scope.inputCountries) { errorMessages.push("Missing 'Countries' field"); };
        if (!$scope.inputTherapy) { errorMessages.push("Missing 'Therapy' field"); };
        //Check each item in the array to see if it is empty;
        for(var i = 0; i < $scope.inputConditions.length; i++) {
            //break out of loop as soon as we find a string in an item
            if($scope.inputConditions[i].condition) {
                i = $scope.inputConditions.length;
            }
            //if the last item in the array is empty the whole thing is empty
            console.log(i + "len" + $scope.inputConditions.length);
            if( i = $scope.inputConditions.length - 1 ) {
                if (!$scope.inputConditions[i].condition) {
                    errorMessages.push("Missing 'Conditions' field");
                };
            }

        }
        // if (!$scope.inputConditions) { errorMessages.push("Missing 'Conditions' field"); };
        if (!$scope.inputImmunology) { errorMessages.push("Missing 'Immunology' field"); };
        if (!$scope.inputNumberOfPCPs) { errorMessages.push("Missing 'Number Of PCPs' field"); };
        if (!$scope.inputNumberOfNurses) { errorMessages.push("Missing 'Number Of Nurses' field"); };
        if (!$scope.inputTotalNurseTime) { errorMessages.push("Missing 'Total Nurse Time' field"); };
        if (!$scope.inputLostCancelled) { errorMessages.push("Missing 'Lost Cancelled' field"); };
        if (!$scope.inputYear) { errorMessages.push("Missing 'Year' field"); };
        if (!$scope.inputNumberOfPatients) { errorMessages.push("Missing 'Number Of Patients' field"); };
        if (!$scope.inputTotalPatientTime) { errorMessages.push("Missing 'Total Patient Time' field"); };
        if (!$scope.inputBusinessIssue) { errorMessages.push("Missing 'Business Issue' field"); };
    };

    var conditionsArray = [];
    var conditionsArrayBuilder = function () {
        conditionsArray = [];
        for(var i = 0; i < $scope.inputConditions.length; i++) {
            if($scope.inputConditions[i].condition) {
                conditionsArray.push($scope.inputConditions[i].condition);
            }
        }
        conditionsArray.sort(function (a,b) {
            var nameA=a.toLowerCase(), nameB=b.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        });
    };

    var uploadDocument = function () {
        var inputID = $scope.inputID || "";
        var inputJobNumber = $scope.inputJobNumber || "";
        var inputProjectTitle = $scope.inputProjectTitle || "";
        var inputProjectLead = $scope.inputProjectLead || "";
        var inputClient = $scope.inputClient || "";
        var inputRegion = $scope.inputRegion || "";
        var inputCountries = $scope.inputCountries || "";
        var inputTherapy = $scope.inputTherapy || "";
        //build inputConditions string
        conditionsArrayBuilder();
        var inputConditions = conditionsArray;
        // var inputConditions = $scope.inputConditions || "";
        var inputImmunology = $scope.inputImmunology || "";
        var inputNumberOfPCPs = $scope.inputNumberOfPCPs || "";
        var inputNumberOfNurses = $scope.inputNumberOfNurses || "";
        var inputTotalNurseTime = $scope.inputTotalNurseTime || "";
        var inputLostCancelled = $scope.inputLostCancelled || "";
        var inputYear = $scope.inputYear || "";
        var inputNumberOfPatients = $scope.inputNumberOfPatients || "";
        var inputTotalPatientTime = $scope.inputTotalPatientTime || "";
        var inputBusinessIssue = $scope.inputBusinessIssue || "";
        emptyFieldCheck();
        // $scope.testResponse = inputID + inputJobNumber + inputProjectTitle + inputProjectLead + inputClient + inputRegion + inputCountries + inputTherapy + inputConditions + inputImmunology + inputNumberOfPCPs + inputNumberOfNurses + inputTotalNurseTime + inputLostCancelled + inputYear + inputNumberOfPatients + inputTotalPatientTime + inputBusinessIssue;
        $scope.testResponse = inputConditions;


        // if (errorMessages.length > 0) {
        //     $scope.testResponse = errorMessages;
        // };
        var documentJSON = {
            "ID" : inputID,
            "job_number" : inputJobNumber,
            "project_title" : inputProjectTitle,
            "project_lead" : inputProjectLead,
            "client" : inputClient,
            "region" : inputRegion,
            "countries" : inputCountries,
            "therapy" : inputTherapy,
            "conditions" : inputConditions,
            "immunology" : inputImmunology,
            "number_of_PCPs" : inputNumberOfPCPs,
            "number_of_nurses" : inputNumberOfNurses,
            "total_nurse_time" : inputTotalNurseTime,
            "lost_cancelled" : inputLostCancelled,
            "year" : inputYear,
            "number_of_patients" : inputNumberOfPatients,
            "total_patient_time" : inputTotalPatientTime,
            "business_issue" : inputBusinessIssue
        }
        console.log("start mongoupload service call");
        MongoDBService.uploadDocument(documentJSON, function(req,res) {
            console.log("DONEEEEE");
            // +res);
            // console.dir(res);
        });
        // console.log(response);
        console.log("end mongoupload service call");


        //autocomplete values
        // $scope.businessIssues = ['Communications evaluation','Post-Lauch','Market Understanding','Brand Opportunity','Concept Testing','Message testing']

        //autocomplete values
        // $scope.businessIssues = ['Communications evaluation','Post-Lauch','Market Understanding','Brand Opportunity','Concept Testing','Message testing']
//autocomplete values




    }

    // autocomplete values
    $scope.businessIssues = ['Communications evaluation','Post-Lauch','Market Understanding','Brand Opportunity','Concept Testing','Message testing']



});

