'use strict';

describe('Controller: LastCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var LastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LastCtrl = $controller('LastCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
