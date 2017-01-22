'use strict';

describe('Component: ComplexSheetComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var ComplexSheetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ComplexSheetComponent = $componentController('complexSheet', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
