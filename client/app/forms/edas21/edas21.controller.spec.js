'use strict';

describe('Component: Edas21Component', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var Edas21Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    Edas21Component = $componentController('edas21', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
