const router = require('express').Router();
const VillagerController = require('../controllers/villagers.controller')

router.get('/new', VillagerController.Index);
router.post('/add', VillagerController.Create);
router.post('/addnewvillager', VillagerController.CreateAsync);

module.exports = router;