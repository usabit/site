'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
