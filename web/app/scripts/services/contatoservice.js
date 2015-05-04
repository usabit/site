'use strict';

/**
 * @ngdoc service
 * @name usabitApp.contatoService
 * @description
 * # contatoService
 * Service in the usabitApp.
 */
angular.module('usabitApp')
  .service('contatoService', ['$resource', function($resource) {
	return $resource('/api/contato.php', {},{});
}]);