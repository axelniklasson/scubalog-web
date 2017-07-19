var module = angular.module('scubalog.services');

module.factory('DashboardService', ['$http', 'LocalStorageService', function($http, LocalStorageService) {
    return {
        getStats: function() {
            var req = {
                method: 'GET',
                url: $http.defaults.base_url + '/stats?diverID=' + LocalStorageService.get('user')._id,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }
    };
}]);
