var module = angular.module('scubalog.controllers');

module.controller('LoginController', ['$scope', '$facebook',function($scope, $facebook) {
    $scope.login = function() {
        $facebook.login().then(function() {
            $facebook.getLoginStatus().then(function(response) {
                $facebook.api('/me').then(function(response) {
                    var fbUser = {};
                    fbUser.name = response.name;
                    fbUser.id = response.id;

                    $facebook.api('/me/picture').then(function(response) {
                        fbUser.picture = response.data.url;
                    }, function(err) {
                        console.log(err);
                        $rootScope.social.fb.loading = false;
                    });

                    console.log(fbUser);

                }, function(err) {
                    console.log(err);
                });
            });
        });
    };
}]);
