const router = require('express').Router();
const StoreController = require('../controllers/store.controller');

router.post('/add-item', StoreController.CreateNewItem);
router.get('/managestock', StoreController.ViewAllItems);
router.get('/view', StoreController.ViewAllItems);

module.exports = router;