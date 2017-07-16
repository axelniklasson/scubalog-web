var module = angular.module('scubalog.services');

module.factory('AuthService', function($http, $rootScope, $facebook, LocalStorageService) {
    return {
        isAuthenticated: function() {
            $facebook.getLoginStatus().then(function(response) {
                return response.status === 'connected';
            });
        }
    };
});
