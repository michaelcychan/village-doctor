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
      category: 'Potion'
    });
    await newProduct.save();
    const searchResult = await Product.find();
    expect(searchResult[0]).toMatchObject({
      productID: 4,
      productName: 'Weak healing potion',
      price: 40,
      description: '+100 health',
      imageUri: 'http://aqwwiki.wdfiles.com/local--files/use-items/PotionRed.png',
      category: 'Potion',
      tag: []
    });
  });
  it('adds a tag to a product', async () => {
    const newPotion = new Product({
      productID: 4,
      productName: 'Weak healing potion',
      price: 40,
      description: '+100 health',
      imageUri: 'http://aqwwiki.wdfiles.com/local--files/use-items/PotionRed.png',
      category: 'Potion'
    });
    await newPotion.save();
    const newHerb = new Product({
      productID: 5,
      productName: 'Strange leaf',
      price: 3,
      description: 'An unknown leaf with unknown effect',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lisc_lipy.jpg/203px-Lisc_lipy.jpg',
      category: 'Plant'
    });
    await newHerb.save();
    await Product.findOneAndUpdate({productID: 5}, {$push: {tag: 'dangerous'}});
    await Product.findOneAndUpdate({productID: 5}, {$push: {tag: 'unknown'}});
    const searchResultHerb = await Product.findOne({productID: 5});
    const searchResultPotion = await Product.findOne({productID: 4});
    expect(searchResultHerb).toMatchObject({
      productID: 5,
      productName: 'Strange leaf',
      price: 3,
      description: 'An unknown leaf with unknown effect',
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lisc_lipy.jpg/203px-Lisc_lipy.jpg',
      category: 'Plant',
      tag: ['dangerous', 'unknown']
    });
    expect(searchResultPotion).toMatchObject({
      productID: 4,
      productName: 'Weak healing potion',
      price: 40,
      description: '+100 health',
      imageUri: 'http://aqwwiki.wdfiles.com/local--files/use-items/PotionRed.png',
      category: 'Potion',
      tag: []
    });
  });
})