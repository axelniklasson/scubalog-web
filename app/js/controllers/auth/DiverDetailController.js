var module = angular.module('scubalog.controllers');

module.controller('DiverDetailController', ['$scope', 'DiverService', 'DiveService', '$stateParams', function($scope, DiverService, DiveService, $stateParams) {
    DiverService.getDiverByID($stateParams.id).then(function(response) {
        $scope.diver = response.data;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not get diver data!', 3000);
            console.log(err);
        }
    });

    $scope.loadingStats = true;
    DiverService.getDiverStats($stateParams.id).then(function(response) {
        $scope.stats = response.data;
        $scope.loadingStats = false;
    }).then(function(err) {
        $scope.loadingStats = false;
        if (err) {
            Materialize.toast('Could not get diver stats!', 3000);
            console.log(err);
        }
    });

    $scope.loadingLatestDives = true;
    DiveService.getLatestDives($stateParams.id).then(function(response) {
        $scope.latestDives = response.data;
        $scope.loadingLatestDives = false;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not get latest dives!', 3000);
            console.log(err);
        }
        $scope.loadingLatestDives = false;
    });
}]);
