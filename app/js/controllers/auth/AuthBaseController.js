var module = angular.module('scubalog.controllers');

module.controller('AuthBaseController', ['$scope', '$facebook', '$state', 'LocalStorageService', '$rootScope',
function($scope, $facebook, $state, LocalStorageService, $rootScope) {
    $('.dropdown-button').dropdown();
    $('.button-collapse').sideNav({
        closeOnClick: true,
        draggable: true
    });

    $scope.logout = function() {
        $facebook.logout().then(function(response) {
            LocalStorageService.clear('fbUser');
            LocalStorageService.clear('fbToken');
            $rootScope.auth.authenticated = false;
            $state.transitionTo('base.login');
        });
    };
}]);
