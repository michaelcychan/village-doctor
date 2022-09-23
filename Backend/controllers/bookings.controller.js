const Booking = require('../models/booking.model');

const BookingController = {
  Index: (req, res) => {
    console.log('booking index')
    res.json({title: "Make a booking", session: req.session});
  },
  Create: (req, res) => {
    const booking = new Booking({
      date: Date.parse(req.body.date),
      villagerPigeonMail: req.body.villagerpigeonmail,
      dob: Date.parse(req.body.dob),
      complainOf: req.body.complainOf,
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
    const searchData = {
      date: Date.parse(req.query.date)
    }
    Booking.find(searchData)
      .then(bookings => res.json(bookings))
      .catch(error => res.status(400).json('Error: ' + error));
  },
  ShowAll: (req, res) => {
    Booking.find()
      .then(bookings => res.json(bookings))
      .catch(error => res.status(400).json('Error ' + error))
  }
}

module.exports = BookingController;