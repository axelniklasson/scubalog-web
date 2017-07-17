var module = angular.module('scubalog.controllers');

module.controller('LoginController', ['$scope', '$rootScope', '$facebook', '$state', 'FacebookService', 'LocalStorageService', 'AuthService',
function($scope, $rootScope, $facebook, $state, FacebookService, LocalStorageService, AuthService) {
    $scope.registrationData = {};
    $('.modal').modal();
    $('select').material_select();

    $scope.login = function() {
        $facebook.login().then(function(response) {
            FacebookService.cacheUserData().then(function(user) {
                AuthService.isRegistered(user.facebookID).then(function(response) {
                    if (response.data) {
                        LocalStorageService.set('user', response.data);
                        $rootScope.auth.user = response.data;
                        $rootScope.auth.user.picture = LocalStorageService.get('fbUser').picture;
                        $state.transitionTo('auth.dashboard');
                    } else {
                        $('#registrationModal').modal('open');
                    }
                }).then(function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }).then(function(err) {
                if (err) {
                    console.log(err);
                }
            });
            LocalStorageService.set('fbToken', response.authResponse.accessToken);
        });
    };

    $scope.cancelRegistration = function() {
        $('#registrationModal').modal('close');
    };

    $scope.register = function() {
        var diver = {
            name: $rootScope.auth.user.name,
            email: $rootScope.auth.user.email,
            facebookID: $rootScope.auth.user.facebookID,
            organisation: $scope.registrationData.organisation,
            certification: $scope.registrationData.certification
        };

        AuthService.registerDiver(diver).then(function(response) {
            LocalStorageService.set('user', response.data);
            $state.transitionTo('auth.dashboard');
        }).then(function(err) {
            if (err) {
                console.log(err);
            }
        });
    };
}]);
