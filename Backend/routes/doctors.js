const router = require('express').Router();
const DoctorController = require('../controllers/doctors.controller');

router.post('/add', DoctorController.CreateDoctor);
router.post('/log-in', DoctorController.LogInDoctor);

module.exports = router;