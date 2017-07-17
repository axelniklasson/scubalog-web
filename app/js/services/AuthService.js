var module = angular.module('scubalog.services');

module.factory('AuthService', ['$http', '$rootScope', '$facebook', 'LocalStorageService',
function($http, $rootScope, $facebook, LocalStorageService) {
    return {
        isAuthenticated: function() {
            $facebook.getLoginStatus().then(function(response) {
                return response.status === 'connected';
            });
        },
        isRegistered: function(facebookID) {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/divers/exists?facebookID=' + facebookID,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        registerDiver: function(user) {
            var req = {
                method: 'POST',
                url: $http.defaults.base_url + '/divers',
                data: user,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }
    };
}]);
