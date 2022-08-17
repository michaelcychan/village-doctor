const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  appointmentID:{
    type: Number
  },
  date: {
    type: Date,
    required: true
  },
  villagerPigeonMail: {
    type: String,
    required: true
  },
  docLogin: {
    type: String,
    unique: true,
    trim: true
  },
  docNotes: {
    type: String
  }
});

const Appoitnment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appoitnment;
