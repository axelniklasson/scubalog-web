var module = angular.module('scubalog.controllers');

module.controller('DiverDetailController', ['$scope', 'DiverService', '$stateParams', function($scope, DiverService, $stateParams) {
    DiverService.getDiverByID($stateParams.id).then(function(response) {
        $scope.diver = response.data;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not get diver data!', 3000);
            console.log(err);
        }
    });

    DiverService.getDiverStats($stateParams.id).then(function(response) {
        $scope.stats = response.data;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not get diver stats!', 3000);
            console.log(err);
        }
    });
}]);
