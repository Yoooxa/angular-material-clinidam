'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var formDn4CtrlStub = {
  index: 'formDn4Ctrl.index',
  show: 'formDn4Ctrl.show',
  create: 'formDn4Ctrl.create',
  upsert: 'formDn4Ctrl.upsert',
  patch: 'formDn4Ctrl.patch',
  destroy: 'formDn4Ctrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var formDn4Index = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './formDn4.controller': formDn4CtrlStub
});

describe('FormDn4 API Router:', function() {
  it('should return an express router instance', function() {
    expect(formDn4Index).to.equal(routerStub);
  });

  describe('GET /api/formDn4s', function() {
    it('should route to formDn4.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'formDn4Ctrl.index')
        ).to.have.been.calledOnce;
    });
  });

  describe('GET /api/formDn4s/:id', function() {
    it('should route to formDn4.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'formDn4Ctrl.show')
        ).to.have.been.calledOnce;
    });
  });

  describe('POST /api/formDn4s', function() {
    it('should route to formDn4.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'formDn4Ctrl.create')
        ).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/formDn4s/:id', function() {
    it('should route to formDn4.controller.upsert', function() {
      expect(routerStub.put
        .withArgs('/:id', 'formDn4Ctrl.upsert')
        ).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/formDn4s/:id', function() {
    it('should route to formDn4.controller.patch', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'formDn4Ctrl.patch')
        ).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/formDn4s/:id', function() {
    it('should route to formDn4.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'formDn4Ctrl.destroy')
        ).to.have.been.calledOnce;
    });
  });
});
