'use strict';

/**
 * @ngdoc directive
 * @name usabitApp.directive:skypeUi
 * @description
 * # skypeUi
 */
angular.module('usabitApp')
  .directive('skypeUi', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the skypeUi directive');
      }
    };
  });
