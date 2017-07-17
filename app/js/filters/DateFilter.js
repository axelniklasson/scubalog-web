var module = angular.module('scubalog.filters');

module.filter('prettyDate', function() {
    return function(dateString) {
        return moment(dateString).format('MMM D YYYY');
    };
});

module.filter('prettyDateShort', function() {
    return function(dateString) {
        return moment(dateString).format('LLL');
    };
});

module.filter('shortDate', function() {
    return function(dateString) {
        return moment(dateString).fromNow(true);
    };
});

module.filter('timeSince', function() {
    return function(dateString) {
        return moment(dateString).toNow(true);
    };
});
