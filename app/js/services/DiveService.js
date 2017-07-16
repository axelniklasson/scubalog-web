var module = angular.module('scubalog.services');

module.factory('DiveService', ['$http', function($http) {
    return {
        getDives: function() {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/dives',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        createDive: function(dive) {
            var req = {
                method: 'POST',
                url: $http.defaults.base_url + '/dives',
                data: dive,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        updateDive: function(dive) {
            var req = {
                method: 'PUT',
                url: $http.defaults.base_url + '/dives/' + dive._id,
                data: dive,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        deleteDive: function(ID) {
            var req = {
                method: 'DELETE',
                url: $http.defaults.base_url + '/dives/' + ID,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }
    };
}]);
