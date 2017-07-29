var module = angular.module('scubalog.services');

module.factory('DiverService', ['$http', 'LocalStorageService', function($http, LocalStorageService) {
    return {
        queryDiversByName: function(name) {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/divers/buddies?name=' + name + '&diverID=' + LocalStorageService.get('user')._id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        getDiverByID: function(id) {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/divers/' + id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        getDiverStats: function(diverID) {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/stats?diverID=' + diverID,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        getBuddies: function() {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/divers/buddies?diverID=' + LocalStorageService.get('user')._id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        addBuddy: function(buddyID) {
            var req = {
                method: 'POST',
                url: $http.defaults.base_url + '/divers/buddies/add?diverID=' + LocalStorageService.get('user')._id + '&buddyID=' + buddyID,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        },
        removeBuddy: function(buddyID) {
            var req = {
                method: 'POST',
                url: $http.defaults.base_url + '/divers/buddies/remove?diverID=' + LocalStorageService.get('user')._id + '&buddyID=' + buddyID,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }
    };
}]);
