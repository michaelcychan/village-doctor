const Product = require('../models/product.model');

const StoreController = {

  //View items
  ViewAllItems: async (req, res) => {
    try {
      const result = await Product.find();
      res.json(result)
    } catch(error) {
      console.error(error);
      res.status(409).json(error);
    }
  },

  //create new item
  CreateNewItem: async (req, res) => {
    const newProduct = new Product({
      productName: req.body.productName,
      price: req.body.price,
      description: req.body.description,
      imageUri: req.body.imageUri,
      category: req.body.category,
      tag: req.body.tag
    });
    try {
      const result = await newProduct.save();
      res.json({
        productName: result.productName,
        price: req.body.price
      })
    } catch(error) {
      console.error(error)
      res.status(409).json(error);
    }
  },
};

module.exports = StoreController;