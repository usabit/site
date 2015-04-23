'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:ContatoFormCtrl
 * @description
 * # ContatoFormCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('ContatoFormCtrl', function ($scope, $routeParams) {
    $scope.assunto = $routeParams.type;
  });
