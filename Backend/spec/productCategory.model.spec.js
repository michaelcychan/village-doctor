const mongoose = require('mongoose')
require('./mongodb_helper');
const ProductCategory = require('../models/productCategory.model');

describe('ProductCategory', () => {
  beforeEach((done) => {
    mongoose.connection.collection('productcategories').deleteMany({}, () => {
      done();
    });
  });
  it('saves a category to database', async () => {
    const newCat = new ProductCategory({
      categoryID: 2,
      categoryName: 'Spell'
    });
    await newCat.save();
    const searchResult = await ProductCategory.find();
    expect(searchResult[0]).toMatchObject({
      categoryID: 2,
      categoryName: 'Spell'
    });
  });
})