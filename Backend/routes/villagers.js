const router = require('express').Router();
const { LogInVillager } = require('../controllers/villagers.controller');
const VillagerController = require('../controllers/villagers.controller')

router.post('/addnewvillager', VillagerController.CreateAsync);
router.post('/log-in', LogInVillager);

module.exports = router;