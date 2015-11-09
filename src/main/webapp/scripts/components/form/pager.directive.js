/* globals $ */
'use strict';

angular.module('healthApp')
    .directive('healthAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
