const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// bookings
const bookingSchema = new Schema({
  bookingID:{
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
  age: {
    type: Number,
    required: true
  },
  complainOf: {
    type: String
  },
}, {
  timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
