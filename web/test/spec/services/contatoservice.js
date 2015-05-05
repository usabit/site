'use strict';

describe('Service: contatoService', function () {

  // load the service's module
  beforeEach(module('usabitApp'));

  // instantiate service
  var contatoService;
  beforeEach(inject(function (_contatoService_) {
    contatoService = _contatoService_;
  }));

  it('should do something', function () {
    expect(!!contatoService).toBe(true);
  });

});
