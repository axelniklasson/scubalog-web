var module = angular.module('scubalog.services');

module.factory('LocalStorageService', function() {
    return {
        exists: function(key) {
            return localStorage.getItem(key) !== null;
        },
        set: function(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        clear: function(key) {
            localStorage.removeItem(key);
        }
    };
});
