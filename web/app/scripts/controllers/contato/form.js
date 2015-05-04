'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:ContatoFormCtrl
 * @description
 * # ContatoFormCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('ContatoFormCtrl', function ($scope, $routeParams, contatoService) {
    $scope.assunto = $routeParams.type;
    $scope.formMail = {};
   
    $scope.sendMail = function(){
    	contatoService.save($scope.formMail);
    };

  });
