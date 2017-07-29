var module = angular.module('scubalog.services');

module.factory('DiveService', ['$http', 'LocalStorageService', function($http, LocalStorageService) {
    return {
        getDives: function() {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/dives?diverID=' + LocalStorageService.get('user')._id,
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
        },
        getLatestDives: function(diverID) {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/dives?diverID=' + diverID + '&take=5',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }
    };
}]);
