/* globals $ */
'use strict';

angular.module('healthApp')
    .directive('healthAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
