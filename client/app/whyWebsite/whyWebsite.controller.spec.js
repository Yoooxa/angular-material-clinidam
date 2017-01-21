'use strict';

describe('Component: WhyWebsiteComponent', function () {

  // load the controller's module
  beforeEach(module('angularMaterialClinidamApp'));

  var WhyWebsiteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    WhyWebsiteComponent = $componentController('whyWebsite', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
