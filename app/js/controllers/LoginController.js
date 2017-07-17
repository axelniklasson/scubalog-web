var module = angular.module('scubalog.controllers');

module.controller('LoginController', ['$scope', '$facebook', '$state', 'FacebookService', 'LocalStorageService',
function($scope, $facebook, $state, FacebookService, LocalStorageService) {
    $scope.login = function() {
        $facebook.login().then(function(response) {
            FacebookService.cacheUserData();
            LocalStorageService.set('fbToken', response.authResponse.accessToken);
            $state.transitionTo('auth.dashboard');
        });
    };
}]);
