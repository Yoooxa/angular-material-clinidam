'use strict';

describe('Component: PsqiComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var PsqiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PsqiComponent = $componentController('psqi', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
