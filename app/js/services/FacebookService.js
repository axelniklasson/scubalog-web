var module = angular.module('scubalog.services');

module.factory('FacebookService', ['$http', '$rootScope', '$facebook', 'LocalStorageService',
function($http, $rootScope, $facebook, LocalStorageService) {
    return {
        cacheUserData: function() {
            var promise = new Promise(function(resolve, reject) {
                $facebook.getLoginStatus().then(function(response) {
                    $facebook.api('/me?fields=name,email').then(function(response) {
                        // Build user object to cache
                        var fbUser = {};
                        fbUser.name = response.name;
                        fbUser.facebookID = response.id;
                        fbUser.email = response.email;
                        fbUser.picture = 'https://graph.facebook.com/' + fbUser.facebookID + '/picture?width=400&height=400';

                        // Cache user object and resolve promise
                        LocalStorageService.set('fbUser', fbUser);
                        $rootScope.auth.user = fbUser;
                        resolve(fbUser);
                    }, function(err) {
                        console.log(err);
                        reject(err);
                    });
                });
            });

            return promise;
        }
    };
}]);
