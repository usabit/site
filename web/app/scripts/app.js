'use strict';

/**
 * @ngdoc overview
 * @name usabitApp
 * @description
 * # usabitApp
 *
 * Main module of the application.
 */
angular
  .module('usabitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select',
    'angulartics', 
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contato', {
        templateUrl: 'views/contato.html',
        controller: 'ContatoCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/contato/form/:type', {
        templateUrl: 'views/contato/form.html',
        controller: 'ContatoFormCtrl'
        //redirectTo: '/contato'
      })
      .when('/cases', {
        templateUrl: 'views/cases.html',
        controller: 'CasesCtrl'
      })
      .when('/:postName', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location',
    function($rootScope, $location) {
      $rootScope.$on('$routeChangeStart', function(event, current) {
        $rootScope.currentController = current.controller;
        $rootScope.inaugurationOpened = false;


        // Determina qual item do menu deve estar ativo.
        $rootScope.isActive = function(route) {
          return route === $location.path().split('/')[1];
        };

        // Joga o usuário para o topo da página a cada mudança de tela
        angular.element('html, body').animate({scrollTop: '0px'}, 300);

        // TODO: Oculta o menu
      });

      $rootScope.inaugurationControl = function(boolean) {
        console.log('InaugurationControl: ', boolean);

        if (boolean) {
          $rootScope.inaugurationOpened = true;
        } else {
          $rootScope.inaugurationOpened = false;
        }
      };
    }
  ]);
  
