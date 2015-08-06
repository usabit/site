'use strict';

/**
 * @ngdoc function
 * @name usabitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usabitApp
 */
angular.module('usabitApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $translate) {

    $scope.translateControl = function() {
      $translate([
        'HOME.WHAT_YOU_NEED.COMBO_NEW_PROJECT',
        'HOME.WHAT_YOU_NEED.COMBO_SUPPORT',
        ]).then(function (translations) {
        $scope.comboTypeProject = translations['HOME.WHAT_YOU_NEED.COMBO_NEW_PROJECT'];
        $scope.comboTypeSupport = translations['HOME.WHAT_YOU_NEED.COMBO_SUPPORT'];
        $scope.comboTypeTraining = translations['NAMESPACE.PARAGRAPH'];
      });
    };
    $scope.translateControl();

    $rootScope.$on('$translateChangeSuccess', function () {
      $scope.translateControl();
    });


  	$scope.comboType = [
  		{ value: '1', label: 'um suporte'},
  		{ value: '2', label: 'um projeto novo'},
  		{ value: '3', label: 'um treinamento'},
  		{ value: '4', label: 'uma consultoria'}
  	];
    $scope.selectedComboType = $scope.comboType[1];

    

    $scope.comboProjeto = [
      { value: '2-1', label: 'de um site'},
      { value: '2-2', label: 'de um sistema'},
      { value: '2-3', label: 'de um app'},
      //{ value: '2-4', label: 'de design e pesquisa com usuários'}
    ];
    $scope.selectedComboProjeto =  $scope.comboProjeto[0];

    $scope.comboSuporte = [
      //{ value: '1-1', label: 'para minha equipe de TI'},
      { value: '1-2', label: 'no desenvolvimento de htmls'},
      { value: '1-3', label: 'no design do meu projeto'},
      //{ value: '1-4', label: 'de Marketing'}
    ];
    $scope.selectedComboSuporte = $scope.comboSuporte[1];

    $scope.comboTreinamento = [
      { value: '3-1', label: 'para aumentar a qualidade da minha equipe de TI'},
      //{ value: '3-2', label: 'de como manter minha empresa relevante no Google'},
      //{ value: '3-3', label: 'de como manter minhas redes sociais'}
    ];
    $scope.selectedComboTreinamento = $scope.comboTreinamento[0];

    $scope.comboConsultoria = [
      //{ value: '4-1', label: 'de UX (User Experience)'},
      //{ value: '4-2', label: 'de marketing online'},
      { value: '4-3', label: 'de desenvolvimento de software'},
      //{ value: '4-4', label: 'de minificação de códigos'}
    ];
    $scope.selectedComboConsultoria = $scope.comboConsultoria[0];

  	$scope.$watch('selectedComboType', function() {
      //console.log($scope.selectedComboType);

      if ($scope.selectedComboType.value === '1') {
        //console.log('> 1');
        $scope.isOption1 = true;
        $scope.isOption2 = false; $scope.isOption3 = false; $scope.isOption4 = false;
      } else if ($scope.selectedComboType.value === '2') {
        //console.log('> 2');
        $scope.isOption2 = true;
        $scope.isOption1 = false; $scope.isOption3 = false; $scope.isOption4 = false;
      } else if ($scope.selectedComboType.value === '3') {
        //console.log('> 3');
        $scope.isOption3 = true;
        $scope.isOption2 = false; $scope.isOption1 = false; $scope.isOption4 = false;
      } else {
        //console.log('> 4');
        $scope.isOption4 = true;
        $scope.isOption2 = false; $scope.isOption3 = false; $scope.isOption1 = false;
      }
    });

    $scope.submit = function() {
      switch ($scope.selectedComboType.value) {
        case '1':
          switch ($scope.selectedComboSuporte.value) {
            case '1-1':
              window.location.href = '/blog/um-suporte-para-minha-equipe-de-ti';
              break;
            case '1-2':
              $location.path('/blog/um-suporte-no-desenvolvimento-de-htmls');
              break;
            case '1-3':
              $location.path('/blog/um-suporte-no-design-do-meu-projeto');
              break;
            case '1-4':
              window.location.href = '/blog/um-suporte-de-marketing';
              break;
          }
          break;
        case '2':
          switch ($scope.selectedComboProjeto.value) {
            case '2-1':
              $location.path('/blog/dez-motivos-para-contratar-nosso-time');
              break;
            case '2-2':
              $location.path('/contato/form/sistema');
              break;
            case '2-3':
              $location.path('/contato/form/app');
              break;
            case '2-4':
              window.location.href = '/blog/design-e-pesquisa-com-o-usuario';
              break;
          }
          break;
        case '3':
          switch ($scope.selectedComboTreinamento.value) {
            case '3-1':
              $location.path('/blog/aumente-a-qualidade-da-sua-equipe');
              break;
            case '3-2':
              window.location.href = '/blog/minha-empresa-relevante-no-google';
              break;
            case '3-3':
              window.location.href = '/blog/como-manter-minhas-redes-sociais';
              break;
          }
          break;
        case '4':
          switch ($scope.selectedComboConsultoria.value) {
            case '4-1':
              window.location.href = '/blog/uma-consultoria-de-ux';
              break;
            case '4-2':
              window.location.href = '/blog/uma-consultoria-de-marketing-online';
              break;
            case '4-3':
              $location.path('/blog/uma-consultoria-de-desenvolvimento-de-software');
              break;
            case '4-4':
              window.location.href = '/blog/uma-consultoria-de-minificacao-de-codigo';
              break;
          }
          break;
      }
      //console.log($scope.selectedComboSuporte, $scope.selectedComboProjeto, $scope.selectedComboTreinamento, $scope.selectedComboConsultoria);
    };

    // OWL CAROUSEL
    // ===================================================================
    $scope.owlOptions = {
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1199,1],
        itemsDesktopSmall: [979,1],
        itemsTablet:[768, 1],
        pagination: false,
        autoPlay: 10000
    };
  });
