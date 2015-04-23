'use strict';

describe('Controller: ContatoFormCtrl', function () {

  // load the controller's module
  beforeEach(module('usabitApp'));

  var ContatoFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContatoFormCtrl = $controller('ContatoFormCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
