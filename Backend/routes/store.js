const router = require('express').Router();
const StoreController = require('../controllers/store.controller');

router.post('/add-item', StoreController.CreateNewItem);
router.get('/managestock', StoreController.ViewAllItems);
router.get('/view', StoreController.ViewAllItems);
router.put('/managestock', StoreController.UpdateItem);
router.delete('/deletestock/:productName', StoreController.DeleteItem);

module.exports = router;