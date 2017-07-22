var module = angular.module('scubalog.services');

module.factory('FacebookService', ['$http', '$rootScope', '$facebook', 'LocalStorageService',
function($http, $rootScope, $facebook, LocalStorageService) {
    return {
        cacheUserData: function() {
            var promise = new Promise(function(resolve, reject) {
                $facebook.getLoginStatus().then(function(response) {
                    $facebook.api('/me?fields=name,email').then(function(response) {
                        var fbUser = {};
                        fbUser.name = response.name;
                        fbUser.facebookID = response.id;
                        fbUser.email = response.email;

                        $facebook.api('/me/picture?width=9999').then(function(response) {
                            fbUser.picture = response.data.url;
                            LocalStorageService.set('fbUser', fbUser);
                            $rootScope.auth.user = fbUser;
                            resolve(fbUser);
                        }, function(err) {
                            LocalStorageService.set('fbUser', fbUser);
                            $rootScope.auth.user = fbUser;
                            reject(err);
                        });
                    }, function(err) {
                        console.log(err);
                    });
                });
            });

            return promise;
        }
    };
}]);
