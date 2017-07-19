var module = angular.module('scubalog.controllers');

module.controller('BuddiesController', ['$scope', '$rootScope', 'DiverService',
function($scope, $rootScope, DiverService) {
    $scope.query = {
        name: '',
        loading: false
    };
    $('.modal').modal();

    DiverService.getBuddies().then(function(response) {
        $scope.buddies = response.data;
    }).then(function(err) {
        if (err) {
            Materialize.toast('Could not get buddies. Try again later!', 3000);
        }
    });

    $scope.search = function() {
        if (!$scope.query.loading && $scope.query.name.length > 1) {
            $scope.query.loading = true;
            DiverService.queryDiversByName($scope.query.name).then(function(response) {
                $scope.queryResult = response.data;
            }).then(function(err) {
                if (err) {
                    Materialize.toast('Could not search divers. Try again later!', 3000);
                }
            });
            $scope.query.loading = false;
        }
    };

    $scope.removeBuddy = function(buddy) {
        DiverService.removeBuddy(buddy).then(function(response) {
            Materialize.toast('Buddy removed!', 3000);
            var index = $scope.buddies.indexOf(buddy);
            $scope.buddies.splice(index, 1);
        }).then(function(err) {
            if (err) {
                Materialize.toast('Could not remove buddy. Try again later!', 3000);
            }
        });
    };

    $scope.addBuddy = function(buddy) {
        DiverService.addBuddy(buddy._id).then(function(response) {
            Materialize.toast('Buddy added!', 3000);
            $('#queryBuddiesModal').modal('close');
            $scope.buddies.push(buddy);
            $scope.closeQueryBuddiesModal();
            $scope.queryResult = null;
        }).then(function(err) {
            if (err) {
                Materialize.toast('Could not remove buddy. Try again later!', 3000);
            }
        });
    };

    $scope.showQueryBuddiesModal = function() {
        $('#queryBuddiesModal').modal('open');
        $('#buddyNameInput').focus();
        $scope.queryBuddiesModalOpened = true;
    };

    $scope.closeQueryBuddiesModal = function() {
        $('#queryBuddiesModal').modal('close');
        $scope.query.name = '';
        $scope.query.loading = false;
    };

}]);
