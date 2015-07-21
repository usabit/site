'use strict';

/**
 * @ngdoc directive
 * @name crtApp.directive:owlcarousel
 * @description
 * # owlcarousel
 */
angular.module('usabitApp')
  .directive('owlcarousel', function () {
    
    var linker = function(scope,element,attr){ // jshint ignore:line 
		//carrega o carrosel
		var loadCarousel = function(){
			element.owlCarousel(scope.owlOptions);
		};
 
		//aplica as ações para o carrosel
		var loadCarouselActions = function(){
			angular.element('.owlcarousel_next').click(function(){
				element.trigger('owl.next');
			});
			angular.element('.owlcarousel_prev').click(function(){
				element.trigger('owl.prev');
			});
			angular.element('.owlcarousel_play').click(function(){
				element.trigger('owl.play',1000);
			});
			angular.element('.owlcarousel_stop').click(function(){
				element.trigger('owl.stop');
			});
		};
 
		//toda vez que adicionar ou remover um item da lista ele carrega o carrosel novamente
		scope.$watch('itens', function(value) { // jshint ignore:line
			loadCarousel(element);
		});
 
		//inicia o carrosel
		loadCarouselActions();
	};
 
	return {
		restrict : 'A',
		scope: { owlOptions: '=' },
		link: linker
	};

  });
