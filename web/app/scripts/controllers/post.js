'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:DezMotivosParaContratarNossoTimeCtrl
 * @description
 * # DezMotivosParaContratarNossoTimeCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('PostCtrl', function ($scope, $routeParams) {
    $scope.postName = $routeParams.postName;

    console.log($scope.postName);
	
	$scope.postContent = '/views/posts/' + $scope.postName + '.html';
  });
