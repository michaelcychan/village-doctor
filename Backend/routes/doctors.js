const router = require('express').Router();
const DoctorController = require('../controllers/doctors.controller');

router.get('/new', DoctorController.Index);
router.post('/add', DoctorController.Create);

module.exports = router;