'use strict';

import mongoose from 'mongoose';

var FormDn4Schema = new mongoose.Schema({
  friction: String,
  hasBurns: String,
  hasElectricShock: String,
  hasPainCold: String,
  itching: String,
  numbness: String,
  patientBirthday: Date,
  patientFirstname: String,
  patientLastname: String,
  stingHypoesthesia: String,
  swarming: String,
  tactHypoesthesia: String,
  tingling: String
});

export default mongoose.model('FormDn4', FormDn4Schema);
