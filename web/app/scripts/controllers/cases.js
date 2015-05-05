'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:CasesCtrl
 * @description
 * # CasesCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('CasesCtrl', function ($scope, $window, $http) {
    $scope.rafaBehance = {};
    $scope.rodrigoBehance = {};

    $scope.getBehanceRafa = function() {
    	var user = 'rafatavares';
        var apiKey = 'SzZcY0jvmH6DsU7v7vuB7jb37IDVGw3k';
        var url = 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK';     
          $http.jsonp(url).error(function (response, status) {
            $window.alert(status);
          }).success(function (response) {
            console.log('Promise data:', response);
          }).then(function (response) {
            $scope.rafaBehance = response.data;           
        });
    };
    $scope.getBehanceRafa();

    $scope.getBehanceRodrigo = function() {
      var user = 'rolemos';
        var apiKey = '9bpwYMZ6ollzZgSil8nxTk0G0Vefrc1R';
        var url = 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK';     
          $http.jsonp(url).error(function (response, status) {
            $window.alert(status);
          }).success(function (response) {
            console.log('Promise data:', response);
          }).then(function (response) {
            if (response.data.projects.length <= 0) {
              $scope.emptyBehanceRodrigo = true;
            }
            $scope.rodrigoBehance = response.data;           
        });
    };
    $scope.getBehanceRodrigo();

  });
