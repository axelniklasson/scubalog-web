var module = angular.module('scubalog.services');

module.factory('FacebookService', ['$http', '$rootScope', '$facebook', 'LocalStorageService',
function($http, $rootScope, $facebook, LocalStorageService) {
    return {
        cacheUserData: function() {
            $facebook.getLoginStatus().then(function(response) {
                $facebook.api('/me?fields=name,email').then(function(response) {
                    var fbUser = {};
                    fbUser.name = response.name;
                    fbUser.id = response.id;
                    fbUser.email = response.email;

                    $facebook.api('/me/picture').then(function(response) {
                        fbUser.picture = response.data.url;
                        LocalStorageService.set('fbUser', fbUser);
                        $rootScope.auth.user = fbUser;
                    }, function(err) {
                        LocalStorageService.set('fbUser', fbUser);
                        $rootScope.auth.user = fbUser;
                        console.log(err);
                    });
                }, function(err) {
                    console.log(err);
                });
            });
        }
    };
}]);
