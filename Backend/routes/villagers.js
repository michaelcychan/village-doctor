const router = require('express').Router();
const Villager = require('../models/villager.model');
const VillagerController = require('../controllers/villagers.controller')

router.get('/new', VillagerController.Index);
router.post('/add', VillagerController.Create);

module.exports = router;