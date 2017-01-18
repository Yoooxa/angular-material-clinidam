'use strict';

describe('Component: Dn4Component', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var Dn4Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    Dn4Component = $componentController('dn4', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
