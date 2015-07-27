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
        controller: 'MainCtrl',
        title: 'Página inicial'
      })
      .when('/contato', {
        templateUrl: 'views/contato.html',
        controller: 'ContatoCtrl',
        title: 'Contato'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        title: 'Nosso time'
      })
      .when('/contato/form/:type', {
        //templateUrl: 'views/contato/form.html',
        //controller: 'ContatoFormCtrl'
        redirectTo: '/contato'
      })
      .when('/cases', {
        templateUrl: 'views/cases.html',
        controller: 'CasesCtrl',
        title: 'Nossos cases'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        title: 'Blog'
      })
      .when('/blog/:postName', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/nosso-jeito', {
        templateUrl: 'views/nosso-jeito.html',
        controller: 'NossoJeitoCtrl',
        title: 'Nosso jeito'
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
        $rootScope.currentTitle = current.title;
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
  
