'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:DezMotivosParaContratarNossoTimeCtrl
 * @description
 * # DezMotivosParaContratarNossoTimeCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('PostCtrl', function ($scope, $routeParams, $timeout, contatoService) {
    $scope.postName = $routeParams.postName;	
	$scope.postContent = '/views/posts/' + $scope.postName + '.html';
	$scope.formMail = {
		Nome: '',
		Email: '',
		Mensagem: ''
	};
	$scope.alerts = [];

	var oriFormMail = angular.copy($scope.formMail);
   
    $scope.sendMail = function(){
    	contatoService.save($scope.formMail, function(result) {
    		console.log('Sucesso: ', result);
    		$scope.alerts.push({type: 'sucess', msg: 'Mensagem enviada com sucesso.'});

    		$scope.contactForm.$setPristine();

    		$timeout(function() {
    			$scope.closeAlert(0);
    		}, 1000 * 15);

    	}, function(error) {
    		console.log('Erro: ', error);
    		$scope.alerts.push({type: 'danger', msg: 'Falha ao enviar mensagem.'});

    		$timeout(function() {
    			$scope.closeAlert(0);
    		}, 1000 * 15);
    	});
    };

    $scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
  });
