'use strict';

describe('Component: IsiComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var IsiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    IsiComponent = $componentController('isi', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
