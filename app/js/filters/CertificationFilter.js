var module = angular.module('scubalog.filters');

module.filter('certification', function() {
    return function(certification) {
        switch(certification) {
            case 'OW':
                return 'Open water';

            case 'AOW':
                return 'Advanced open water';

            case 'RESCUE':
                return 'Rescue diver';

            case 'DIVEMASTER':
                return 'Divemaster';

            case 'INSTRUCTOR':
                return 'Instructor';
        }
    };
});
