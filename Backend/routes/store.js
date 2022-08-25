const router = require('express').Router();
const StoreController = require('../controllers/store.controller');

router.post('/add-item', StoreController.CreateNewItem);

module.exports = router;