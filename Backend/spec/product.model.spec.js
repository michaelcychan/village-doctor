const mongoose = require('mongoose');
require('./mongodb_helper');
const Product = require('../models/product.model');

describe('Product', () => {
  beforeEach(async () => {
    await mongoose.connection.collection('products').deleteMany({});
  });
  it('saves a product to database', async () => {
    const newProduct = new Product({
      productID: 4,
      productName: 'Weak healing potion',
      price: 40,
      description: '+100 health',
      imageUri: 'http://aqwwiki.wdfiles.com/local--files/use-items/PotionRed.png',
      categoryID: 20
    });
    await newProduct.save();
    const searchResult = await Product.find();
    expect(searchResult[0]).toMatchObject({
      productID: 4,
      productName: 'Weak healing potion',
      price: 40,
      description: '+100 health',
      imageUri: 'http://aqwwiki.wdfiles.com/local--files/use-items/PotionRed.png',
      categoryID: 20,
      tag: []
    });
  });
})