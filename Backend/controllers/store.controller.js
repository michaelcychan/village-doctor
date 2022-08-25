const Product = require('../models/product.model');

const StoreController = {

  //create new item
  CreateNewItem: (req, res) => {
    console.log(req.body)
    res.json(req.body)
  }
};

module.exports = StoreController;