'use strict';

var app = require('../..');
import request from 'supertest';

var newFormDn4;

describe('FormDn4 API:', function() {
  describe('GET /api/formDn4s', function() {
    var formDn4s;

    beforeEach(function(done) {
      request(app)
        .get('/api/formDn4s')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          formDn4s = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(formDn4s).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/formDn4s', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/formDn4s')
        .send({
          name: 'New FormDn4',
          info: 'This is the brand new formDn4!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFormDn4 = res.body;
          done();
        });
    });

    it('should respond with the newly created formDn4', function() {
      expect(newFormDn4.name).to.equal('New FormDn4');
      expect(newFormDn4.info).to.equal('This is the brand new formDn4!!!');
    });
  });

  describe('GET /api/formDn4s/:id', function() {
    var formDn4;

    beforeEach(function(done) {
      request(app)
        .get(`/api/formDn4s/${newFormDn4._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          formDn4 = res.body;
          done();
        });
    });

    afterEach(function() {
      formDn4 = {};
    });

    it('should respond with the requested formDn4', function() {
      expect(formDn4.name).to.equal('New FormDn4');
      expect(formDn4.info).to.equal('This is the brand new formDn4!!!');
    });
  });

  describe('PUT /api/formDn4s/:id', function() {
    var updatedFormDn4;

    beforeEach(function(done) {
      request(app)
        .put(`/api/formDn4s/${newFormDn4._id}`)
        .send({
          name: 'Updated FormDn4',
          info: 'This is the updated formDn4!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFormDn4 = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFormDn4 = {};
    });

    it('should respond with the updated formDn4', function() {
      expect(updatedFormDn4.name).to.equal('Updated FormDn4');
      expect(updatedFormDn4.info).to.equal('This is the updated formDn4!!!');
    });

    it('should respond with the updated formDn4 on a subsequent GET', function(done) {
      request(app)
        .get(`/api/formDn4s/${newFormDn4._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let formDn4 = res.body;

          expect(formDn4.name).to.equal('Updated FormDn4');
          expect(formDn4.info).to.equal('This is the updated formDn4!!!');

          done();
        });
    });
  });

  describe('PATCH /api/formDn4s/:id', function() {
    var patchedFormDn4;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/formDn4s/${newFormDn4._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched FormDn4' },
          { op: 'replace', path: '/info', value: 'This is the patched formDn4!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFormDn4 = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFormDn4 = {};
    });

    it('should respond with the patched formDn4', function() {
      expect(patchedFormDn4.name).to.equal('Patched FormDn4');
      expect(patchedFormDn4.info).to.equal('This is the patched formDn4!!!');
    });
  });

  describe('DELETE /api/formDn4s/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/formDn4s/${newFormDn4._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when formDn4 does not exist', function(done) {
      request(app)
        .delete(`/api/formDn4s/${newFormDn4._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
