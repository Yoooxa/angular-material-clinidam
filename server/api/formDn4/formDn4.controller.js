/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/formDn4s              ->  index
 * POST    /api/formDn4s              ->  create
 * GET     /api/formDn4s/:id          ->  show
 * PUT     /api/formDn4s/:id          ->  upsert
 * PATCH   /api/formDn4s/:id          ->  patch
 * DELETE  /api/formDn4s/:id          ->  destroy
 */

'use strict';

// import jsonpatch from 'fast-json-patch';
import FormDn4 from './formDn4.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

// function patchUpdates(patches) {
//   return function(entity) {
//     try {
//       jsonpatch.apply(entity, patches, /*validate*/ true);
//     } catch(err) {
//       return Promise.reject(err);
//     }
//
//     return entity.save();
//   };
// }

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of FormDn4s
export function index(req, res) {
  return FormDn4.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single FormDn4 from the DB
export function show(req, res) {
  return FormDn4.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new FormDn4 in the DB
export function create(req, res) {
  return FormDn4.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given FormDn4 in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return FormDn4.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing FormDn4 in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return FormDn4.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a FormDn4 from the DB
export function destroy(req, res) {
  return FormDn4.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
