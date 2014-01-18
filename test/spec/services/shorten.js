'use strict';

describe('Service: Shorten', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var Shorten;
  beforeEach(inject(function (_Shorten_) {
    Shorten = _Shorten_;
  }));

  it('should do something', function () {
    expect(!!Shorten).toBe(true);
  });

});
