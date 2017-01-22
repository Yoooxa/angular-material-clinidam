'use strict';

describe('Component: SupportComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var SupportComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SupportComponent = $componentController('support', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
