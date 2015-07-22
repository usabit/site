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
    'ui.bootstrap',
    'angulartics', 
    'angulartics.google.analytics'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
        //templateUrl: 'views/contato/form.html',
        //controller: 'ContatoFormCtrl'
        redirectTo: '/contato'
      })
      .when('/cases', {
        templateUrl: 'views/cases.html',
        controller: 'CasesCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog/:postName', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/nosso-jeito', {
        templateUrl: 'views/nosso-jeito.html',
        controller: 'NossoJeitoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      if (window.document.URL.indexOf('http://127.0.0.1') === 0 || window.document.URL.indexOf('http://localhost') === 0) {
        
      } else {
        $locationProvider.html5Mode(true);
      }

  }).run(['$rootScope', '$location',
    function($rootScope, $location) {
      $rootScope.$on('$routeChangeStart', function(event, current) {
        $rootScope.currentController = current.controller;
        $rootScope.inaugurationOpened = false;

        if (window.document.URL.indexOf('http://127.0.0.1') === 0 || window.document.URL.indexOf('http://localhost') === 0) {
          $rootScope.path = '/#';
        } else {
          $rootScope.path = '';
        }


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
  
