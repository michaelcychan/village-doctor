const router = require('express').Router();
const BookingController = require('../controllers/bookings.controller');

router.get('/', BookingController.Index);
router.post('/new', BookingController.Create);
router.get('/show', BookingController.Show);

module.exports = router;