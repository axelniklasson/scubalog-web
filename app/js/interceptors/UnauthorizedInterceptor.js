var module = angular.module('scubalog.interceptors');

module.factory('UnauthorizedInterceptor', ['$q', '$injector', function($q, $injector) {
    var unauthorizedInterceptor = {
        responseError: function(response) {
            if (response.status === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('userID');
                $injector.get('$state').transitionTo('login');
            }
            return $q.reject(response);
        }
    };
    return unauthorizedInterceptor;
}]);
