const Product = require('../models/product.model');

const StoreController = {

  // view one item
  ViewOneItem: async (req, res) => {
    try {
      const result = await Product.findOne(req.params);
      res.json(result)
    } catch(error) {
      console.error(error);
      res.status(404).json(error);
    }
  },

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
    const newProduct = new Product(req.body);
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

  UpdateItem: async (req, res) => {
    filter = {productName: req.body.productName}
    update = {
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      stockNumber: Number(req.body.stockNumber),
      tag: req.body.tag
    }
    try {
      const response = await Product.findOneAndUpdate(filter, update, {new: true})
      res.json('update successful')
    } catch(error) {
      console.error(error)
      res.status(409).json(error)
    }
    
  },

  DeleteItem: async (req, res) => {
    try {
      const result = await Product.findOneAndDelete({"productName": req.params.productName});
      res.json(`Item ${result.productName} has been deleted`)
    } catch(error) {
      console.error(error);
      res.status(409).json(error);
    }
  }
};

module.exports = StoreController;