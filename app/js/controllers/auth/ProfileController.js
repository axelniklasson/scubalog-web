var module = angular.module('scubalog.controllers');

module.controller('ProfileController', ['$scope', 'DashboardService', function($scope, DashboardService) {
    $scope.loadingStats = true;
    DashboardService.getStats().then(function(response) {
        $scope.stats = response.data;
        console.log($scope.stats);
        $scope.loadingStats = false;
    }).then(function(err) {
        if (err) {
            $scope.loadingStats = false;
            console.log(err);
        }
    });
}]);
