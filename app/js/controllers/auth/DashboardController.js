var module = angular.module('scubalog.controllers');

module.controller('DashboardController', ['$scope', 'DashboardService', function($scope, DashboardService) {
    DashboardService.getStats().then(function(response) {
        $scope.stats = response.data;
    }).then(function(err) {
        if (err) {
            console.log(err);
        }
    });
}]);
