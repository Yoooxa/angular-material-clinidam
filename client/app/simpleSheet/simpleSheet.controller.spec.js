'use strict';

describe('Component: SimpleSheetComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var SimpleSheetComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SimpleSheetComponent = $componentController('simpleSheet', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
