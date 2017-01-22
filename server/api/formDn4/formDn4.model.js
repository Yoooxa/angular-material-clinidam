'use strict';

import mongoose from 'mongoose';

var FormDn4Schema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('FormDn4', FormDn4Schema);
