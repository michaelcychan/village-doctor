const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  villagerpigeonmail: {
    type: Schema.Types.ObjectId, ref: 'Villager',
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  complainof: {
    type: String
  },
  attendance: {
    type: Boolean
  },
  docname: {
    type: Schema.Types.ObjectId, ref: 'Doctor'
  },
  doctorsnote: {
    type: String
  }
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;