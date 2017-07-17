var module = angular.module('scubalog.controllers');

module.controller('BaseController', ['$scope', function($scope) {
    $('.button-collapse').sideNav({
        closeOnClick: true,
        draggable: true
    });
}]);
