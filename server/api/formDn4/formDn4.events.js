/**
 * FormDn4 model events
 */

'use strict';

import {EventEmitter} from 'events';
import FormDn4 from './formDn4.model';
var FormDn4Events = new EventEmitter();

// Set max event listeners (0 == unlimited)
FormDn4Events.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  FormDn4.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    FormDn4Events.emit(event + ':' + doc._id, doc);
    FormDn4Events.emit(event, doc);
  };
}

export default FormDn4Events;
