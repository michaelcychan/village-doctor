const Booking = require('../models/booking.model');

const BookingController = {
  Index: (req, res) => {
    res.json({title: "Make a booking", session: req.session});
  },
  Create: (req, res) => {
    const booking = new Booking({
      // need to update according to model change
      date: Date.parse(req.body.date),
      villagerpigeonmail: req.body.villagerpigeonmail,
      dob: req.body.dob,
      complainof: req.body.complainof,
    });
    booking.save((error, result) => {
      if (error) {
        console.log(error);
        res.json(`Healing session not accepted: ${error}`)
      } else {
        res.json('Healing session accepted.')
      }
    })
  },
  Show: (req, res) => {
    Booking.find({villagerpigeonmail: req.session.villagerpigeonmail})
      .then(bookings => res.json(bookings))
      .catch(error => res.status(400).json('Error: ' + error));
  }
}

module.exports = BookingController;