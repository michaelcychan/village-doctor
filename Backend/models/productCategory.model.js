const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
  _id: {
    type: Number,
    unique: true
  },
  categoryName: {
    type: String,
    required: true,
    unique: true
  }
});

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
module.exports = ProductCategory;