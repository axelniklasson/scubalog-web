var module = angular.module('scubalog.controllers');

module.controller('LogbookController', ['$scope', 'DiveService', 'DiverService', 'LocalStorageService',
function($scope, DiveService, DiverService, LocalStorageService) {
    $('.modal').modal();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });

    $scope.loadingDives = true;
    DiveService.getDives().then(function(response) {
        $scope.dives = response.data;
        $scope.loadingDives = false;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not list dives!', 3000);
            $scope.loadingDives = false;
            console.log(err);
        }
    });

    $scope.loadingBuddies = true;
    DiverService.getBuddies().then(function(response) {
        $scope.buddies = response.data;
        $scope.loadingBuddies = false;
        setTimeout(function() {
            $('select').material_select();
        }, 0);
    }).then(function(err) {
        $scope.loadingBuddies = false;
        if (err) {
            Materialize.toast('Could not load buddies.', 3000);
        }
    });

    $scope.editDive = function(index) {
        $('#diveModal').modal('open');
        $scope.editingDive = true;
        $scope.currentDive = $scope.dives[index];
        $scope.currentDive.date = new Date($scope.currentDive.date);
        $scope.modalTitle = 'Edit dive';
        $scope.stashedBuddy = $scope.currentDive.buddy;

        if ($scope.currentDive.buddy && $scope.currentDive.buddy._id) {
            $scope.currentDive.buddy = $scope.currentDive.buddy._id;
        }

        setTimeout(function() {
            Materialize.updateTextFields();
            $('select').material_select();
        }, 0);
    };

    $scope.newDive = function() {
        $('#diveModal').modal('open');
        $scope.editingDive = false;
        $scope.currentDive = {
            count: $scope.dives.length + 1,
            date: new Date()
        };
        $scope.modalTitle = 'New dive';
    };

    $scope.saveDive = function() {
        if (!$scope.editingDive) {
            $scope.currentDive.diver = LocalStorageService.get('user')._id;
            DiveService.createDive($scope.currentDive).then(function(response) {
                Materialize.toast('Dive created!', 3000);
                $scope.dives.unshift(response.data);
                $scope.currentDive = {};
            }).then(function(err) {
                if (err) {
                    Materialize.toast('Something went wrong.', 3000);
                    console.log(err);
                }
            });
        } else {
            DiveService.updateDive($scope.currentDive).then(function(response) {
                angular.forEach($scope.dives, function(dive, index) {
                    if (dive._id == response.data._id) {
                        $scope.dives[index] = response.data;
                    }
                });

                $scope.currentDive = {};
                Materialize.toast('Dive updated!', 3000);
            }).then(function(err) {
                if (err) {
                    Materialize.toast('Something went wrong.', 3000);
                    console.log(err);
                }
            });
        }
    };

    $scope.closeDiveModal = function() {
        $('#diveModal').modal('close');
        $scope.currentDive.buddy = $scope.stashedBuddy;
    };

    $scope.showDeleteDiveModal = function() {
        $('#diveModal').modal('close');
        $('#deleteDiveModal').modal('open');
    };

    $scope.deleteDive = function() {
        DiveService.deleteDive($scope.currentDive._id).then(function(response) {
            angular.forEach($scope.dives, function(dive, index) {
                if (dive._id == $scope.currentDive._id) {
                    $scope.dives.splice(index, 1);
                    $scope.currentDive = {};
                }
            });
            Materialize.toast('Dive deleted!', 3000);
        }).then(function(err) {
            if (err) {
                Materialize.toast('Something went wrong.', 3000);
            }
        });
    };
}]);
