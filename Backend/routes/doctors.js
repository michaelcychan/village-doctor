const router = require('express').Router();
const Doctor = require('../models/doctor.model');
const DoctorController = require('../controllers/doctors.controller');

router.get('/new', DoctorController.Index);
router.post('/add', DoctorController.Create);

module.exports = router;